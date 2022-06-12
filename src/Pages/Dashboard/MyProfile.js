import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import { FaUserAstronaut } from 'react-icons/fa'
import { toast } from "react-toastify";
import { Link } from 'react-router-dom';
import { useQuery } from 'react-query';


const MyProfile = () => {
    const [user, loading] = useAuthState(auth);

    const { isLoading, data: singleUser, refetch } = useQuery('availble', () =>
        fetch(`https://desolate-bastion-01704.herokuapp.com/user/${user.email}`, {
            method: 'GET',
            headers: {
                authorization: `bearer ${localStorage.getItem('token')}`
            }
        }).then(res =>
            res.json()
        )
    )
    // console.log(singleUser)
    if (isLoading || loading) {
        return <Loading></Loading>
    }

    const userInfoUpdate = e => {
        e.preventDefault()
        const userInfo = {
            email: user?.email,
            name: user?.displayName,
            phone: e.target.phone.value,
            education: e.target.education.value,
            linkedIn: e.target.linkedIn.value,
            city: e.target.city.value,
            img: e.target.picture.value,
        }
        console.log(userInfo)
        // email thakley particular email ar user ar data chailey update kora jabey 
        if (user?.email) {
            fetch(`https://desolate-bastion-01704.herokuapp.com/user/${user?.email}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userInfo)
            })
                .then(res => res.json())
                .then(data => {
                    refetch()
                    console.log(data)
                    toast.success('Profile Updated')
                })
        }
        document.getElementById('form-field').reset()
    }

    

    return (
        <div style={{ marginTop: '50px' }}>
            <div className='lg:flex justify-between'>
                <div style={{ fontWeight: 'bold',padding:'10px'}}>
                    <div style={{ display: 'flex', alignItems: 'center', color: 'teal' }}>
                        <h1>Profile Details</h1>
                        <FaUserAstronaut />
                    </div>
                    <h1>Name: Mr/Mrs.{user?.displayName}</h1>
                    <h1>Email: {user?.email}</h1>
                    <label for="my-modal-6" className="btn modal-button hover:bg-yellow-500 hover:border-yellow-500 hover:text-black">Update Profile</label>
                </div>
                <div>
                    <div class="card lg:w-96 bg-base-100 shadow-xl">
                        <figure><img src={singleUser?.img} alt="Profile" /></figure>
                        <div class="card-body">
                            <h2 class="card-title font-bold text-sm">
                                Name: {user?.displayName}
                            </h2>
                            <h2 class="card-title font-bold text-sm">
                                Email: {singleUser?.email}
                            </h2>
                            <h2 class="card-title font-bold text-sm">
                                Phone: {singleUser?.phone || 'Not Available'}
                            </h2>
                            <h2 class="card-title font-bold text-sm">
                                Education: {singleUser?.education || 'Not Updated'}
                            </h2>
                            <h2 class="card-title font-bold text-sm underline text-teal-300">
                                {singleUser?.linkedIn || 'Not Updated'}
                            </h2>
                           
                            
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <input type="checkbox" id="my-modal-6" className="modal-toggle" />
                <div className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        <div className="modal-action">
                            <label for="my-modal-6" className="btn">X</label>
                        </div>
                        <div>
                            <form id='form-field' onSubmit={userInfoUpdate} className="my-8 grid grid-cols-1 gap-5 justify-items-center">
                                <input value={user?.displayName} className="input input-bordered input-accent w-full max-w-xs " disabled />
                                <input value={user?.email} className="input input-bordered input-accent w-full max-w-xs" disabled />
                                <input type="text" name='picture' placeholder="URL" className="input input-bordered input-accent w-full max-w-xs" required/>
                                <input type="text" name='city' placeholder="Adress" className="input input-bordered input-accent w-full max-w-xs "/>
                                <input type="number" name='phone' placeholder="+088 014758523" className="input input-bordered input-accent w-full max-w-xs" required/>
                                <input type="text" name='education' placeholder="Education" className="input input-bordered input-accent w-full max-w-xs "/>
                                <input type="text" name='linkedIn' placeholder="LinkedIn" className="input input-bordered input-accent w-full max-w-xs "/>
                                <input type="submit" value='Update Profile' className="input input-bordered input-accent w-full max-w-xs " />
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;