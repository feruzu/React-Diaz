import "./Carousel.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

function Carrusel() {
  return (
    <div
      id="carouselControls"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="3000">
          <img
            src="./img/carousel-1.jpg"
            className="d-block w-100"
            alt="imagen carousel 1"
          />
        </div>
        <div className="carousel-item" data-bs-interval="3000">
          <img
            src="./img/carousel-3.jpg"
            className="d-block w-100"
            alt="imagen carousel 2"
          />
        </div>
        <div className="carousel-item" data-bs-interval="3000">
          <img
            src="./img/carousel-2.jpg"
            className="d-block w-100"
            alt="imagen carousel 3"
          />
        </div>
      </div>
    </div>
  );
}

export default Carrusel;
