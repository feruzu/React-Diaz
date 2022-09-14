import ItemCount from "../ItemCount/ItemCount";

function ItemListContainer(props){
   
    return(
        <div>{props.greeting}
        <ItemCount initial={1} stock={15}/>
        </div>   
    );
}

export default ItemListContainer;