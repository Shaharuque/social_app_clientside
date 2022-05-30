import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { signOut } from "firebase/auth";

const Orders = () => {

    const [user] = useAuthState(auth);
    const [orders, setOrders] = React.useState([])
    const navigate=useNavigate()

    useEffect(() => {
        // now outside thekey url a req korleo user ar orders data pabey na
        fetch(`https://desolate-bastion-01704.herokuapp.com/order?email=${user?.email}`,{
            method:'GET',
            headers:{
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => {
                console.log(res)
                if(res.status===401 || res.status===403){
                    signOut(auth);
                    localStorage.removeItem('token') //logout ar sathey sathey access token removed
                    navigate('/login')
                }
                return res.json()
            })
            .then(data => {
                setOrders(data)
            })
    }, [user?.email])

    

    const clickHandler=(_id)=>{
        navigate('/payment/'+_id)
    }

    return (
        <div style={{padding:'10px'}}>
            <h1 style={{ textAlign: 'center' }}> Order Report of Mr/Mrs.{user?.displayName}</h1>
            {/* Orders gula ekta table a show korbo */}

            <div class="overflow-x-auto mt-16">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>Serial No.</th>
                            <th>Product ID</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Total</th>
                            <th>Date</th>
                            <th>Status</th>
                            <th></th>
                        </tr>
                    </thead>

                    <tbody>
                        {/* dynamically  each row tey data dekhabey each appointment ar*/}
                        {orders?.map((order, index) => (
                            <tr>
                                <td>{index + 1}</td>
                                <td>{order.product_id}</td>
                                <td>{order.quantity}</td>
                                <td>{order.price}</td>
                                <td>{order.total}</td>
                                <td style={{color:'red'}}>{order.status}</td>
                                <td>{order.date}</td>
                                <td onClick={()=>clickHandler(order._id)} style={{backgroundColor:'teal',borderRadius:'10px',color:'white',textAlign:'center'}}>Pay</td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Orders;