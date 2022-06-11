import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Pages/Loading/Loading';
import ProductCard from '../Pages/Home/ProductCard';


const ShowAllProducts = () => {
    const { isLoading, error, data: products, refetch } = useQuery('all_products', () =>
        fetch('http://localhost:5000/products', {
            method: 'GET',
        }).then(res =>
            res.json()
        )
    )
    if (isLoading) {
        return <Loading></Loading>
    }
    console.log(products)
    return (
       <div className='bg-black grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4'>
        {
            products.map(product => <ProductCard product={product} key={product._id}></ProductCard>)
        }
       </div>
    );
};

export default ShowAllProducts;