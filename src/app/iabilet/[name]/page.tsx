"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
import { FaLocationDot, FaCircleInfo } from "react-icons/fa6";
import { FaRegClock, FaShoppingCart } from "react-icons/fa";
import useEvents from "@/app/hooks/useEvents";
import { useAppSelector } from "@/app/redux/store";
import Image from "next/image";
import { useRouter } from "next/navigation";

import Link from "next/link";
import TicketComponent from "@/app/components/TicketComponent";
import { addError } from "@/app/redux/cartSlice";
import { useDispatch } from "react-redux";

interface Props {
  params: { name: string };
}

const Page = ({ params }: Props) => {
  const searchParams = useSearchParams();
  const id: any = searchParams.get("id");
  const router = useRouter();
  const dispatch = useDispatch();

  const cart = useAppSelector((store) => store.cart.cartItems);
  const error = useAppSelector((store) => store.cart.error);

  const eventName = decodeURIComponent(params.name);
  let event: any;
  useEvents();
  const events = useAppSelector((store) => store.event.allEvents);
  if (events.length === 0) return null;

  if (id !== null) event = events[id];

  const handleAdd = () => {
    const itemInCart = cart.find((item) => item.eventName === eventName);
    itemInCart ? router.push("/cart") : dispatch(addError());
  };

  return (
    <div className="flex flex-col md:w-[60%] m-auto py-4 bg-white rounded-b-lg shadow-lg items-center md:items-stretch">
      <div className="flex pb-14 flex-col md:flex-row items-center">
        <div className="md:w-[30%] md:pl-4">
          <Image
            src={event.image}
            alt="poster"
            width="245"
            height="347"
            className="rounded-md"
          />
        </div>
        <div className="md:w-[70%] py-2 my-2 text-sm md:pr-32">
          <h1 className="text-3xl text-center md:text-left">{eventName}</h1>
          <div className="flex my-6 items-center justify-center md:justify-start">
            <FaLocationDot className="mr-4" />
            <div>
              <p>
                <Link
                  className="text-blue-500 hover:underline"
                  href={`/location/${event.address[0]}`}
                >
                  {event.address[0]}
                </Link>
                , {event.address[2]}
              </p>
              <p>{event.address[1]}</p>
            </div>
          </div>
          <div className="flex my-6 items-center justify-center md:justify-start">
            <FaRegClock className="mr-4" />
            <div>
              <p>
                {event.date["weekday"]}, {event.date["day"]},{" "}
                {event.date["time"]}
              </p>
            </div>
          </div>
          <div className="m-2 md:m-0">
            <Link className="underline" href={`/artist/${event.artist}`}>
              {event.artist}
            </Link>{" "}
            - {event.description}
          </div>
        </div>
      </div>
      <div className="border border-black/40 w-[95%] md:w-[60%] md:m-auto text-black/80 rounded-lg shadow-lg md:p-2">
        <div className="flex justify-between text-lg font-bold border-b-2 p-2">
          <h1>Cumpara bilete</h1>
          <h1>Nr. bilete</h1>
        </div>
        <div className="flex flex-col font-light">
          {event.tickets.map((ticket: { name: string; price: number }) => (
            <TicketComponent
              key={ticket.name}
              name={ticket.name}
              price={ticket.price}
              eventName={eventName}
            />
          ))}
          <div className="py-2 pr-2 flex flex-col justify-end">
            <div className="flex justify-end">
              <button
                className="py-2 px-8 text-white bg-[#006ACA] rounded-lg hover:bg-blue-500 flex justify-center items-center relative"
                onClick={handleAdd}
              >
                <p>Cumpara bilete</p>
                <FaShoppingCart className="absolute left-2" />
              </button>
            </div>
            {error && (
              <div className="text-sm py-1 text-red-600 flex items-center justify-end gap-1">
                <FaCircleInfo />
                <p>Selecteaza numarul de bilete dorit!</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
