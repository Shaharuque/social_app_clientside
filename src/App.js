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
import Reviews from './Pages/Home/Reviews';

function App() {
  return (
    <div className=''>
    <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path='/addproducts' element={<AddProducts />} />
        <Route path='/product_review' element={<Reviews></Reviews>}></Route>
        <Route path='/meeting' element={
          <RequireAuth>
            <Meeting/>
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
        </Route>

        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path='*' element={<NoPage></NoPage>}/>
      </Routes>
    <Footer></Footer>  
    </div>
  );
}

export default App;
