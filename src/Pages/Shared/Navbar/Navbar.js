import { signOut } from 'firebase/auth';
import React from 'react';
import { useNavigation } from 'react-day-picker';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Loading/Loading';

const Navbar = () => {
    const [user, loading, error] = useAuthState(auth)
    const navigate = useNavigate()

    if (loading) {
        return <Loading></Loading>
    }

    //handle logout
    const signOutHandle = () => {
        signOut(auth);
        localStorage.removeItem('token') //logout ar sathey sathey access token removed
        navigate('/login');
    }


    const menuItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/meeting'>Meeting Us </Link></li>
        <li><Link to='/review'>Review</Link></li>
        <li><Link to='/contract'>Contact Us</Link></li>
        <li><Link to='/about'>About </Link></li>
        <li><Link to='/login'>Login</Link></li>
    </>
    return (
        <div>
            <div class="navbar bg-black">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/meeting'>Meeting Us </Link></li>
                            <li><Link to='/product_review'>Review</Link></li>
                            <li><Link to='/about'>About</Link></li>
                            {/* user logged in kora thaklei dashboard ta dekhabo */}
                            {
                                user && <li><Link to="/dashboard">Dashboard</Link></li>
                            }
                            <li>
                                {
                                    user ? <button style={{ color: 'red' }} onClick={signOutHandle}>Sign-out<sup style={{ color: 'blue' }}>{user.displayName}</sup></button>
                                        :
                                        <Link to='/login'>Login</Link>
                                }

                            </li>
                        </ul>
                    </div>
                   <div className=' bg-opacity-20 backdrop-blur-lg drop-shadow-lg max-w-full rounded-lg lg:hover:bg-yellow-400 lg:hover:text-white'>
                        <Link to='/' class="flex items-center normal-case font-semibold text-xl">
                        <img style={{width:'70px',borderRadius:'10px'}} src='https://www.designrush.com/uploads/users/customer-11/image_1526479777_RYv4kDbzP5OgvDePRfi9jcp8zE9ql3hSAb2ZBmHE.jpeg' alt='car-logo'/>
                        IRISH_CAR_PARADISE
                        </Link>
                   </div>
                </div>
                
                <div class="navbar-end hidden lg:flex">
                    <ul class="menu menu-horizontal p-0 bg-white bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg text-white">
                        <li className='hover:bg-yellow-400 rounded'><Link to='/'>Home</Link></li>
                        <li className='hover:bg-yellow-400 rounded'><Link to='/meeting'>Meeting Us </Link></li>
                        <li className='hover:bg-yellow-400 rounded'><Link to='/product_review'>Review</Link></li>
                        <li className='hover:bg-yellow-400 rounded'><Link to='/about'>About </Link></li>
                        {/* user logged in kora thaklei dashboard ta dekhabo */}
                        {
                            user && <li className='hover:bg-yellow-400 rounded'><Link to="/dashboard">Dashboard</Link></li>
                        }
                        <li className='hover:bg-red-700 rounded'>
                            {
                                user ? <button style={{ color: 'white' }} onClick={signOutHandle}>Sign-out<sup style={{ color: 'teal',fontWeight:'bold' }}>{user.displayName}</sup></button>
                                    :
                                    <Link to='/login'>Login</Link>
                            }

                        </li>
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Navbar;