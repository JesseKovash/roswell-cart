import { Link } from "react-router-dom";

function Checkout() {
  return (
    <div className="flex flex-col items-center pt-5">
      <h1>Checkout</h1>
      <Link to="/" className="block btn btn-primary">
        Continue Shopping
      </Link>
    </div>
  );
}

export default Checkout;
