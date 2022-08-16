import CartItem from "./CartItem";

function CartContents({ contents, changeQuantity, deleteItem }) {
  return (
    <div className="py-10 bg-white">
      {contents.hasOwnProperty("items") && contents.items.length > 0 ? (
        <>
          {contents?.items.map((oneItem) => (
            <CartItem
              item={oneItem}
              key={oneItem.id}
              changeQuantity={changeQuantity}
              deleteItem={deleteItem}
            />
          ))}
        </>
      ) : <p className="text-base font-bold">Cart is empty</p>}
    </div>
  );
}

export default CartContents;
