import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../../CustomHook/useAdmin';
import auth from '../../firebase.init';
import { AiFillDashboard,AiOutlineFolderAdd } from 'react-icons/ai';
import {CgProfile} from 'react-icons/cg'
import {MdOutlineManageSearch, MdManageAccounts} from 'react-icons/md'
import {RiMenuAddFill} from 'react-icons/ri'


const Dashboard = () => {
  const [user] = useAuthState(auth)
  const [admin] = useAdmin(user)
  return (
    <div className='bg-black bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg'>
      <div class="drawer drawer-mobile">
        <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content ">


          {/*mobile view tey ekta burget Icon show hobey normal time a Icon ta hide thakbey */}
          <div className="navbar-end">
            <label tabIndex="1" for="dashboard-sidebar" className="btn btn-ghost bg-teal-900 text-white lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
          </div>
          <div className='bg-black bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg flex justify-center items-center'>
            <h2 className="text-sm p-2 lg:text-2xl  font-bold text-yellow-500 text-center font-sans rounded-lg ">
            Welcome to Your Dashboard Section
            </h2>
            <AiFillDashboard className=' lg:text-3xl text-sm text-yellow-500'></AiFillDashboard>
          </div>
          {/* <!-- Page content here --> */}
          <div style={{padding:'20px'}}>
            <Outlet/>
          </div>

        </div>
        <div class="drawer-side">
          <label for="dashboard-sidebar" class="drawer-overlay"></label>
          <ul class="menu p-4 overflow-y-auto w-60 bg-yellow-500 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li className='mb-4'>
              <Link className='bg-white bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg font-bold hover:bg-black hover:text-white' to='/dashboard'>My Profile <CgProfile className='text-xl'/></Link>
            </li>
            {
              admin ?
                <div>
                  <li className='mb-4'>
                    <Link className='bg-white bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg font-bold hover:bg-black hover:text-white' to='/dashboard/users'>Make Admin <MdManageAccounts className='text-xl'/></Link>
                  </li>
                  <li className='mb-4'>
                  <Link className='bg-white bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg font-bold hover:bg-black hover:text-white' to='/dashboard/addcars'>New Car<AiOutlineFolderAdd className='text-xl'/></Link>
                </li>
                  <li className='mb-4'>
                    <Link className='bg-white bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg font-bold hover:bg-black hover:text-white' to='/dashboard/addproducts'>Adding New Item <RiMenuAddFill className='text-xl'/></Link>
                  </li>
                  <li className='mb-4'>
                    <Link className='bg-white bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg font-bold hover:bg-black hover:text-white' to='/dashboard/manageproducts'>Manage Product <MdOutlineManageSearch className='text-xl'/></Link>
                  </li>
                </div>
                :
                <div>
                  <li className='mb-4'>
                    <Link className='bg-white bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg font-bold' to='/dashboard/order'>Wishlist</Link>
                  </li>
                  <li className='mb-4'>
                    <Link className='bg-white bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg font-bold' to='/dashboard/myreview'>Review</Link>
                  </li>

                </div>
            }

          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;