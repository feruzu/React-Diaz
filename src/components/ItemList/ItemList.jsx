import Item from "../Item/Item";

function ItemList({ data }) {
  return (
    
    <div className="container">
      {data.map((item) => {
        return (
          <Item
            id={item.id}
            key={item.id}
            price={item.price}
            title={item.title}
            img={item.img}
            detail={item.detail}
            categoy={item.categoy}
          />
        );
      })}
    </div>
  );
}
export default ItemList;
