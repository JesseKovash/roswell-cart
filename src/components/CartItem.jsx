import React from 'react';
import ChangeQty from "./ChangeQty";

function CartItem({ item, changeQuantity, deleteItem }) {
  return (
    <div className="p-7">
      <div className="flex text-left text-lg font-bold">
        <div className="w-[115px]">
          <img
            src={item.featured_image.url}
            alt={item.product_title}
            className="object-fit w-16"
          ></img>
        </div>
        <div className="desc-container leading-7 w-52">
          <p>{item.title}</p>
          <div className="flex">
            <ChangeQty
              qty={item.quantity}
              id={item.id}
              changeQuantity={changeQuantity}
              deleteItem={deleteItem}
            />
            <a
              onClick={(e) => deleteItem(e, item.id)}
              className="decoration-1 underline text-blue-500 text-xs"
            >
              Remove
            </a>
          </div>
        </div>
        <div className="pt-1.5">
          <p>{`$${(item.price / 100).toFixed(2)}`}</p>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
