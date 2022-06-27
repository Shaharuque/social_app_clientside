import React, { useState } from 'react';
import { useRef } from 'react';
import CommentCard from './CommentCard';
import { BiMessageAdd } from 'react-icons/bi';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { BsFillHandThumbsUpFill,BsFillHandThumbsDownFill } from "react-icons/bs";

const ReviewCard = ({ review }) => {
    //console.log(review._id)
    const [clicked, setClicked] = useState(false)
    const commentRef = useRef('')
    const [error, setError] = useState('')
    const [comments, setComments] = useState([])
    //like/dislike handle ar jnno
    const [like, setLike] = useState(0)
    const [dislike, setDislike] = useState(0)
    const [user] = useAuthState(auth)
    //console.log(user)

    const handleClick = () => {
        setClicked(!clicked)
        
        //getting all the comments of particular postId
        const postId = review._id
        console.log(postId)
        fetch(` https://quiet-sea-27806.herokuapp.com/comments/${postId}`)
            .then(res => res.json())
            .then(data => {
                setComments(data)
                fetch(` https://quiet-sea-27806.herokuapp.com/comments/${postId}`)
                    .then(res => res.json())
                    .then(result => setComments(result))
            })
    }
    const sortedComments = comments.slice().sort((a, b) => b.time.localeCompare(a.time))  //latest comment will be shown at first
    //console.log(clicked)

    // useEffect(()=>{
    //         //getting all the comments of particular postId

    //         const postId = review._id
    //         //console.log(postId)
    //         fetch(` https://quiet-sea-27806.herokuapp.com/comments/${postId}`)
    //             .then(res => res.json())
    //             .then(data => {
    //                 setComments(data)
    //             })
    // },[review._id])



    const handleComment = (e) => {
        const userComment = commentRef.current.value
        const postId = review._id
        const commenter = user.displayName
        const time = new Date().toLocaleTimeString()
        console.log(userComment, postId, commenter)

        if (userComment) {
            fetch(' https://quiet-sea-27806.herokuapp.com/comment', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ userComment, postId, commenter, time })      //server side a data stringify korey send kora hocchey
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data)
                    document.getElementById('comment_field').value = ""
                    if (data) {
                        fetch(` https://quiet-sea-27806.herokuapp.com/comments/${postId}`)
                            .then(res => res.json())
                            .then(result => setComments(result))
                    }
                })
        }
        else {
            setError('Please Write Something')
        }
    }

    const likeHandler = () => {
        const postId = review._id
        const userName = user.displayName
        const liked=1
        const disliked=0
        console.log(postId, liked, disliked,userName)
          fetch(` https://quiet-sea-27806.herokuapp.com/postcondition/${postId}`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ postId, liked, disliked,userName})     
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if(data){
                            fetch(` https://quiet-sea-27806.herokuapp.com/count_liked_disliked/${postId}`)
                            .then(res=>res.json())
                            .then(data=>{
                                let totalLike=0
                                for (let i = 0; i < data.length; i++) {
                                    totalLike=totalLike+data[i].liked
                                }
                                setLike(totalLike)
                            })
                        }
                    })
        
      
    }
    const dislikeHandler = () => {
        const postId = review._id
        const userName = user.displayName
        const liked=0
        const disliked=1
        console.log(postId, liked, disliked,userName)
          fetch(` https://quiet-sea-27806.herokuapp.com/postcondition/${postId}`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ postId, liked, disliked,userName})     
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if(data){
                            fetch(` https://quiet-sea-27806.herokuapp.com/count_liked_disliked/${postId}`)
                            .then(res=>res.json())
                            .then(data=>{
                                let totalDislike=0
                                for (let i = 0; i < data.length; i++) {
                                    totalDislike=totalDislike+data[i].disliked
                                }
                                setDislike(totalDislike)
                            })
                        }
                    })
    }

    return (
        <div className='border-2 mb-4 p-2 rounded'>
            <div className="card w-full bg-base-100 shadow-xl mb-1">
                <div className="card-body">
                    <p className='font-bold text-red-600 text-2xl'>{review.name}</p>
                    <p className='text-black'>{review.userReview}</p>
                    <div className="card-actions justify-end">
                        <small>{review?.date}</small>
                    </div>
                </div>
            </div>
            <div className='flex flex-col'>
                <div className='mb-8'>
                    <button onClick={handleClick} className='bg-red-500 text-white rounded-lg px-2'>Show Comments</button>
                    <button onClick={likeHandler} className='bg-red-500 text-white rounded-lg px-2 ml-2'>
                        <div className='flex items-center'>
                        <BsFillHandThumbsUpFill/>
                        <span>{like}</span>
                        </div>
                    </button>
                    <button onClick={dislikeHandler} className='bg-red-500 text-white rounded-lg px-2 ml-2'>
                        <div className='flex items-center'>
                        <BsFillHandThumbsDownFill/>
                        <span>{dislike}</span>
                        </div>
                    </button>
                </div>

                {
                    clicked &&
                    <div className='mt-4'>
                        {
                            sortedComments?.map(comment => <CommentCard comment={comment} key={comment._id}></CommentCard>)
                        }
                    </div>
                }

                {
                    clicked && user ?
                        <div className='w-full flex flex-col justify-center'>
                            <textarea id='comment_field' ref={commentRef} class="textarea textarea-accent mb-1" placeholder="Express your thought"></textarea>
                            {
                                error && error
                            }
                            <button onClick={handleComment} className='w-2/4 lg:w-1/4 bg-black rounded text-white p-2 flex justify-center items-center'>comment <BiMessageAdd className='ml-3' /></button>
                        </div>
                        : null
                }

            </div>
        </div>
    );
};

export default ReviewCard;