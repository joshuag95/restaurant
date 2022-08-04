import React, { useState } from 'react';
import CommentContainer from './CommentContainer';




function RecipeCard({ food, handleDelete }) {


    const { name, vegetarian, image, hasPeanuts, dairyFree, ingredients, comments, likes, id } = food

    let [likeCount, setLikeCount] = useState(likes)

    // Function for handling like increment
    const handleLikeCount = () => {
        setLikeCount(likeCount = likeCount + 1, console.log(likeCount))
        fetch(`http://localhost:3000/recipes/${id}`, {
            method: "PATCH",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({
                likes: likeCount
            })
        })
    }




    let [commentsArray, setCommentsArray] = useState(comments)

    // Function for putting comments on the DOM 
    function renderComments(newComment) {
        const newCommentArray = [...commentsArray, newComment]
        setCommentsArray(newCommentArray)
        fetch(`http://localhost:3000/recipes/${id}`, {
            method: "PATCH",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({
                comments: newCommentArray
            })
        })


    }

    const [toggle, setToggle] = useState(false)

    const [searchString, setSearchString] = useState('')

    function handleToggle() {
        setToggle(toggle => !toggle)
    }





    return (
        <div className='card'>
            <ul>
                <h2 style={{ color: "crimson" }}>{name}</h2>
                <img src={image} style={{ height: "200px" }} />
                <button onClick={() => handleToggle()} >{toggle ? 'ingredients' : 'comments'}</button>
            </ul>
            <ul style={{paddingBlock: "20px"}}>
                <p>{vegetarian ? "🍖: No" : "🍖: Yes"}</p>
                <p>{hasPeanuts ? "🥜: Yes" : "🥜: No"}</p>
                <p>{dairyFree ? "🐮: No" : "🐮: Yes"}</p>
                <p onClick={handleLikeCount} style={{cursor: "pointer"}}>😘:{"⬅ " + likeCount}</p>
                <div>

                    <p style={{fontWeight: "bold", color: "turquoise"}}>{toggle ? 'Comments' : 'Ingredients'}</p>
                    <br/>
                    <li className="cardComments"><div>{toggle ? 

                    <ul>
                        <div>
                            <CommentContainer comments={commentsArray} />
                        </div>
                        <input type='text' placeholder='Write your comment here!' onChange={(e) => setSearchString(e.target.value)} />
                        <button onClick={() => renderComments(searchString)}>Submit</button>
                    </ul> 

                    : ingredients}</div></li>
                    <button style={{cursor: "pointer"}} onClick={() => { handleDelete(id) }}>Remove Recipe</button>

                </div>

            </ul>
        </div>
    )
}


export default RecipeCard;