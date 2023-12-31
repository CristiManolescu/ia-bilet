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
      <div className="flex w-full justify-between">
        <h2 className="font-bold">{name}</h2>
        <h2 className="pr-1 font-bold">{`${price} lei`}</h2>
      </div>
      <div className="mx-2 flex justify-end">
        <button
          className="px-2 text-gray-500 bg-gray-100 rounded-full mx-2 hover:bg-gray-200"
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
          className="w-5 text-center"
          value={count}
          onChange={() => console.log()}
        />
        <button
          className="px-2 text-gray-500 bg-gray-100 rounded-full mx-2 hover:bg-gray-200"
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
  );
};

export default TicketComponent;
