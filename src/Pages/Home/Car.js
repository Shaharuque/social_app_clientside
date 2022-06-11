//car card
import React from 'react';
import {MdOutlineWhatshot,MdOutlineSell} from 'react-icons/md';
import {FaAngleDoubleRight} from 'react-icons/fa';

const Car = ({index, car, refetch}) => {       //props={index:index,car:car,refetch:refetch} thakey sheita destructure korey nisi direct 
    const { name, description, price, img,category } = car
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure><img src={img} alt="car" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                    {name}
                        <div className="badge badge-error">Tranding<MdOutlineWhatshot/></div>
                    </h2>
                    <p>{description.length>150 ? description.slice(0,150)+'...' : description}</p>
                    <div className="card-actions justify-end">
                        <button className="badge badge-outline p-4 text-teal-500">{category} <MdOutlineSell /></button>
                        <button className="badge badge-warning p-4 text-black hover:text-white hover:bg-black">Explore <FaAngleDoubleRight/></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Car;