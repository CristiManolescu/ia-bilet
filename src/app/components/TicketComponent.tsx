import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../redux/cartSlice";

interface TicketComponentProsp {
  name: string;
  price: number;
  eventName: string;
}

const TicketComponent = ({ name, price, eventName }: TicketComponentProsp) => {
  const [count, setCount] = useState<number>(0);
  const dispatch = useDispatch();

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
              if (count > 0) setCount(count - 1);
              dispatch(
                removeItem({
                  id: name + price,
                  eventName,
                  ticketName: name,
                  ticketPrice: price,
                  quantity: 0,
                })
              );
            }}
          >
            -
          </button>
          <input
            type="text"
            className="w-3 border border-black/50"
            value={count}
            onChange={() => console.log()}
          />
          <button
            className="px-2 text-white bg-blue-600 border rounded-r-lg border-black/50"
            onClick={() => {
              setCount(count + 1);
              dispatch(
                addItem({
                  id: name + price,
                  eventName,
                  ticketName: name,
                  ticketPrice: price,
                  quantity: 0,
                })
              );
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
