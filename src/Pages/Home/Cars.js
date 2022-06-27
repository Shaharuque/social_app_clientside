import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Loading/Loading';
import Car from './Car';
import { MdOutlineSell } from 'react-icons/md'
import { useEffect } from 'react';
import useCars from '../../CustomHook/useCars';


const Cars = () => {
    const [vehicles,setVehicles]=useCars()
    //const [cars, setCars] = React.useState([]);
    //getting all cars
    // const { isLoading, data: cars } = useQuery('vehicles', () =>
    //     // heruko site boshbey
    //     fetch('http://localhost:5000/getcars', {
    //         method: 'GET',
    //         headers: {
    //             authorization: `bearer ${localStorage.getItem('token')}`
    //         }
    //     }).then(res =>
    //         res.json()
    //     )
    // )

    // if (isLoading) {
    //     return <Loading></Loading>
    // }
    // useEffect(()=>{
    //     fetch('http://localhost:5000/getcars')
    //     .then(res=>res.json())
    //     .then(data=>{setCars(data)})
    // },[])

    if(!vehicles){
        return <Loading></Loading>
    }
    console.log(vehicles)

    return (
        <div className='mt-12 mb-12'>
            <h1 className='flex justify-center items-center text-xl font-bold mb-4'>TOP CHARTTED CARS<MdOutlineSell /></h1>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 p-4'>
                {
                    vehicles?.map(c => <Car c={c} key={c._id}></Car>)
                }
            </div>
        </div>
    );
};

export default Cars;