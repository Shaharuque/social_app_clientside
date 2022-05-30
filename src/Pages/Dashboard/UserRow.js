import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user, index ,refetch}) => {
    const {email,role}=user
    const makeAdmin=()=>{
        fetch(`https://desolate-bastion-01704.herokuapp.com/user/makeAdmin/${email}`,{
            method:'PUT',
            headers:{
                'authorization':`Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(res => {
            if(res.status === 403){
                toast.error('Failed to Make an admin');
            }
            return res.json()})
        .then(data => {
            if (data.modifiedCount > 0) {
                //successfully onno user k admin korar por API url again hit korey updated data show koranor jnno refetch() call
                refetch();
                toast.success(`Successfully made an admin`);
            }

        })
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td>{role !== 'admin' && <button onClick={makeAdmin} class="btn btn-xs">Make Admin</button>}</td>
            <td><button className="btn btn-xs">Remove User</button></td>
        </tr>
    );
};

export default UserRow;