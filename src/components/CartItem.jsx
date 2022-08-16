import ChangeQty from "./ChangeQty";

function CartItem({ item, changeQuantity, deleteItem }) {
  return (
    <div className="item-primary grid grid-cols-[5fr_15fr] px-7 bg-white-500">
      <div className="item-left pr-[22px]">
        <img
          src={item.featured_image.url}
          alt={item.product_title}
          className="object-fit"
        ></img>
      </div>
      <div className="item-right grid grid-cols-[7fr_3fr] content-start gap-y-[16px]">
        <p className="desc-qty text-left text-sm font-bold leading-5">
          {item.title}
        </p>
        <p className="text-sm font-bold justify-self-end pt-1">
          {`$${(item.price / 100).toFixed(2)}`}
        </p>
        <div className="flex">
          <ChangeQty
            qty={item.quantity}
            id={item.id}
            changeQuantity={changeQuantity}
            deleteItem={deleteItem}
          />
        </div>
        <button
          onClick={() => deleteItem(item.id)}
          className="decoration-1 underline text-blue-500 text-xs self-end justify-self-end pb-1"
        >
          Remove
        </button>
        <p className="col-span-2 text-[10px] text-left">
          *This is a one-time purchase and will ship shortly.
        </p>
      </div>
    </div>
  );
}

export default CartItem;
