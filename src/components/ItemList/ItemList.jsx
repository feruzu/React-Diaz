import Item from "../Item/Item"

function ItemList({data}){
    return(
        <div className="container">
        {data.map( (item) => {
                return <Item 
                key={item.id}
                price={item.price}
                title={item.title}
                img={item.img}
                detail={item.detal}
                />
            })}
        
        </div> 
    );
}
    export default ItemList;