import "./Carousel.css";
import "bootstrap/dist/css/bootstrap.min.css";


function Carrusel() {

  return (
    <div
      id="myCarousel"
      className="carousel slide carousel-fade"
      data-bs-ride="carousel"
      data-bs-interval="3000"
      data-bs-touch="true"
    >
      <div className="carousel-indicators">
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
      <div className="carousel-inner">
        <div className="carousel-item active" >
          <img
            src="/./img/carousel-1.jpg"
            className="d-block w-100"
            alt="imagen carousel 1"
          />
        </div>
        <div className="carousel-item" >
          <img
            src="/./img/carousel-3.jpg"
            className="d-block w-100"
            alt="imagen carousel 2"
          />
        </div>
        <div className="carousel-item" >
          <img
            src="/./img/carousel-2.jpg"
            className="d-block w-100"
            alt="imagen carousel 3"
          />
        </div>
      </div>
    </div>
  );
}

export default Carrusel;
