import CartItem from "./CartItem";

function CartContents({ contents, changeQuantity, deleteItem }) {
  return (
    <div className="py-10">
      {contents.hasOwnProperty('items') ? (
        <>
          {contents?.items.map((oneItem) => (
            <CartItem item={oneItem} key={oneItem.id} changeQuantity={changeQuantity} deleteItem={deleteItem}/>
          ))}
        </>
      ) : null}
    </div>
  );
}

export default CartContents;
