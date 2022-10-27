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

  function handleCheckout(event) {
    event.preventDefault();
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
    <form onSubmit={handleCheckout}>
      <h3>Completa los datos para finalizar con la compra</h3>
      <div className="form-floating mb-3">
        <input
          name="name"
          value={dataForm.name}
          onChange={inputChangeHandler}
          type="text"
          className="form-control"
          id="floatingTextInput"
          required
        />
        <label htmlFor="floatingTextInput">Nombre</label>
      </div>
      <div className="form-floating mb-3">
        <input
          name="email"
          value={dataForm.email}
          onChange={inputChangeHandler}
          type="email"
          className="form-control"
          id="floatingEmailInput"
          required
        />
        <label htmlFor="floatingEmailInput">Correo</label>
      </div>
      <div className="form-floating mb-3">
        <input
          name="phone"
          value={dataForm.phone}
          onChange={inputChangeHandler}
          type="number"
          className="form-control"
          id="floatinNumberlInput"
          required
        />
        <label htmlFor="floatingEmailInput">Teléfono</label>
      </div>
      <div className="text-center">
        <button type="submit" className="btn btn-primary">
          Comprar
        </button>
      </div>
    </form>
  );
}

export default CheckoutForm;
