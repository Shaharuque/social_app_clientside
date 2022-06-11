import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init'
import { useCreateUserWithEmailAndPassword, useSendEmailVerification, useUpdateProfile } from 'react-firebase-hooks/auth';
import Loading from '../../Loading/Loading';
import useToken from '../../../CustomHook/useToken';
import { toast } from 'react-toastify';

// import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    // const [agree,setAgree]=useState(false)
    const navigate=useNavigate()
    //for updating user profile
    const [displayName, setDisplayName] = useState('');
    const [photoURL, setPhotoURL] = useState('');

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});
    //updating urer profile
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);  
    const [token,setToken]=useToken(user)

    const submitHandler=async(e)=>{
        e.preventDefault()
        const userName=e.target.name.value
        const userEmail=e.target.email.value
        const userPassword=e.target.password.value
        const userAdress=e.target.adress.value

        await createUserWithEmailAndPassword(userEmail, userPassword)
        await updateProfile({displayName:userName})
    }  

    //backend thekey token peley e navigate korbo user k
    if(token){
        toast.success('Welcome to Hamburg Menufacturer')
        navigate('/')
    }

    if(loading || updating){
        return <Loading></Loading>
    }

    let registerError;
    if (error || updateError) {
        registerError = <p className='text-red-700 font-bold'><small>{error?.message}</small></p>
        
    }
    return (
        <div style={{marginBottom:'50px'}}>
            <div className='container w-50 mx-auto'>
                <h3 style={{ color: 'lightBlue', textAlign: 'center', marginTop: '50px' }}>Register page</h3>
                <Form  className="grid grid-cols-1 gap-6 justify-items-center" onSubmit={submitHandler}>

                    <input
                    type="text"
                    name='name'
                    placeholder="Enter Name"
                    class="input input-bordered input-info w-full max-w-xs"
                    required
                    />

                    <input
                    type="text"
                    name='adress' 
                    placeholder="Enter Adress"
                    class="input input-bordered input-info w-full max-w-xs"
                    required
                    />

                    <input
                    type="email"
                    name='email'
                    placeholder="Enter Email"
                    class="input input-bordered input-info w-full max-w-xs"
                    required
                    />

                    <input
                    type="password" 
                    name='password'
                    placeholder="Enter Password"
                    class="input input-bordered input-info w-full max-w-xs"
                    required
                    />
                    {/*error show */}
                    {registerError}

                    <Button variant="primary" type="submit">
                        Register
                    </Button>
                </Form>
                <div className='grid grid-cols-1 gap-6 justify-items-center'>
                    <p style={{ marginTop: '10px' }}>Already registed? <Link to='/login' style={{ color: 'teal', fontWeight: '600' }}>login</Link></p>
                </div>
            </div>
            {/* <SocialLogin></SocialLogin> */}
        </div>
    );
};

export default Register;