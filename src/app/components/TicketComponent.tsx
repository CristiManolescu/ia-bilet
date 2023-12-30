import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../redux/cartSlice";
import { useAppSelector } from "../redux/store";

interface TicketComponentProps {
  name: string;
  price: number;
  eventName: string;
}

const TicketComponent = ({ name, price, eventName }: TicketComponentProps) => {
  const [count, setCount] = useState<number>(0);
  const dispatch = useDispatch();
  const cart = useAppSelector((store) => store.cart.cartItems);

  useEffect(() => {
    checkQuantity();
  }, []);

  const checkQuantity = () => {
    const itemInCart = cart.find(
      (item) => item.quantity > 0 && item.id === name + price
    );
    if (itemInCart) setCount(itemInCart.quantity);
  };

  return (
    <div className="flex justify-between py-2">
      <h2>{name}</h2>
      <div className="flex justify-end">
        <h2 className="pr-1">{`${price} lei`}</h2>
        <div className="mx-2">
          <button
            className="px-2 text-white bg-blue-600 border rounded-l-lg border-black/50 hover:bg-blue-500"
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
            className="px-2 text-white bg-blue-600 border rounded-r-lg border-black/50 hover:bg-blue-500"
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
