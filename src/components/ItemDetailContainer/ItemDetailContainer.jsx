import { getOneData } from "../data-base/mockAPI";
import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

function ItemDetailContainer(){
    let [data, setData] = useState({});

    const {id} = useParams();

    useEffect(() => {   
        getOneData(id).then((respuestaDatos) => setData(respuestaDatos)); 
    }, [id]);
  
    
   
    return(
        <div className="container">
        { <ItemDetail item={data}/> }
        </div>   
    );
}

export default ItemDetailContainer;

