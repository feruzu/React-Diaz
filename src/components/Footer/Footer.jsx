import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <h2 className="footer-titulo">&copy; Serum´s</h2>

      <div className="nosotros">
        <a href="/">
          <i className="bi bi-instagram"></i>
        </a>
        <a href="/">
          <i className="bi bi-facebook"></i>
        </a>
        <a href="/">
          <i className="bi bi-twitter"></i>
        </a>
      </div>

      <div className="info">
        <div className="sobre-nosotros">
          <p className="servicios">Servicios</p>
          <a href="/">
            <p>Nosotros</p>
          </a>
          <a href="/">
            <p>Tiendas</p>
          </a>
          <a href="/">
            <p>Ubicación</p>
          </a>
          <p className="tel">Tel: 3487593759</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
