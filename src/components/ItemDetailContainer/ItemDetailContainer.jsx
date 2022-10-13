import { getOneData } from "../data-base/firestore";
import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { DotPulse } from '@uiball/loaders';

function ItemDetailContainer() {
  let [data, setData] = useState({});
  const { id } = useParams();
  const [error, setError] = useState(false);

  useEffect(() => {
    getOneData(id)
      .then((respuestaDatos) => setData(respuestaDatos))
      .catch((mensajeError) => {
        setError(mensajeError.message);
      })

  }, [id]);

  if (!data.id) {
    return (
      <>
        {error ? (
          <div style={{margin: "10rem"}}>
            <h2 style={{ color: "#aa0033" }}>Error obteniendo datos</h2>
            <h3>{error}</h3>

          </div>
        ) : (
          <div className="loading">
          <DotPulse 
        size={55}
        speed={1.3} 
        color="black" 
       />
       </div>
       
        )}
      </>
    );
  }

  return <div>{<ItemDetail item={data} /> }
        
          </div>;
}

export default ItemDetailContainer;
