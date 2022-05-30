//http://localhost:5500/admin/${email} =>email ta holo logged in user ar email,basically ai api tey hit korey logged in user admin kina sheita response hisabey pawa jassey

import { useEffect, useState } from "react"

const useAdmin = user => {
    const [admin, setAdmin] = useState(false);
    useEffect( () =>{
        const email = user?.email;
        if(email){
            fetch(`http://localhost:5000/admin/${email}`, {
                method:'GET',
                headers: {
                    'content-type': 'application/json',
                    authorization: `bearer ${localStorage.getItem('token')}`
                }
            })
            .then(res=>res.json())
            .then(data => {
                setAdmin(data.admin);
            })
        }
    }, [user])

    return [admin]
}

export default useAdmin;