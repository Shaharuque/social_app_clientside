import React from 'react';
import { toast } from 'react-toastify';
//sweet alert
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

const UserRow = ({ user, index, refetch }) => {
    const { email, role } = user
    const makeAdmin = () => {
        fetch(` https://quiet-sea-27806.herokuapp.com/user/makeAdmin/${email}`, {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Failed to Make an admin');
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    //successfully onno user k admin korar por API url again hit korey updated data show koranor jnno refetch() call
                    refetch();
                    toast.success(`Successfully made an admin`);
                }

            })
    }
    const removeUser = () => {
        MySwal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(` https://quiet-sea-27806.herokuapp.com/user/remove/${email}`, {
                    method: 'DELETE',
                    headers: {
                        'authorization': `Bearer ${localStorage.getItem('token')}`
                    }
                })
                    .then(res => {
                        if (res.status === 403) {
                            toast.error('Failed to remove user from the system, You dont have permission to remove this user');
                        }
                        return res.json()
                    })
                    .then(data => {
                        if (data.deletedCount > 0) {
                            //successfully onno user k admin korar por API url again hit korey updated data show koranor jnno refetch() call
                            refetch();
                            toast.success(`Successfully removed user`);
                        }
                    })
            }
        })
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td>{role !== 'admin' && <button onClick={makeAdmin} class="btn btn-xs">Make Admin</button>}</td>
            <td><button onClick={removeUser} className="btn btn-xs">Remove User</button></td>
        </tr>
    );
};

export default UserRow;