import { getData } from "../data-base/mockAPI";
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { getItemsByCategory } from "../data-base/mockAPI";
import Carrusel from "../Carousel/Carousel";

function ItemListContainer(props) {
  let [data, setData] = useState([]);

  const { categoria } = useParams();

  useEffect(() => {
    if (categoria === undefined) {
      getData().then((respuestaDatos) => setData(respuestaDatos));
    } else {
      getItemsByCategory(categoria).then((respuestaDatos) =>
        setData(respuestaDatos)
      );
    }
  }, [categoria]);

  return (
    <div>
      <Carrusel />
      {/* {props.greeting} */}
      <h1 className="titulo">Productos</h1>
      <ItemList data={data} />
    </div>
  );
}

export default ItemListContainer;
