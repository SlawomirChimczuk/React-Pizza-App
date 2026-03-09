export default function Item({item}){

    return(
        <>
            <div key={item.id}>{item.ingredient}</div>
        </>
    )
}