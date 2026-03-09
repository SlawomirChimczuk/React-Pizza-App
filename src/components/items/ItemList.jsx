import Item from "./Item";

export default function ItemList({details, isLoading}){

    return(
        <>
            {isLoading ? (<p>Loading...</p>) : 
                <div>
                    {details.extendedIngredients.map((item) =>
                        (<Item item={item} key={item.id}/>)
                    )}
                </div>
            }
        </>
    )
}