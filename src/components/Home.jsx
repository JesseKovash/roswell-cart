import { useState } from "react";
import Cart from "../components/Cart.jsx";
function Home() {
  const [cartDisplay, setCartDisplay] = useState(false);
  return (
    <div className="flex flex-col items-center pt-5">
              <div className="btn btn-primary ">
          <button onClick={()=>setCartDisplay(!cartDisplay)}>Show Cart</button>
        </div>
        <Cart setCartDisplay={setCartDisplay} cartDisplay={cartDisplay} />
      {/* {!cartDisplay ? (
        <div className="btn btn-primary ">
          <button onClick={()=>setCartDisplay(!cartDisplay)}>Show Cart</button>
        </div>
      ) : (
        <Cart setCartDisplay={setCartDisplay} cartDisplay={cartDisplay} />
      )} */}
    </div>
  );
}

export default Home;
