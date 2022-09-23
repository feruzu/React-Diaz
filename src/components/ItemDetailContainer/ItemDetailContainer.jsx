import { getOneData } from "../data-base/mockAPI";
import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";

function ItemDetailContainer(){
    let [data, setData] = useState({});

    useEffect(() => {   
        getOneData().then((respuestaDatos) => setData(respuestaDatos)); 
    }, []);
  
    
   
    return(
        <div className="container">
        { <ItemDetail item={data}/> }
        </div>   
    );
}

export default ItemDetailContainer;

