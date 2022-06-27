import React from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Select from 'react-select'
import {AiFillCar } from 'react-icons/ai'
import { toast } from 'react-toastify';

const AddingCar = () => {
    const [user] = useAuthState(auth)

    const options = [
        { value: 'budget', label: 'Budget Cars' },
        { value: 'luxury', label: 'Luxury Cars' },
        { value: 'sports', label: 'Sports Cars' },
        { value: 'suv', label: 'SUV' },
      ]

    const handleAddProduct = (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const min_quantity = e.target.minimum_quantity.value;
        const available_quantity = e.target.available_quantity.value;
        const price = e.target.price.value;
        const description = e.target.description.value;
        const supplier = e.target.supplier.value;
        const img = e.target.img.value;
        const email = user?.email;
        const category= e.target.category.value;
        const product = {
            name,
            min_quantity,
            available_quantity,
            description,
            price,
            img,
            email,
            supplier,
            category
        };
        console.log(product);

        //sending product to DB through API
        fetch("http://localhost:5000/addcars", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                'authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(product),    //object k stringify korey server side a send kore lagey tai JSON.stringify korey
        })
            .then((res) => {
                if(res.status===200){
                    toast.success("CAR ADDED SUCCESSFULLY")
                }
                else{
                    toast.error("CAR NOT ADDED")
                }
                return res.json()
            })
            .then((data) => {
                console.log("Success:", data);
                //form ta k reset korbey
                e.target.reset();
            })
    }

    return (
        <div>
            <div>
                <div className='bg-yellow-500 rounded-lg shadow-lg'>
                    <h4 className='mt-12 mb-8 flex items-center justify-center text-white font-bold'>ADD NEW CAR <AiFillCar className="mx-2"/></h4>
                </div>
                <form className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-4 "
                    onSubmit={handleAddProduct}
                >
                    <input type="text" name="name" placeholder="Name" className=" input input-bordered input-warning  w-full  shadow-lg mb-3" required />
                    <input type="text" name="img" placeholder="Image URL" className="input input-bordered input-warning  w-full mb-3  shadow-lg" required />
                    <textarea type="text" name="description" placeholder="Description" className="input input-bordered input-warning  w-full  shadow-lg mb-3" required />
                    <input type="number" name="minimum_quantity" placeholder="Minimum Quantity" className="input input-bordered input-warning  w-full  shadow-lg mb-3" required />
                    <input type="number" name="available_quantity" placeholder="Available Quantity" className="input input-bordered input-warning  w-full shadow-lg  mb-3" required />
                    <input type="number" name="price" placeholder="Price(per unit)" className="input input-bordered input-warning  w-full  shadow-lg mb-3" required />
                    <input type="text" name="supplier" placeholder="Supplier" className="input input-bordered input-warning  w-full  shadow-lg mb-3" required />
                    <Select name='category' placeholder='category' options={options} />
                    <input type="text" value={user?.email} placeholder="Email" className="input input-bordered input-warning  w-full  shadow-lg mb-3" />
                    <input type="submit" value="Submit" class="btn btn-warning w-full text-white shadow-lg hover:bg-black hover:border-black" />
                </form>
            </div>
        </div>
    );
};

export default AddingCar;