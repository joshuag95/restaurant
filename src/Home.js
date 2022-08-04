import React, {useState, useEffect} from "react";

function Home({food}){


    const [randomObj, setRandomObj] = useState([])

    const random = food[Math.floor(Math.random() * food.length)];

    useEffect(() => {
    if (food.length === 0) {

    }
    else{
        setRandomObj(random)

    }

    
    }, [food])


    function handleClick() {
        console.log(randomObj)
    }

    

    return(
        <div>
            <h1>Welcome to Picky Eater</h1>
            <p>This restaurant can and will make anything. Make a suggestion in the recipe form and we will make it. Be sure to comment on and like your favorite dishes!</p>
            <button onClick={handleClick} >Click for a random recipe</button>
        </div>
    )
}

export default Home;