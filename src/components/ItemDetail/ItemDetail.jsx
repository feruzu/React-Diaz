import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";

function ItemDetail({ item }) {
  let { price, title, img, detail } = item;

  return (
    <div className="item-detail-contenedor">
      <img src={img} alt="item-detail img"></img>
      <div className="item-detail-producto">
        <h1>{title}</h1>
        <h3>$ {price}</h3>
        <h2>Detalles: </h2>
        <h4>{detail}</h4>
        {<ItemCount initial={1} stock={15} onAdd={onAdd} />}
        
      </div>
    </div>
  );
}

function onAdd() {
  alert(`Añadido con éxito`);
}

export default ItemDetail;
