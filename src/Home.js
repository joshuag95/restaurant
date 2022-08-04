import React, {useState, useEffect} from "react";

function Home({food}){

    const [idArray, setIdArray] = useState([])

    let i = 0

    useEffect(() =>  {while(i < 5) {food.map((foodObj) => setIdArray([...idArray, foodObj.id]))}}, [])
    console.log(idArray)

    // let i = 0

    // while (i < 5) {
    //     console.log(food.length)
    //     food.map(foodObj => setIdArray([...idArray, foodObj.id]))
    //     console.log(idArray)
    //     i++
    //     console.log(i)
    // }

    

    // function handleClick() {
        
    // }

    return(
        <div>
            <h1>Welcome to Picky Eater</h1>
            <p>This restaurant can and will make anything. Make a suggestion in the recipe form and we will make it. Be sure to comment on and like your favorite dishes!</p>
            <button  >Click for a random recipe</button>
        </div>
    )
}

export default Home;