"use client";
import React from "react";
import { useAppSelector } from "../redux/store";

const Cart = () => {
  const cart = useAppSelector((store) => store.cart.cartItems);
  if (cart.length === 0) return null;

  console.log(cart);

  return (
    <div className="flex flex-col md:w-[60%] m-auto py-4 bg-white rounded-b-lg shadow-lg items-center md:items-stretch">
      <h1 className="text-2xl font-bold">Cosul meu</h1>
      <div>
        <h2 className="font-semibold">{cart[0].eventName}</h2>
        <div></div>
      </div>
    </div>
  );
};

export default Cart;
