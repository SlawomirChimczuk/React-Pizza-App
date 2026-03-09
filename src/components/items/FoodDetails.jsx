import { useEffect, useState } from "react"
import styles from './fooddetails.module.css'
import ItemList from "./ItemList";

export default function FoodDetails({foodId}){

    const [recipes, setRecipes] = useState([]);
    const [isLoading, setIsLoadng] = useState(true);

    useEffect(() => {
        async function getRecipe(){
            const res = await fetch('http://localhost:5000/recipesdetails');
            const data = await res.json();

            setRecipes(data);
            setIsLoadng(false);
            
        }

        getRecipe();
    }, [foodId]);
        
    const singleFood = recipes.filter(e => e.id == foodId);

    return(

        <div className={styles.recipieCard}>
            {singleFood.map(details => (
                <div key={details.id}>
                      Food Details :
                    <div className={styles.recipieName}>
                        {details.title}
                    </div>
 
                    <div className={styles.recipieDetails}>
                        <span>
                            <strong>Time needed to cook: {details.readyInMinutes} min</strong>
                        </span>
    
                        <span>
                            Price : {details.pricePerServing} $
                        </span>
    
                        <span>
                            {details.vegetarian ? "Vegetarians dish" : "Non-vegetarians dish"}
                        </span>
                    </div>

                    <div>

                        <div>
                            <h2>Ingredients:</h2>
                            <ItemList details={details} isLoading={isLoading}/>
                        </div>

                        <ol className={styles.recipieList}>
                            {isLoading ? (<p>Loading...</p>) : 
                            <div>
                                <h2>Instructions: </h2>
                                <div>
                                    {details.analyzeInstructions.steps.map((step) => (step.number % 2 == 0 ? <li style={{backgroundColor: "rosybrown"}} key={step.number}>{step.number} : {step.step}</li> : <li style={{backgroundColor: "bisque"}} key={step.number}>{step.number} : {step.step}</li>))}
                                </div>
                            </div>
                            }
                        </ol>
                    </div>
                </div>
            ))}
        </div>
    )
}