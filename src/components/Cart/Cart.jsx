import { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import { Link } from "react-router-dom";
import "./Cart.css"

function Cart(){

    const context = useContext(cartContext);
    const { cart, removeItem, clear, total } = context;

   
    


if (cart.length === 0) {
  return <div>
       <h1 className="carrito">Carrito</h1>
       <h2 className="vacio">Vacío</h2>
       <Link to="/"><button className="volver-tienda">Volver a la Tienda</button></Link>
       
         </div>;
}
return (
  <div className="container-carrito">
    <h1 className="carrito">Carrito</h1>
    {cart.map((item) => (
      <div className="carrito-productos" key={item.id}>
        <img src={item.img} alt="item img"></img>
        <h3 className="item-titulo">{item.title}</h3>
        <h2 className="item-cant">Cant. {item.count}</h2>
        <h3 className="item-count">$ {item.price * item.count}</h3>
        <button className="boton-borrar" onClick={() => removeItem(item.id)}>X</button>
      </div>

      
      
    ))}

    <div className="container-total">
    <span className="precio-total">Total: $ {total()} </span>
    <button className="vaciar-carrito" onClick={() => clear()}>Vaciar carrito</button>
    <button>Comprar</button>
    </div>
  </div>

);
}

export default Cart;