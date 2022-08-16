import React from 'react';
import { Link } from "react-router-dom";
import Button from "../components/Button";

function Checkout() {
  return (
    <div>
      Checkout

        <Link to="/">
          <Button btnDesc="Continue Shopping"/>
        </Link>
    </div>
  );
}

export default Checkout;
