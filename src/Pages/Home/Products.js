import React from 'react';
import {MdOutlineWhatshot} from 'react-icons/md'
import { Link } from 'react-router-dom';
import useProducts from '../../CustomHook/useProducts';
import ProductCard from './ProductCard';
import {FaAngleDoubleRight} from 'react-icons/fa'

const Products = () => {
    const [products] = useProducts()  //all products get from DB
    console.log(products)

    return (
        <div>
              {/*Tools/part /products*/}
              <h1 className='flex justify-center items-center text-xl text-red-500 font-bold mb-4'>TOP SELLING PRODUCT <MdOutlineWhatshot/></h1>
              <div class="grid lg:grid-cols-3 gap-4 p-6">
                  {
                      products.slice(0, 6).map(product => <ProductCard product={product}></ProductCard>)
                  }
              </div>
              <div className='flex justify-end'>
                  <button className='rounded-lg bg-yellow-500 hover:bg-info text-white p-2'>
                      <Link className='flex items-center' to='/showall/products'>
                          Show More
                          <FaAngleDoubleRight/>
                      </Link>
                  </button>
              </div>
        </div>
    );
};

export default Products;