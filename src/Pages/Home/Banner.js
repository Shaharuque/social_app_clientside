import React from 'react';

const Banner = () => {
    
    return (
        <div>
            <div class="hero min-h-screen px-8">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://i.insider.com/60f860760729770012b91c62?width=700" alt='tesla-car' class="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 class="text-5xl font-bold">Your New Dream Comes True!</h1>
                        <p class="py-6">We provide all the necessary tools to build your car from scrach and also help you to enter to the car building world. With our support you can conqure the world.</p>
                        <button class="btn bg-gradient-to-r from-primary to-secondary border-primary  text-white font-bold">Get Started</button>
                    </div>
                </div>
            </div>
          
        </div>
    );
};

export default Banner;