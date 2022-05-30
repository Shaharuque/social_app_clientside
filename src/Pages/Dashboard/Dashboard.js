import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../../CustomHook/useAdmin';
import auth from '../../firebase.init';

const Dashboard = () => {
  const [user] = useAuthState(auth)
  const [admin] = useAdmin(user)
  return (
    <div>
      <div class="drawer drawer-mobile">
        <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content ">


          {/*mobile view tey ekta burget Icon show hobey normal time a Icon ta hide thakbey */}
          <div className="navbar-end">
            <label tabIndex="1" for="dashboard-sidebar" className="btn btn-ghost bg-teal-900 text-white lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
          </div>
          <h2 className="text-3xl font-bold text-teal-600 text-center">
            Welcome to Your Dashboard
          </h2>
          {/* <!-- Page content here --> */}
          <div style={{padding:'20px'}}>
            <Outlet/>
          </div>

        </div>
        <div class="drawer-side">
          <label for="dashboard-sidebar" class="drawer-overlay"></label>
          <ul class="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li>
              <Link style={{fontWeight:'bold',color:'gray'}} to='/dashboard'>My Profile</Link>
            </li>
            {
              admin ?
                <div>
                  <li>
                    <Link style={{fontWeight:'bold',color:'teal'}} to='/dashboard/users'>Make Admin</Link>
                  </li>
                  <li>
                    <Link style={{fontWeight:'bold',color:'teal'}} to='/dashboard/addproducts'>Add Product</Link>
                  </li>
                  <li>
                    <Link style={{fontWeight:'bold',color:'teal'}} to='/dashboard/manageproducts'>Manage Product</Link>
                  </li>
                </div>
                :
                <div>
                  <li>
                    <Link style={{fontWeight:'bold',color:'teal'}} to='/dashboard/order'>Orders</Link>
                  </li>
                  <li>
                    <Link style={{fontWeight:'bold',color:'teal'}} to='/dashboard/myreview'>Review</Link>
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