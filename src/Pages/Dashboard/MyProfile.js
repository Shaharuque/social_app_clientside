import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import { FaUserAstronaut } from 'react-icons/fa'
import { toast } from "react-toastify";

const MyProfile = () => {
    const [user, loading] = useAuthState(auth);

    if(loading){
        return<Loading></Loading>
    }

    const userInfoUpdate=e=>{
        e.preventDefault()
        const userInfo={
            email:user?.email,
            name:user?.displayName,
            phone:e.target.phone.value,
            education:e.target.education.value,
            linkedIn:e.target.linkedIn.value,
            city:e.target.city.value,
        }
        console.log(userInfo)
        // email thakley particular email ar user ar data chailey update kora jabey 
        if(user?.email){
            fetch(`https://desolate-bastion-01704.herokuapp.com/user/${user?.email}`,{
                method:'PUT',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(userInfo)
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                toast('Profile Updated')
            })
        }
    }
    return (
        <div style={{marginTop:'50px'}}>
            <div style={{fontWeight:'bold'}}>
                <div style={{display:'flex',alignItems:'center',color:'teal'}}>
                    <h1>Profile Details</h1>
                    <FaUserAstronaut/>
                </div>
                <h1>Name: Mr/Mrs.{user?.displayName}</h1>
                <h1>Email: {user?.email}</h1>
            </div>
            <div>
                <form onSubmit={userInfoUpdate} className="my-8 grid grid-cols-1 gap-5 justify-items-center">
                    <input value={user?.displayName} className="input input-bordered input-accent w-full max-w-xs " disabled />
                    <input value={user?.email} className="input input-bordered input-accent w-full max-w-xs" disabled />
                    <input type="text" name='city' placeholder="Adress" className="input input-bordered input-accent w-full max-w-xs " required />
                    <input type="text" name='phone' placeholder="Phone No." className="input input-bordered input-accent w-full max-w-xs " required />
                    <input type="text" name='education' placeholder="Education" className="input input-bordered input-accent w-full max-w-xs " required />
                    <input type="text" name='linkedIn' placeholder="LinkedIn" className="input input-bordered input-accent w-full max-w-xs " required />
                    <input type="submit" value='Update Profile' className="input input-bordered input-accent w-full max-w-xs " />
                </form>
            </div>
        </div>
    );
};

export default MyProfile;