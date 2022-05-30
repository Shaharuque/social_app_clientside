import React from 'react';

const ManageProductRow = ({ product,index,refetch }) => {
    //console.log(product)

    const deleteProduct=(productId)=>{
        console.log(productId)
        //heruko ar link ashbey
        fetch(`https://desolate-bastion-01704.herokuapp.com/deleteproduct/${productId}`,{
            method:"DELETE"
        })
        .then((res)=>res.json())
        .then((data)=>{
            refetch();
            console.log(data)
        })
        .catch((err)=>console.log(err))
    }
    return (
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
        </tr>
    );
};

export default ManageProductRow;