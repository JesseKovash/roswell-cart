function CartHeader({ setCartDisplay }) {
  return (
    <header className="h-[60px] bg-[#233e5d] text-white ">
      <div className="pt-[22px] pl-4 flex justify-between align-text-bottom">
        <p className="text-[22px] font-bold">My Cart</p>
        <button className="text-[11px] pr-4 flex items-center" onClick={()=>setCartDisplay(false)}>
          <span className="block pr-3 font-semibold">Close</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="#fcfcfc"
            viewBox="0 0 256 256"
          >
            <rect width="256" height="256" fill="none"></rect>
            <line
              x1="200"
              y1="56"
              x2="56"
              y2="200"
              fill="none"
              stroke="#fcfcfc"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="24"
            ></line>
            <line
              x1="200"
              y1="200"
              x2="56"
              y2="56"
              fill="none"
              stroke="#fcfcfc"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="24"
            ></line>
          </svg>
        </button>
      </div>
    </header>
  );
}

export default CartHeader;
