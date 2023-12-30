"use client";
import React from "react";
import { useAppSelector } from "../redux/store";
import TicketComponent from "../components/TicketComponent";
import OrderSummary from "../components/OrderSummary";

const Cart = () => {
  const cart = useAppSelector((store) => store.cart.cartItems);

  return (
    <div className="flex flex-col md:w-[60%] m-auto py-4 bg-white rounded-b-lg shadow-lg items-center md:items-stretch px-2">
      <h1 className="text-2xl font-bold">Cosul meu</h1>
      {cart.length > 0 && (
        <div className="flex items-start">
          <div className="py-2 w-[70%] border rounded-lg m-2 p-2">
            {cart.map((item) => (
              <>
                <h1 className="font-bold">{item.eventName}</h1>
                <TicketComponent
                  key={item.id}
                  name={item.ticketName}
                  price={item.ticketPrice}
                  eventName={item.eventName}
                />
              </>
            ))}
          </div>
          <OrderSummary />
        </div>
      )}
    </div>
  );
};

export default Cart;
