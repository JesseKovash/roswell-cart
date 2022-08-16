import { Link } from "react-router-dom";
function CartFooter({ cartDisplay, setCartDisplay }) {
  return (
    <div className="cart-footer flex-col bg-white pt-[10px]">
    <footer className="flex flex-col items-center">
      <Link to="/checkout" className="block btn btn-primary w-full bg-[#2356b2]">
        {" "}
        Cart Checkout
      </Link>
      <Link
        to="/"
        className="block btn btn-secondary"
        setCartDisplay={setCartDisplay}
        cartDisplay={cartDisplay}
      >
        Continue Shopping
      </Link>
    </footer>
  </div>
  )
};

export default CartFooter;