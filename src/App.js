import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Navbar from './Pages/Shared/Navbar/Navbar';
import Login from './Pages/Login/Login';
import Footer from './Pages/Shared/Footer/Footer';
import Meeting from './Pages/MeetingClient/Meeting';

function App() {
  return (
    <div className='max-w-7xl mx-auto'>
    <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path='/meeting' element={<Meeting/>}></Route>
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    <Footer></Footer>  
    </div>
  );
}

export default App;
