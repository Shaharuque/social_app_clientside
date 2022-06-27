import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { signOut } from "firebase/auth";
import { useQuery } from 'react-query';
import Loading from '../Loading/Loading';
import { toast } from 'react-toastify';
//sweet alert
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);


const Orders = () => {

    const [user] = useAuthState(auth);
    // const [orders, setOrders] = React.useState([])
    const navigate = useNavigate()


    const { isLoading, error, data: orders, refetch } = useQuery('all orders', () =>
        fetch(`http://localhost:5000/order?email=${user?.email}`, {
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

    
    const removeOrder=(orderId)=>{
        MySwal.fire({
            title: "Are you sure?",
            text: "Once you delete it you can't undo it!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#087789",
            cancelButtonColor: "#890816",
            confirmButtonText: "Delete it!",
          }).then((result) => {
            if(result.isConfirmed){
                fetch(`http://localhost:5000/order/${orderId}`,{
                    method:'DELETE',
                    headers:{
                        authorization:`bearer ${localStorage.getItem('token')}`
                    },
                })
                .then(res => {
                    if(res.status===403 || res.status===404){
                        toast.error('Failed to delete order');
                    }
                    else{
                        toast.success('Successfully deleted product from wishlist');
                    }
                    return res.json()
                })
                .then(data => {
                    console.log(data)
                    refetch()
                })
            }
    })
}




    const finalOrder = () => {
        navigate('/final/order')     //final order page a redirect korar jonno
    }
    return (
        <div style={{ padding: '10px' }}>
            <h1 style={{ textAlign: 'center' }}> Order Report of Mr/Mrs.{user?.displayName}</h1>
            {/* Orders gula ekta table a show korbo */}

            <div class="overflow-x-auto mt-16">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>Serial No.</th>
                            <th>Product</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Total</th>
                            <th>Date</th>
                            <th>payment</th>
                            <th>Delete</th>
                        </tr>
                    </thead>

                    <tbody>
                        {orders.map((order, index) => (
                            <tr>
                                <td>{index + 1}</td>
                                <td>
                                <div class="avatar">
                                <div class="w-20 rounded">
                                    <img src={order.image} alt='orderimage'/>
                                </div>
                                </div>
                                </td>
                                <td>{order.quantity}</td>
                                <td>{order.price}</td>
                                <td>{order.total}</td>
                                <td>{order.date}</td>
                                <td style={{ color: 'red' }}>{order.status}</td>
                                <td><button onClick={()=>removeOrder(order?._id)} className='bg-red-700 px-3 text-white rounded-lg'>X</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div>
                {
                    orders.length > 0 && <button onClick={finalOrder} className='bg-orange-400 p-2 rounded-lg hover:text-white hover:bg-black'>Order Now</button>
                }
            </div>
        </div>
    );
};

export default Orders;