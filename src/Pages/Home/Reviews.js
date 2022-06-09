import React, { useEffect, useState } from 'react';
import ReviewCard from './ReviewCard';

const Reviews = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/reviews', {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div>
            <h1 style={{ textAlign: 'center', fontWeight: 'bold', color: 'teal',marginTop:'50px' }}>Visitors Review<sup >We loved to hear you out, Come on do some comments.</sup></h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 mt-16'>
                {
                    reviews.map(review => <ReviewCard review={review}></ReviewCard>)
                }
            </div>
        </div>
    );
};

export default Reviews;