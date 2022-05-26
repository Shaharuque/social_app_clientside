import React from 'react';
import Card1 from './Card1';
import Card2 from './Card2';
import Card3 from './Card3';

const Banner = () => {
    return (
        <div>
            <div class="hero min-h-screen px-8">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://i.insider.com/60f860760729770012b91c62?width=700" alt='tesla-car' class="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 class="text-5xl font-bold">Your New Dream Comes True!</h1>
                        <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button class="btn bg-gradient-to-r from-primary to-secondary border-primary  text-white font-bold">Get Started</button>
                    </div>
                </div>
            </div>

            <div class="grid lg:grid-cols-3 gap-4 p-4">
                <Card1></Card1>
                <Card2></Card2>
                <Card3></Card3>
            </div>
        </div>
    );
};

export default Banner;