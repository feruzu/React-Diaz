import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { useState, useContext } from "react";
import "./CheckoutForm.css";
import { useNavigate } from "react-router-dom";
import { createBuyOrder } from "../../components/data-base/firestore";
import { cartContext } from "../../context/cartContext";

function CheckoutForm() {
  const context = useContext(cartContext);
  const { cart, total, clear } = context;
  const navigate = useNavigate();
  const [dataForm, setDataForm] = useState({
    name: "",
    phone: "",
    email: "",
  });

  function handleCheckout() {
    const orderData = {
      buyer: dataForm,
      items: cart,
      date: new Date(),
      total: total(),
    };

    createBuyOrder(orderData).then((orderId) => {
      navigate(`/checkout/${orderId}`);
      clear();
    });
  }

  function inputChangeHandler(event) {
    let inputName = event.target.name;
    let value = event.target.value;

    const newDataForm = { ...dataForm };
    newDataForm[inputName] = value;
    setDataForm(newDataForm);
  }

  return (
    <form className="form-contenedor">
      <h3>Complete los datos para finalizar su compra</h3>
      <div className="mb-3">
        <label className="form-label">Nombre</label>
        <input
          value={dataForm.name}
          onChange={inputChangeHandler}
          name="name"
          type="text"
          className="form-control"
          placeholder="nombre"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Email </label>
        <input
          value={dataForm.email}
          name="email"
          onChange={inputChangeHandler}
          type="email"
          className="form-control"
          placeholder="name@example.com"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Teléfono</label>
        <input
          value={dataForm.phone}
          name="phone"
          onChange={inputChangeHandler}
          type="number"
          className="form-control"
          placeholder="teléfono"
        />
      </div>
      <button
        disabled={
          dataForm.name === "" || dataForm.email === "" || dataForm.phone === ""
        }
        onClick={handleCheckout}
      >
        Comprar
      </button>
    </form>
  );
}

export default CheckoutForm;
