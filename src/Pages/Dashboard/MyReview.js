import React, { useRef } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const MyReview = () => {
    const reviewRef = useRef('')
    const [user]=useAuthState(auth)
    console.log(user)
    const handleReview = (e) => {
        const userReview = reviewRef.current.value
        const name=user.displayName
        const comment=['loved that']
        
        fetch(' https://quiet-sea-27806.herokuapp.com/review', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({ userReview,name,comment })
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.acknowledged){
                toast.success('Review Added Successfully')
            }
            })
    }

    return (
        <>
            <div className='flex flex-col justify-center'>
                <textarea ref={reviewRef} class="textarea textarea-accent" placeholder="Add Your Review" required></textarea>
                <button onClick={handleReview} style={{ borderRadius: '5px', backgroundColor: 'teal', color: 'white', padding: '10px', marginLeft: '5px' }}>Send</button>
            </div>

        </>
    );
};

export default MyReview;