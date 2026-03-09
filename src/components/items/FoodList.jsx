import FoodItem from "./FoodItem";

export default function FoodList({dataFiltered, setFoodId}){

    return(
        <>
            <div>
                {dataFiltered.map((food) => (
                    <FoodItem setFoodId={setFoodId} key={food.id} food={food}/>
                ))}
            </div>
        </>
    )
}