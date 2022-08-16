import React from 'react';
import CartItem from "./CartItem";

function CartContents({ contents, changeQuantity, deleteItem }) {
  return (
    <>
      {contents.hasOwnProperty('items') ? (
        <>
          {contents?.items.map((oneItem) => (
            <CartItem item={oneItem} key={oneItem.id} changeQuantity={changeQuantity} deleteItem={deleteItem}/>
          ))}
        </>
      ) : null}
    </>
  );
}

export default CartContents;
