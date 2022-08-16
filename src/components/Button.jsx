import React from 'react';

function Button({ btnDesc, cartDisplay, setCartDisplay }) {
  return (
    <>
      <button onClick={() => setCartDisplay(!cartDisplay)} className="text-white bg-blue-600 p-3">{btnDesc}</button>
    </>
  );
}

export default Button;
