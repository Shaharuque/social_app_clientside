import React from 'react';
import useProducts from '../../CustomHook/useProducts';
import Loading from '../Loading/Loading';
import ManageProductRow from './ManageProductRow';
import { useQuery } from 'react-query';

const ManageProducts = () => {
    // const [products] = useProducts()
    //react query use korey products fetch kora holo
    const { isLoading, data: products, refetch } = useQuery('availbleproducts', () =>
    // heruko site boshbey
        fetch('http://localhost:5000/products', {
            method: 'GET',
            headers: {
                authorization: `bearer ${localStorage.getItem('token')}`
            }
        }).then(res =>
            res.json()
        )
    )
    //console.log(products)

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <div class="overflow-x-auto w-full">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>Serial No.</th>
                            <th>Preview</th>
                            <th>Available_Quantity</th>
                            <th>Price</th>
                            <th>Delete</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            products?.map((product, index) => <ManageProductRow index={index} product={product} refetch={refetch}></ManageProductRow>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageProducts;