import React from 'react';
import { useState } from "react";
import Cart from "../components/Cart.jsx";
import Button from "../components/Button.jsx";
function Home() {
  const [cartDisplay, setCartDisplay] = useState(false);
  return (
    <>
      {!cartDisplay ? (
        <Button btnDesc="Show Cart" setCartDisplay={setCartDisplay} cartDisplay={cartDisplay} />
      ) : (
        <Cart setCartDisplay={setCartDisplay} cartDisplay={cartDisplay}/>
      )}
    </>
  );
}

export default Home;
