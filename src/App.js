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

function App() {
  return (
    <div className=''>
    <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path='/addproducts' element={<AddProducts />} />

        <Route path='/meeting' element={
          <RequireAuth>
            <Meeting/>
          </RequireAuth>
        }>
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
