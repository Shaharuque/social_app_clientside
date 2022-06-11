import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Loading/Loading';
import Car from './Car';
import { MdOutlineSell } from 'react-icons/md'


const Cars = () => {

    //getting all cars
    const { isLoading, data: cars, refetch } = useQuery('all_cars', () =>
        // heruko site boshbey
        fetch('http://localhost:5000/getcars', {
            method: 'GET',
            headers: {
                authorization: `bearer ${localStorage.getItem('token')}`
            }
        }).then(res =>
            res.json()
        )
    )

    if (isLoading) {
        return <Loading></Loading>
    }

    console.log(cars)

    return (
        <div className='mt-12 mb-12'>
            <h1 className='flex justify-center items-center text-xl font-bold mb-4'>TOP CHARTTED CARS<MdOutlineSell /></h1>
            <div className='grid grid-cols-1 lg:grid-cols-2 p-8 gap-4'>
                {
                    cars.slice(0, 6).map((car, index) => <Car car={car} key={car._id} index={index} refetch={refetch}></Car>)
                }
            </div>
        </div>
    );
};

export default Cars;