import React from 'react';


const About = () => {
    return (
        <div className='mx-auto flex justify-center'>
            <div class="card w-96 bg-base-100 shadow-xl image-full mt-24 mb-12">
                <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title">Name: Md.Shaharuque Amin</h2>
                    <p>Email: shahrukhamin27@gmail.com</p>
                    <p>Education: BSc.CSE(2017-2021)</p>
                    <p>University: United International University</p>
                    <h4>List of Projects:</h4>
                    <a style={{color:'black' ,fontWeight:'bold'}} href=" https://warehouse-management-c7e13.web.app/" target="_blank" rel="noopener noreferrer">1. warehouse_management_system</a>
                    <a style={{color:'black' ,fontWeight:'bold'}} href=" https://crypto-currency-guide.netlify.app/" target="_blank" rel="noopener noreferrer">2. Crypto_coin_guide</a>
                    <a style={{color:'black' ,fontWeight:'bold'}} href=" https://meal-db-site-react.netlify.app/" target="_blank" rel="noopener noreferrer">3. meal_search_menu</a>
                    
                </div>
            </div>
        </div>
    );
};

export default About;