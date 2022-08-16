import ChangeQty from "./ChangeQty";

function CartItem({ item, changeQuantity, deleteItem }) {
  return (
    <div className="item-primary grid grid-cols-[3fr_7fr] px-7">
      <div className="item-left">
        <img
          src={item.featured_image.url}
          alt={item.product_title}
          className="object-fit w-16"
        ></img>
      </div>
      <div className="item-right grid grid-cols-[7fr_3fr] content-start gap-y-[16px]">
        <p className="desc-qty text-left text-base font-bold">{item.title}</p>
        <p className="text-base font-bold justify-self-end pt-1">
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
        <a
          onClick={(e) => deleteItem(e, item.id)}
          className="decoration-1 underline text-blue-500 text-xs self-end justify-self-end pb-1"
        >
          Remove
        </a>
        <p className="col-span-2 text-[10px] text-left">*This is a one-time purchase and will ship shortly.</p>
      </div>
    </div>
  );
}

export default CartItem;
