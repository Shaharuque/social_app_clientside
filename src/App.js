import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Navbar from './Pages/Shared/Navbar/Navbar';
import Footer from './Pages/Shared/Footer/Footer';
import Meeting from './Pages/MeetingClient/Meeting';
import AddProducts from './Pages/AddProducts/AddProducts';
import NoPage from './Pages/NoPage/NoPage';
import Login from './Pages/Authentication/Login/Login';
import Register from './Pages/Authentication/Register/Register';
import RequireAuth from './Pages/Authentication/RequireAuth/RequireAuth';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyProfile from './Pages/Dashboard/MyProfile';
import Orders from './Pages/Dashboard/Orders';
import MyReview from './Pages/Dashboard/MyReview';
import Reviews from './Pages/Home/Reviews';
import PurchaseProduct from './Pages/PurchasePage/PurchaseProduct';
import { ToastContainer,  } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PaymentPage from './Pages/Payment/PaymentPage';
import Users from './Pages/Dashboard/Users';
import ManageProducts from './Pages/Dashboard/ManageProducts';
import Blogs from './Pages/Blogs/Blogs';
import FinalOrder from './Pages/Dashboard/FinalOrder';
import UpdateProduct from './Pages/Dashboard/UpdateProduct';
import ShowAllProducts from './ShowAllProducts/ShowAllProducts';
import AddingCar from './Pages/Dashboard/AddCar/AddingCar';
import PurchaseCar from './Pages/PurchasePage/PurchaseCar';

function App() {

  return (
    <div className=''>
    <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path='/post' element={<Reviews></Reviews>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/showall/products' element={<ShowAllProducts></ShowAllProducts>}></Route>
        <Route path='/meeting' element={
          <RequireAuth>
            <Meeting/>
          </RequireAuth>
        }>
        </Route>
        <Route path='/purchase/:id' element={
          <RequireAuth>
            <PurchaseProduct/>
          </RequireAuth>
        }>
        </Route>
        <Route path='/car_details/:carid' element={
          <RequireAuth>
            <PurchaseCar/>
          </RequireAuth>
        }>
        </Route>
        <Route path='/final/order' element={
          <RequireAuth>
            <FinalOrder/>
          </RequireAuth>
        }>
        </Route>

        {/* Dashboard will be a private route */}
        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard/>
          </RequireAuth>
        }>
          {/* nested routes */}
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path='order' element={<Orders></Orders>}></Route>
          <Route path='myreview' element={<MyReview></MyReview>}></Route>
          <Route path='users' element={<Users></Users>}></Route>
          <Route path='addcars' element={<AddingCar />} />
          <Route path='addproducts' element={<AddProducts />} />
          <Route path='manageproducts' element={<ManageProducts></ManageProducts>} />
        </Route>

        <Route path='/payment/:id' element={
          <RequireAuth>
            <PaymentPage/>
          </RequireAuth>
        }>
        </Route>
        <Route path='/update_product/:id' element={
          <RequireAuth>
            <UpdateProduct/>
          </RequireAuth>
        }>
        </Route>

        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path='*' element={<NoPage></NoPage>}/>
      </Routes>
       {/* react toast show korar jnno */}
       <ToastContainer />
    {/*<Footer></Footer>*/}  
    </div>
  );
}

export default App;
