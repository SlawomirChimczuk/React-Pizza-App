import { useEffect } from "react"
import styles from "./search.module.css"

const URL = "http://localhost:5000/recipes";

export default function Search({setFoodData, query, setQuery}){

    useEffect(() => {
        async function fetchFood(){
            const res = await fetch(`${URL}`);
            const data = await res.json();
           
            setFoodData(data[0].results);
        }
        fetchFood();
        
    }, [query]);    
    
    return(
        <div className={styles.searchContainer}>
            <input
                className={styles.input}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                type="text" 
            />
           
        </div>
    )
}