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
            <p className="description">This restaurant can and will make anything!<br></br>
            Make a suggestion in the recipe form and we will make it!<br></br> 
            Be sure to comment on and like your favorite dishes!</p>
            <ul >
                <h1 className="dailyMeal">Suggested Dish: 
                <br></br> 
                {randomObj.name}
                <br></br>
                <img className="image" src={randomObj.image} style={{height: '150px'}}>
                    </img></h1>
               
                
            </ul>
            
        </div>
    )
}

export default Home;