import React from 'react';
import { toast } from 'react-toastify';
import {useNavigate} from  'react-router-dom';

const ManageProductRow = ({ product,index,refetch }) => {
    //console.log(product)
    const navigate=useNavigate();
    const updateProduct=(id)=>{
        console.log(id)
        navigate(`/update_product/${id}`)

    }

    const deleteProduct=(productId)=>{
        console.log(productId)
        fetch(`http://localhost:5000/deleteproduct/${productId}`,{
            method:"DELETE"
        })
        .then(res => {
            if (res.status === 200) {
                toast.success('Successfully deleted');
            }
            return res.json()
        })
        .then((data)=>{
            refetch();
            console.log(data)
        })
        .catch((err)=>console.log(err))
    }
    return (
        <>
        <tr>
            <td>{index+1}</td>
            <td>
                <div class="flex items-center space-x-3">
                    <div class="avatar">
                        <div class="mask mask-squircle w-12 h-12">
                            <img src={product.img} alt={product.name} />
                        </div>
                    </div>
                    <div>
                        <div class="font-bold">{product.name}</div>
                        <div class="text-sm opacity-50">{product.supplier}</div>
                    </div>
                </div>
            </td>
            <td>{product.available_quantity}</td>
            <td>{product.price}</td>
            <th>
                <button onClick={()=>deleteProduct(product._id)} class="btn btn-ghost btn-xs bg-teal-500 text-white">Delete</button>
            </th>
            <th>
            <label onClick={()=>updateProduct(product._id)}  for="my-modal-8" className="btn hover:bg-yellow-500 hover:border-yellow-500 hover:text-black">Update</label>
            </th>
        </tr>
        </>
    );
};

export default ManageProductRow;