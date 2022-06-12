import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import { toast } from "react-toastify";
import { IoMdArrowRoundBack } from 'react-icons/io';
import { FaCartArrowDown } from 'react-icons/fa';
import { BsFillCartCheckFill } from 'react-icons/bs';
import { useQuery } from 'react-query'
import Loading from '../Loading/Loading';
import useAdmin from '../../CustomHook/useAdmin';

const PurchaseCar = () => {

    const [user, loading, error] = useAuthState(auth);
    //logged in user admin naki normal user sheita check ar jnno logged in user ar info useAdmin custom Hook a send 
    const [admin] = useAdmin(user);
    const { carid } = useParams()

    const url = `https://desolate-bastion-01704.herokuapp.com/getcar/${carid}`
    //basis on clicked car/carid we will fetch data from server
    const { isLoading, data: car, refetch } = useQuery('availblecar', () =>
        // heruko site boshbey
        fetch(url, {
            method: 'GET',
            headers: {
                authorization: `bearer ${localStorage.getItem('token')}`
            }
        }).then(res =>
            res.json()
        )
    )
    //console.log(car)

    if (isLoading || loading) {
        return <Loading></Loading>
    }

    const orderHandle = e => {
        e.preventDefault()
        const order = {
            product_id: carid,
            email: user.email,
            name: car.name,
            category:car.category,
            quantity: e.target.quantity.value,
            price: car.price,
            total: car.price * e.target.quantity.value,
            status: 'pending',
            image: car.img,
            date: new Date().toLocaleDateString(),
        }
        //console.log(order)

        if (!admin) {
            if (parseInt(order.quantity) <= parseInt(car.available_quantity) && parseInt(order.quantity) >= parseInt(car.min_quantity)) {
                //Order info Server side a send kora
                fetch('https://desolate-bastion-01704.herokuapp.com/order', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(order)
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data)
                        toast.success('Added To Wishlist')
                        document.getElementById('font-fields').reset()
                    })
            }

            else {
                toast.error('Not Enough Quantity', {
                    position: "top-left",
                    autoClose: 5000,
                })
            }
        }
        else {
            toast.warn('You are not authorized to order because you are admin!', {
                position: "top-left",
            })
        }
}

    const backToPrevious = () => {
        window.history.back()    //goes back to previous page (navigate use kora laglo na ar)
    }

    return (
        <>
            <div className='bg-yellow-500 p-6'>
                <div className='grid grid-cols-1 lg:grid-cols-2 p-6 gap-4 bg-white bg-opacity-30 backdrop-blur-lg rounded drop-shadow-lg'>
                    <div className=' text-black flex flex-col items-center p-2'>
                        <div className="card">
                            <figure><img src={car?.img} alt={car?.name} /></figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    {car?.name}
                                    <div className="badge badge-secondary">NEW</div>
                                </h2>
                                <p>{car?.description}</p>
                                <div className="card-actions ">
                                    <div className="badge badge-outline font-bold">{car?.supplier}</div>
                                    <div className="badge badge-outline font-bold">${car?.price}</div>
                                    <div className="badge badge-outline font-bold">{car?.category}</div>
                                </div>
                                <div className="mt-6">
                                    <div className=" font-semibold">Available Quantity: {car?.available_quantity}</div>
                                    <div className=" font-bold text-red-600">Minimun Purchase: {car?.min_quantity}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='bg-white bg-opacity-10 backdrop-blur-lg rounded drop-shadow-lg  mt-4 flex flex-col justify-center font-bold'>
                        <div className=' mt-2 '>
                            <h2 className='rounded-lg flex items-center justify-center'>ADD IT NOW!<FaCartArrowDown /></h2>
                        </div>

                        <form id='font-fields' onSubmit={orderHandle} className="my-8 grid grid-cols-1 gap-5 justify-items-center p-2 text-black">
                            <input value={user?.email} className="input input-warning  w-full max-w-xs" disabled />
                            <input value={car?.category} className="input input-warning  w-full max-w-xs" disabled />
                            <input value={car?.name} className="input input-warning  w-full max-w-xs" disabled />
                            <input type="text" name='adress' placeholder="Adress" className="input input-warning  w-full max-w-xs " required />
                            <input type="number" name='phone' placeholder="Phone Number" className="input input-warning  w-full max-w-xs " required />
                            <input type='number' name='quantity' placeholder="Order Quantity" className="input input-warning  w-full max-w-xs " required />

                            <button type="submit" className="input input-warning w-full max-w-xs hover:bg-yellow-500 hover:text-white hover:border-yellow-500 cursor-pointer font-bold flex items-center justify-center">
                                WISHLIST
                                <BsFillCartCheckFill />
                            </button>
                        </form>
                    </div>
                </div>
                <div className='flex justify-end p-2'>
                    <button onClick={backToPrevious} className='bg-black rounded-lg text-white hover:bg-white hover:text-black hover:font-bold p-3 flex items-center'><IoMdArrowRoundBack />Back
                    </button>

                </div>
            </div>
        </>
    );
};

export default PurchaseCar;