import React from 'react';
// import Comment from './Comment';


function CommentContainer({comments}) {
  

    const getComments = comments.map(comment => {
            // return < Comment key={comment.length-1} comment={comment}/>
            return <p key={comment.length-1}>{comment}</p>
        })

    return(
        <div>{getComments}</div>
    )
}

export default CommentContainer