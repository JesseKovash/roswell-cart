import { useState, useEffect } from "react";
import CartHeader from "../components/CartHeader";
import CartContents from "../components/CartContents";
import CartFooter from "../components/CartFooter";

function Cart({ cartDisplay, setCartDisplay }) {
  const [contents, setContents] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/cart");
      // const response = await fetch("http://localhost:3001/cart");
      const data = await response.json();
      setContents(data);
    };
    fetchData();
  }, [cartDisplay]);

  function changeQuantity(event, id, change) {
    const inputQty = +event.target.value;
    const contentsCopy = { ...contents };
    for (const item of contentsCopy.items) {
      if (item.id === id) {
        if (change === "increase") {
          item.quantity++;
        } else if (change === "decrease") {
          item.quantity--;
        } else {
          item.quantity = inputQty;
        }
        item.final_line_price = item.quantity * item.final_price;
        break;
      }
    }
    contentsCopy.item_count = contentsCopy.items.reduce((total, oneItem) => {
      return total + oneItem.quantity;
    }, 0);
    setContents(contentsCopy);
  }

  function deleteItem(id) {
    const contentsCopy = { ...contents };
    for (let index = 0; index < contentsCopy.items.length; index++) {
      if (contentsCopy.items[index].id === id) {
        contentsCopy.items.splice(index, 1);
        alert('Item Removed From Cart')
        break;
      }
    }
    setContents(contentsCopy);
  }

  return (
     <div
      className={
        cartDisplay
          ? "cart-visible main-cart h-screen flex flex-col"
          : "main-cart h-screen flex flex-col"
      }
    >
      <CartHeader setCartDisplay={setCartDisplay} />
      <div className="flex flex-col justify-between flex-1 bg-black">
        <CartContents
          contents={contents}
          changeQuantity={changeQuantity}
          deleteItem={deleteItem}
        />
        <CartFooter cartDisplay={cartDisplay} setCartDisplay={setCartDisplay} />
      </div>
    </div> : null
  );
}

export default Cart;
