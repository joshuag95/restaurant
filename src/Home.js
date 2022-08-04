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



    console.log(randomObj.image)

    

    return(
        <div>
            <h1>Welcome to Picky Eater</h1>
            <p>This restaurant can and will make anything. Make a suggestion in the recipe form and we will make it. Be sure to comment on and like your favorite dishes!</p>
            <ul>
                <h1>Meal of the Day: {randomObj.name}</h1><br/>
                <image className="mealOfTheDay" src={randomObj.image} style={{height: '150px'}}/>
            </ul>
        </div>
    )
}

export default Home;