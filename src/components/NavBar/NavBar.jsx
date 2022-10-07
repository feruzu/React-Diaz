import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

function NavBar() {
  let title = "Serum´s";
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>

      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link active" aria-current="page">
              Inicio
            </Link>
          </li>
          <li className="nav-item dropdown">
            <Link
              className="nav-link dropdown-toggle"
              to="/productos"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Productos
            </Link>
            <ul className="dropdown-menu">
              <li>
                <Link to="/categoria/exfoliantes" className="dropdown-item">
                  Exfoliantes
                </Link>
              </li>
              <li>
                <Link to="/categoria/hidratantes" className="dropdown-item">
                  Hidratantes
                </Link>
              </li>
              <li>
                <Link to="/categoria/vitaminas" className="dropdown-item">
                  Vitaminas
                </Link>
              </li>
            </ul>
          </li>
          <div className="cart">
            <CartWidget />
          </div>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
