import { Link } from "react-router-dom";

function CartFooter({ cartDisplay, setCartDisplay }) {
  return (
    <div className="cart-footer flex-col bg-white pt-[10px]">
      <footer className="flex flex-col items-center">
        <Link to="/checkout" className="block btn btn-primary">
          Cart Checkout
        </Link>
        <button
          className="btn btn-secondary"
          onClick={() => setCartDisplay(false)}
        >
          Continue Shopping
        </button>
      </footer>
    </div>
  );
}

export default CartFooter;
