// purchase product page
import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import { toast } from "react-toastify";

const PurchaseProduct = () => {
    const { id } = useParams()
    const [product, setProduct] = React.useState()
    const [user, loading, error] = useAuthState(auth);
    

    //product id r basis a DB thekey paarticular product details load
    useEffect(() => {
        fetch(`https://desolate-bastion-01704.herokuapp.com/product/${id}`)
            .then(res => res.json())
            .then(data => {
                setProduct(data)
            })
    }, [id])
    console.log(product)

    const orderHandle=e=>{
        e.preventDefault()
        const order={
            product_id:id,
            email:user.email,
            name:user.displayName,
            quantity:e.target.quantity.value,
            price:product.price,
            total:product.price*e.target.quantity.value,
            status:'pending',
            date:new Date().toLocaleDateString(),
        }
        console.log(order)
        if(parseInt(order.quantity)<=parseInt(product.available_quantity) && parseInt(order.quantity)>=parseInt(product.min_quantity)){
            //Order info Server side a send kora
            fetch('https://desolate-bastion-01704.herokuapp.com/order',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(order)
            })
            .then(res=>res.json())
            .then(data=>{
                // console.log(data)
                toast('Order Placed')
            })
        }

        else{
            toast.warn('Not Enough Quantity',{
                position: "top-left",
                autoClose: 5000,})
        }
    }
    return (
        <>
        <div style={{ padding: '20px' ,display:'flex',flexDirection:'column',alignItems:'center'}}>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={product?.img} alt={product?.name}/></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {product?.name}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>{product?.description}</p>
                    <div className="card-actions ">
                        <div className="badge badge-outline font-bold">{product?.supplier}</div>
                        <div className="badge badge-outline font-bold">{product?.price}$</div>
                    </div>
                    <div className="mt-6">
                        <div className=" font-semibold text-teal-400">Available Quantity: {product?.available_quantity}</div>
                        <div className=" font-semibold text-red-400">Minimun Purchase: {product?.min_quantity}</div>
                    </div>
                </div>
            </div>
        </div>
        <div style={{marginTop:'50px'}}>
                <h2 style={{fontWeight:'bold',color:'teal',textAlign:'center',margin:'20px 0'}}>Purchase Order Slip</h2>
                <form onSubmit={orderHandle} className="my-8 grid grid-cols-1 gap-5 justify-items-center">
                    <input value={user?.displayName}  className="input input-bordered input-accent w-full max-w-xs " disabled/>
                    <input value={user?.email}  className="input input-bordered input-accent w-full max-w-xs"  disabled/>
                    <input type="text" name='adress' placeholder="Adress" className="input input-bordered input-accent w-full max-w-xs " required/>
                    <input type="text" name='phone' placeholder="Phone No." className="input input-bordered input-accent w-full max-w-xs " required/>
                    <input type="text" name='quantity'  placeholder="Order_Quantity" className="input input-bordered input-accent w-full max-w-xs " required/>
                    <input type="submit"  value='Confirm Order' className="input input-bordered input-accent w-full max-w-xs " />

                </form>
        </div>
    </>
    );
};

export default PurchaseProduct;