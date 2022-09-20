import ItemCount from "../ItemCount/ItemCount";
import { getData } from "../data-base/mockAPI";
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";




function ItemListContainer(props){
    let [data, setData] = useState([]);

    useEffect(() => {   
        getData().then((respuestaDatos) => {
            setData(respuestaDatos);     
    }); 
    }, []);
  
    
   
    return(
        <div>
        {props.greeting}
        { <ItemCount initial={1} stock={15}/> }
        <ItemList data={data}/>
        </div>   
    );
}

export default ItemListContainer;