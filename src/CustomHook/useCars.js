import { useEffect } from "react";
import { useState } from "react";


const useCars=()=>{
    const [vehicles,setVehicles]=useState([])

    useEffect(()=>{
        fetch("http://localhost:5000/getcars")
        .then(res=>res.json())
        .then(data=>{setVehicles(data)})
    },[])

    return [vehicles,setVehicles]

}

export default useCars;