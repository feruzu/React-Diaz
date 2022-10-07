import React, { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import { Link } from "react-router-dom";

function CartWidget() {
  const { getTotalItemsInCart } = useContext(cartContext);
  const urlCart = "/cart";

  return (
    <Link to={urlCart}>
      <i className="bi bi-bag"></i>
      <span className="cantidad">{getTotalItemsInCart() > 0 && getTotalItemsInCart()}</span>
    </Link>
  );
}

export default CartWidget;
