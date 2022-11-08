import { getOneData } from "../data-base/firestore";
import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { DotPulse } from "@uiball/loaders";

function ItemDetailContainer() {
  const [data, setData] = useState({});
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getOneData(id)
      .then((respuestaDatos) => setData(respuestaDatos))
      .finally(() => setIsLoading(false));
  }, [id]);

  return (
    <div>
      {isLoading ? (
        <div className="loading">
          <DotPulse size={55} speed={1.3} color="black" />
        </div>
      ) : (
        <div>
          <ItemDetail item={data} />
        </div>
      )}
    </div>
  );
}

export default ItemDetailContainer;
