import React from 'react';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import CartHeader from "../components/CartHeader";
import CartContents from "../components/CartContents";

function Cart({ cartDisplay, setCartDisplay }) {
  const [contents, setContents] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3001/cart");
      const data = await response.json();
      setContents(data);
    };
    fetchData();
  }, [cartDisplay]);

  function changeQuantity(id, change) {
    const contentsCopy = {...contents};
    for(const item of contentsCopy.items) {
      if (item.id === id) {
        if (change === 'increase') {
          item.quantity++;
        } else {
          item.quantity--;
        }
        item.final_line_price = item.quantity * item.final_price;
        break;
      }
    }
    setContents(contentsCopy)
  };

  function deleteItem(e, id) {
    e.preventDefault();
    const contentsCopy = {...contents};
    for(const index = 0; index < contentsCopy.items.length; index++) {
      if (contentsCopy.items[index].id === id) {
        contentsCopy.items.splice(index, 1)
        break;
      }
    }
    setContents(contentsCopy)
  };

  return (
    <div>
      <CartHeader />
      <CartContents contents={contents} changeQuantity={changeQuantity} deleteItem={deleteItem}/>
      <div className="cart-btns flex-col">
        <Link to="/checkout" className="block">
          <Button btnDesc="Cart Checkout" />
        </Link>
        <Link to="/" className="block">
          <Button
            btnDesc="Continue Shopping"
            setCartDisplay={setCartDisplay}
            cartDisplay={cartDisplay}
          />
        </Link>
      </div>
    </div>
  );
}

export default Cart;
