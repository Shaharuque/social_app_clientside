import React from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../CustomHook/useProducts';
import ProductCard from './ProductCard';


const Banner = () => {
    const [products, setProducts] = useProducts()  //all products get from DB
    console.log(products)
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
            {/*Tools/part /products*/}
            <div class="grid lg:grid-cols-3 gap-4 p-4">
                {
                    products.slice(0, 6).map(product => <ProductCard product={product}></ProductCard>)
                }
            </div>
            <div className='flex justify-end'>
                <button className='rounded-lg bg-teal-700 hover:bg-black text-white p-2'>
                    <Link to='/showall/products'>
                        Show More!
                    </Link>
                </button>
            </div>
        </div>
    );
};

export default Banner;