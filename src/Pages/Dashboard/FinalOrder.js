import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { signOut } from "firebase/auth";

const FinalOrder = () => {
    const [user] = useAuthState(auth);
    const [orders, setOrders] = React.useState([])
    const navigate = useNavigate()

    React.useEffect(() => {
        // now outside thekey url a req korleo user ar orders data pabey na
        fetch(`http://localhost:5000/order?email=${user?.email}`, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => {
                console.log(res)
                if (res.status === 401 || res.status === 403) {
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

    console.log(orders)

    return (
        <>
            <div>
               {
                   orders.map(order => {
                       return (
                           <div key={order._id}>
                               <h1>{order.name}</h1>
                               <h1>{order.price}</h1>
                               <h1>{order.quantity}</h1>
                           </div>
                       )
                   })
               }
            </div>
        </>
    );
};

export default FinalOrder;