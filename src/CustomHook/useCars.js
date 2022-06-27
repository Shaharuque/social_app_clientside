import { useEffect } from "react";
import { useState } from "react";


const useCars=()=>{
    const [vehicles,setVehicles]=useState([])

    useEffect(()=>{
        fetch(" https://quiet-sea-27806.herokuapp.com/getcars")
        .then(res=>res.json())
        .then(data=>{setVehicles(data)})
    },[])

    return [vehicles,setVehicles]

}

export default useCars;