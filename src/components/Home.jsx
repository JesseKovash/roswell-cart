import { useState } from "react";
import Cart from "../components/Cart.jsx";
function Home() {
  const [cartDisplay, setCartDisplay] = useState(false);
  return (
    <div className="flex flex-col items-center pt-5">
      <button
        className="btn btn-primary w-full"
        onClick={() => setCartDisplay(!cartDisplay)}
      >
        Show Cart
      </button>
      <Cart setCartDisplay={setCartDisplay} cartDisplay={cartDisplay} />
    </div>
  );
}

export default Home;
