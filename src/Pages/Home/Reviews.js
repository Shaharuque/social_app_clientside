import React, { useEffect, useRef, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import ReviewCard from './ReviewCard';

const Reviews = () => {
    const [reviews, setReviews] = useState([])

    const reviewRef = useRef('')
    const [user] = useAuthState(auth)
    //console.log(user)

    const { isLoading, data: posts, refetch } = useQuery('allPosts', () =>
        fetch('http://localhost:5000/reviews', {
            method: 'GET',
            headers: {
                authorization: `bearer ${localStorage.getItem('token')}`
            }
        }).then(res =>
            res.json()
        )
    )

    // console.log(singleUser)
    if (isLoading) {
        return <Loading></Loading>
    }

    const handleReview = () => {
        if (user) {
            const userReview = reviewRef.current.value
            const name = user.displayName ? user.displayName : null
            const comment = ['loved that']
            const date = new Date().toLocaleTimeString()


            fetch('http://localhost:5000/review', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': `bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify({ userReview, name, comment, date })
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.acknowledged) {
                        toast.success('Review Added Successfully')
                        refetch()  //new post korar sathey sathey sob data database thekey get korbey ai refetch() ar help a
                        document.getElementById('post_field').value = ""
                    }
                })
        }
        else {
            toast.error('Please sign-in to post your status')
        }
    }


    // useEffect(() => {
    //     fetch('http://localhost:5000/reviews', {
    //         method: 'GET',
    //         headers: {
    //             authorization: `Bearer ${localStorage.getItem('token')}`
    //         }
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             if (data) {
    //                 fetch('http://localhost:5000/reviews', {
    //                     method: 'GET',
    //                     headers: {
    //                         authorization: `Bearer ${localStorage.getItem('token')}`
    //                     }
    //                 })
    //                     .then(res => res.json())
    //                     .then(data => setReviews(data))
    //             }
    //         })
    // }, [])

    return (
        <div className='p-12 flex flex-col items-center'>
            <div className='w-full flex flex-col justify-center'>
                <textarea id='post_field' ref={reviewRef} class="textarea textarea-accent mb-3" placeholder="What's in your mind" required></textarea>
                <button onClick={handleReview} style={{ borderRadius: '5px', backgroundColor: 'teal', color: 'white', padding: '10px', marginLeft: '5px', width: '25%' }}>Post</button>
            </div>

            <h1 style={{ textAlign: 'center', fontWeight: 'bold', color: 'teal', marginTop: '50px' }}>SOCIAL CREATION<sup >We loved to hear you out, Come on express yourself</sup></h1>
            <div className='w-full mt-16'>
                {
                    posts?.map(review => <ReviewCard review={review}></ReviewCard>)
                }
            </div>
        </div>
    );
};

export default Reviews;