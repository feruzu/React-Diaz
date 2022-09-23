import React, {useState} from "react";
import "./ItemCount";
import "./ItemCount.css";


function ItemCount({stock, initial, onAdd}){
    const [count, setCount] = useState(initial);

    function handleAdd() {
        if(count < stock){
            setCount(count+1)           
        }     
    }

    function handleSubstract() {
        if(count > 1){
            setCount(count-1)
        }        
    }
 
    

     
    return(
        
        <div className="addCart">
                
                <div className="disponible">
                <span>Cant. Disponible: {stock}</span>
                </div>
            <div className="count">      
                <button onClick={handleSubstract}>-</button>   
                <span>{count}</span>
                <button onClick={handleAdd}>+</button>
            </div>
            
            <button className="add" onClick={onAdd}>Añadir al Carrito</button>
            
           
            
            
        </div> 
    
        
    );

    
}


export default ItemCount;