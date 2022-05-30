import React, { useRef } from 'react';
import { toast } from 'react-toastify';

const MyReview = () => {
    const reviewRef = useRef('')

    const handleReview = (e) => {
        const userReview = reviewRef.current.value
        
        fetch('https://desolate-bastion-01704.herokuapp.com/review', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({ userReview })
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
                <textarea ref={reviewRef} class="textarea textarea-accent" placeholder="Add Your Review"></textarea>
                <div className='flex mt-4 mb-4'>
                    <h3 className='mr-4 font-bold'>Ratings: </h3>
                    <div class="rating">
                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-teal-400" />
                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-teal-400" />
                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-teal-400" />
                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-teal-400" />
                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-teal-400" />
                    </div>
                </div>
                <button onClick={handleReview} style={{ borderRadius: '5px', backgroundColor: 'teal', color: 'white', padding: '10px', marginLeft: '5px' }}>Send</button>
            </div>

        </>
    );
};

export default MyReview;