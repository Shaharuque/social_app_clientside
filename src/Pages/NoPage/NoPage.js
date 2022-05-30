import React from 'react';
import { Link } from 'react-router-dom';

const NoPage = () => {
    return (
        <div>
            <div>
                <img style={{ width: '100%' }} src="https://i.ibb.co/C7CQZRy/nicholas-bartos-fms2-YKam-M-unsplash.jpg" alt="" />
            </div>
            <div style={{marginTop:'50px'}}>
                <h4 style={{textAlign:'center'}}>404 NO PAGE FOUND</h4>
                <Link style={{display:'flex',justifyContent:'center',textDecoration:'none',color:'red',fontWeight:'bold'}} to='/home'>Back To Home</Link>
            </div>
        </div>
    );
};

export default NoPage;