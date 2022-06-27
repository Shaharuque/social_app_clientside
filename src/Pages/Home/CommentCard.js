import React from 'react';

const CommentCard = ({comment}) => {
    //console.log(comment)
    return (
        <div className='border-gray-300 border-2 mb-2 rounded-lg bg-gray-300  px-4'>
            <small className='font-bold'>{comment.commenter}</small>
            <p>{comment.userComment}</p>
            <small className='flex justify-end font-bold'>{comment?.time}</small>
        </div>
    );
};

export default CommentCard;