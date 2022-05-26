import React from 'react';

const Card2 = () => {
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
        <figure class="px-10 pt-10">
            <img src="https://heise.cloudimg.io/v7/_www-heise-de_/imgs/18/3/5/3/6/2/0/7/0x0-ModelY_04.jpg-4a05c3d4b05f9751.jpeg?org_if_sml=1&q=70&width=1019" alt="Shoes" class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
            <h2 class="card-title">Tesla-Y</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions">
                <button class="btn btn-primary">Buy Now</button>
            </div>
        </div>
    </div>
    );
};

export default Card2;