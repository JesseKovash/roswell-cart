function ChangeQty({ qty, changeQuantity, id, deleteItem }) {

  return (
    <div className="flex items-end">
      <div className="border h-[34px] w-[115px]">
        <div className="flex justify-between">
          <input type="number" value={qty} className="w-[65px]" onChange={(event)=>changeQuantity(event, id, null)}/>
          <div className="qty-buttons flex flex-col justify-between">
            <button onClick={(event) => changeQuantity(event, id, "increase")}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="10"
                fill="black"
                viewBox="0 0 256 256"
              >
                <rect width="256" height="256" fill="none"></rect>
                <polyline
                  points="48 160 128 80 208 160"
                  fill="none"
                  stroke="black"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="16"
                ></polyline>
              </svg>
            </button>
            <button onClick={(event) => changeQuantity(event, id, "decrease")}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="10"
                fill="black"
                viewBox="0 0 256 256"
              >
                <rect width="256" height="256" fill="none"></rect>
                <polyline
                  points="208 96 128 176 48 96"
                  fill="none"
                  stroke="black"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="16"
                ></polyline>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChangeQty;
