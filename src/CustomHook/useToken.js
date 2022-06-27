import { useEffect, useState } from "react"

const useToken=(user)=>{
    const [token,setToken]=useState('')
    useEffect(()=>{
        const email=user?.user?.email
        const currentUser={email:email}  //client side thekey ai data jabey

        //jei user register korsey tar email server a pathia user k DB tey store kora hocchey and ekta token generate korey dewa hocchey backend thekey
        if(email){
            fetch(` https://quiet-sea-27806.herokuapp.com/user/${email}`,{
                method:'PUT',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(currentUser)
            })
            .then(res=>res.json())
            .then(data=>{
                console.log( 'data inside useToken',data)
                localStorage.setItem('token',data.accessToken)
                setToken(data.accessToken)
            })
        }
    },[user])


    return [token,setToken]
}

export default useToken;