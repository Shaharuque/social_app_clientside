import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import useToken from '../../../CustomHook/useToken';
import auth from '../../../firebase.init';
import Loading from '../../Loading/Loading';
import {FcGoogle} from 'react-icons/fc'




const SocialLogin = () => {
    const navigate = useNavigate()
    //for google sign in purpose
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [token,setToken]=useToken(user)

    //user login kora na tahley to login page a niye jabey plus user login korar por shei user k jei page thekey login ar jnno ashsey shei page a niye jabey
    const location=useLocation()
    let from = location.state?.from?.pathname || "/";  

    if(loading){
        return <Loading></Loading>
    }
    
    let errorElement;
    if (error) {
        errorElement = <div>
            <p style={{color:'red',textAlign:'center',fontFamily:'monospace'}}>Error: {error?.message}</p>
        </div>
    }

    

    if(token){
        navigate(from, { replace: true });
    }

    return (
        <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center',margin:'20px 0' }}>
                <div className='border-teal-500 border-2 w-full'></div>
                <p style={{ margin: '0 10px', fontFamily: 'sans-serif',fontSize:'14px'}}>OR</p>
                <div className='border-teal-500 border-2 w-full'></div>
            </div>
            {errorElement}
            
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' ,marginTop:'40px' }}>
                <button style={{ borderRadius: '5px', border: '1px solid black', padding: '5px', marginBottom: '10px', width: '250px',display:'flex' ,justifyContent:'center',alignItems:'center' }} onClick={() => signInWithGoogle()}>
                    <span className='text-center  font-bold mr-2'>Sign in with Google</span>
                    <FcGoogle/>
                </button>
            </div>    
        </div>
    );
};

export default SocialLogin;