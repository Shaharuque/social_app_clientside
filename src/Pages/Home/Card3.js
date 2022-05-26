import React from 'react';

const Card3 = () => {
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
        <figure class="px-10 pt-10">
            <img style={{borderRadius:'10px'}} src="https://img.nzz.ch/2016/4/8/fb500b05-148d-4ffa-840d-67638ab50e28.jpeg?width=654&height=393&fit=bounds&quality=75&auto=webp&crop=975,587,x0,y0" alt='tesla'/>
        </figure>
        <div class="card-body items-center text-center">
            <h2 class="card-title">Tesla-X</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions">
                <button class="btn btn-primary">Buy Now</button>
            </div>
        </div>
    </div>
    );
};

export default Card3;