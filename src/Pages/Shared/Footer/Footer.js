import React from 'react';

const Footer = () => {
    const img = "https://img.freepik.com/free-photo/fantasy-abandoned-city-night_141465-12.jpg?w=2000"
    return (
        <footer style={{
            backgroundColor: 'black',
            backgroundSize: 'cover',
            color: 'white'
        }} className="p-5">
            <div className='bg-white bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg p-2'>
                <div className='footer'>
                    <div>
                        <span className="footer-title">Services</span>
                        <a className="link link-hover">Branding</a>
                        <a className="link link-hover">Design</a>
                        <a className="link link-hover">Marketing</a>
                        <a className="link link-hover">Advertisement</a>
                    </div>
                    <div>
                        <span className="footer-title">Company</span>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                    </div>
                    <div>
                        <span className="footer-title">Legal</span>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </div>
                </div>
                <div className='my-10 text-center'>
                    <p>Copyright © 2022 - All right reserved by Shah_Amin</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;