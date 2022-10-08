import React, { useState, createContext } from "react";

const cartContext = createContext({});

export default function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);

  // Añadir al carrito
  function addItem(item, count) {
    if (IsInCart(item.id)){

      let newCar = cart.map((itemMap) => {
        if(itemMap.id === item.id) {
          itemMap.count += count
          return itemMap;
        }else{
          return itemMap
        }
      })
      setCart(newCar);
    }else{
      let newCart = cart.map((item) => item);
      newCart.push({ ...item, count: count });
      setCart(newCart);
    }
  }

  // Calcula total de items en el carrito
  function getTotalItemsInCart() {
    let total = 0;
    cart.forEach((item) => (total += item.count));
    return total;
  }

  // Busca id en el carrito
  function IsInCart(id) {
    let found = cart.some((item) => item.id === id);
    return found;
  }

  // Borrar un producto del carrito | X
  function removeItem(id) {
    return setCart(cart.filter((item) => item.id !== id));
  }

  // Borrar todos los productos del carrito | Se lo puedo asignar aun botón
  function clear() {
    return setCart([]);
  }


  // Calcular la suma de los precios
  function total(){
    let total = 0;
    cart.forEach((item) => (total += item.price * item.count));
    return total;
  }

  return (
    <cartContext.Provider
      value={{
        cart,
        addItem,
        getTotalItemsInCart,
        IsInCart,
        removeItem,
        clear,
        total
      }}
    >
      {children}
    </cartContext.Provider>
  );
}

export { cartContext };
