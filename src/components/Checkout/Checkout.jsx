import "./Checkout.css";
import "../Cart/Cart";
import { Link, useParams } from "react-router-dom";

function Checkout() {
  const params = useParams();
  window.scrollTo(0,0); 

  return (
    <div className="checkout">
      <h2>Muchas gracias por tu compra !</h2>
      <p>
        Tu número de orden de compra es: <span>{params.orderId}</span>
      </p>
      <Link to="/">
        <button className="volver-tienda">Seguir comprando</button>
      </Link>
    </div>
  );
}

export default Checkout;
