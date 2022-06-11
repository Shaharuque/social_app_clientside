import React from 'react';
import { FiClock } from 'react-icons/fi';

const Service = ({service}) => {
    const {name,img,description}=service
    return (
        <div>
            <div class="card bg-base-100 shadow-xl image-full">
                <figure><img style={{height:'300px'}} src={img} alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title"><FiClock/>{name}</h2>
                    <p>{description}</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;