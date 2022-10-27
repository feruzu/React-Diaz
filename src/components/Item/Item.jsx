import "./Item.css";
import { Link } from "react-router-dom";

function Item(item) {
  let { price, title, img, id } = item;
  const urlDetalle = `/producto/${id}`;

  return (
    <div className="item">
      <div className="item-img">
        <img src={img} alt="item img"></img>
      </div>
      <div className="item-detail">
        <h3>{title}</h3>
        <h4>$ {price}</h4>
      </div>
      <Link className="link" to={urlDetalle}>
        Ver más
      </Link>
    </div>
  );
}

export default Item;
