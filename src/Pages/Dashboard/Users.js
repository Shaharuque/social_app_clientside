import React from 'react';
import Loading from '../Loading/Loading';
import { useQuery } from 'react-query';
import UserRow from './UserRow';

const Users = () => {
    const { isLoading, error, data: all_user, refetch } = useQuery('all users', () =>
        fetch(' https://quiet-sea-27806.herokuapp.com/all/users', {
            method: 'GET',
            headers: {
                authorization: `bearer ${localStorage.getItem('token')}`
            }
        }).then(res =>
            res.json()
        )
    )
    if (isLoading || error) {
        return <Loading></Loading>
    }

    return (
        <div>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Email</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* dynamically each user ar jnno UserRow component render hobey*/}
                        {
                            all_user?.map((user, index) => <UserRow
                                key={user?._id}
                                user={user}
                                index={index}
                                refetch={refetch}
                            ></UserRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;