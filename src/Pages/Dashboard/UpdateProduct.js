import React from 'react';
import { useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import Loading from '../Loading/Loading';

const UpdateProduct = () => {
    const { id } = useParams();
    const navigate=useNavigate()
    const { isLoading, data: singleProduct, refetch } = useQuery('single product', () =>
        // heruko site boshbey
        fetch(`http://localhost:5000/product/${id}`, {
            method: 'GET',
            headers: {
                authorization: `bearer ${localStorage.getItem('token')}`
            }
        }).then(res =>
            res.json()
        )
    )
    if (isLoading) {
        return <Loading></Loading>
    }
    console.log(singleProduct)

    const backToPrevious=()=>{
        navigate('/dashboard/manageproducts')
    }


    return (
        <div className='p-2'>
            <div className=' w-1/2'>
                <div className="card h-1/2 lg:card-side bg-teal-500 shadow-xl">
                    <figure><img className='' src={singleProduct.img} alt="Album" /></figure>
                    <div className="card-body">
                        <h2 className="">Product_Name:{singleProduct.name}</h2>
                        <h2 className="card-title">Available:{singleProduct.available_quantity}</h2>
                        <h2 className="card-title">Supplier:{singleProduct.supplier}</h2>
                        <h2 className="card-title">Price:${singleProduct.price}</h2>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Listen</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-end'>
                <button onClick={backToPrevious} className='p-3 bg-yellow-400 text-white hover:bg-black rounded-lg'>Back</button>
            </div>
        </div>
    );
};

export default UpdateProduct;