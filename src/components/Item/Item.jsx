import "./Item.css"
import "../ItemCount/ItemCount";


function Item(item) {
    let { price, title, img} = item;


    return (
        <div className="item">
            <div className="item-img">
                <img src={img} alt="item img"></img>
            </div>
            <div className="item-detail">
                <h3>{title}</h3>
                <h4>$ {price}</h4>
            </div>
            <button>Ver más</button>
        </div>
    );

}




    export default Item;