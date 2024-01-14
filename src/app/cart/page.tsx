"use client";
import React from "react";
import { useAppSelector } from "../redux/store";
import TicketComponent from "../components/TicketComponent";
import OrderSummary from "../components/OrderSummary";
import { FaCircleInfo } from "react-icons/fa6";
import Link from "next/link";
import useEvents from "../hooks/useEvents";
import MainPageEventCard from "../components/MainPageEventCard";
import { useDispatch } from "react-redux";
import { emptyCart } from "../redux/cartSlice";

const Cart = () => {
  const cart = useAppSelector((store) => store.cart.cartItems);

  useEvents();
  const events = useAppSelector((store) => store.event.allEvents);
  const dispatch = useDispatch();

  const handleEmpty = () => {
    dispatch(emptyCart());
  };

  return (
    <div className="flex flex-col items-center md:items-stretch px-2">
      <h1 className="text-2xl font-bold">Cosul meu</h1>
      {cart.length > 0 ? (
        <div className="flex items-start sm:flex-row flex-col-reverse">
          <div className="sm:w-[70%] w-full m-2 p-2">
            <div className="border rounded-lg p-2">
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
            <button
              className="bg-[#006ACA] text-white p-2 rounded-lg right-2 mt-2"
              onClick={handleEmpty}
            >
              Goleste cosul
            </button>
          </div>
          <OrderSummary />
        </div>
      ) : (
        <div className="py-3">
          <div>
            <span className="flex items-center pb-5">
              <FaCircleInfo />
              <p className="text-sm ml-2">
                Cosul tau de cumparaturi nu contine bilete. Pentru a adauga
                bilete in cos te rugam{" "}
                <Link href="/" className="text-blue-600 hover:underline">
                  sa te intorci pe pagina principala.
                </Link>
              </p>
            </span>
            <div className="flex flex-col items-center md:items-stretch">
              <h1 className="text-xl">Evenimente recomandate</h1>
              <div className="flex flex-wrap justify-center md:overflow-x-scroll sm:flex-nowrap sm:justify-normal ">
                {events.map((event) => (
                  <Link
                    key={event.title}
                    href={{
                      pathname: `/iabilet/${event.title}`,
                      query: { id: event.id },
                    }}
                  >
                    <MainPageEventCard
                      image={event.image}
                      title={event.title}
                    />
                  </Link>
                ))}{" "}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
