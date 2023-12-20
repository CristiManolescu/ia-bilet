import React from "react";

interface TicketComponentProsp {
  name: string;
  price: number;
}

const TicketComponent = ({ name, price }: TicketComponentProsp) => {
  return (
    <div className="flex justify-between py-2">
      <h2>{name}</h2>
      <div className="flex justify-end">
        <h2 className="pr-1">{price}</h2>
        <h2>lei</h2>
        <div className="mx-2">
          <button
            className="px-2 text-white bg-blue-600 border rounded-l-lg border-black/50"
            onClick={() => {
              //   if (count > 0) setCount(count - 1);
              //   if (allTickets > 0) setAllTickets(allTickets - 1);
            }}
          >
            -
          </button>
          <input
            type="text"
            className="w-3 border border-black/50"
            // value={count}
          />
          <button
            className="px-2 text-white bg-blue-600 border rounded-r-lg border-black/50"
            onClick={() => {
              //   setCount(count + 1);
              //   setAllTickets(allTickets + 1);
            }}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default TicketComponent;
