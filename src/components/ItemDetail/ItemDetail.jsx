import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../../context/cartContext";

function ItemDetail({ item }) {
  const { price, title, img, detail } = item;

  const [cartVacio, setCartVacio] = useState(true);

  const { addItem } = useContext(cartContext);

  function onAdd(count) {
    addItem(item, count);
    setCartVacio(false);
  }

  return (
    <div className="item-detail-contenedor">
      <img src={img} alt="item-detail img"></img>
      <div className="item-detail-producto">
        <h1>{title}</h1>
        <h3>$ {price}</h3>
        <h2>Detalles: </h2>
        <h4>{detail}</h4>
        {cartVacio ? (
          <ItemCount initial={1} stock={15} onAdd={onAdd} />
        ) : (
          <Link className="finalizarCompra" to="/cart">
            Ir al Carrito
          </Link>
        )}
      </div>
    </div>
  );
}

export default ItemDetail;
