import React from 'react';
import { toast } from 'react-toastify';

const ManageProductRow = ({ product,index,refetch }) => {
    //console.log(product)

    const updateProduct=(e)=>{
        e.preventDefault();
        const userInfo = {
            quantity: e.target.quantity.value,
        }
        console.log(userInfo)
    }

    const deleteProduct=(productId)=>{
        console.log(productId)
        //heruko ar link ashbey
        // fetch(`http://localhost:5000/deleteproduct/${productId}`,{
        //     method:"DELETE"
        // })
        // .then(res => {
        //     if (res.status === 200) {
        //         toast.success('Successfully deleted');
        //     }
        //     return res.json()
        // })
        // .then((data)=>{
        //     refetch();
        //     console.log(data)
        // })
        // .catch((err)=>console.log(err))
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
            <label  for="my-modal-8" className="btn hover:bg-yellow-500 hover:border-yellow-500 hover:text-black">Update</label>
            </th>
        </tr>
        <input type="checkbox" id="my-modal-8" className="modal-toggle" />
                <div className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        <div className="modal-action">
                            <label for="my-modal-8" className="btn">X</label>
                        </div>
                        <div>
                            <form id='form-field'  className="my-8 grid grid-cols-1 gap-5 justify-items-center">
                                <input value={product.name} className="input input-bordered input-accent w-full max-w-xs " disabled />
                                <input type="text" name='quantity' placeholder="New Quantity" className="input input-bordered input-accent w-full max-w-xs " required />
                                <button onClick={()=>updateProduct(product._id)}>Update</button>
                            </form>
                        </div>

                    </div>
                </div>
        </>
    );
};

export default ManageProductRow;