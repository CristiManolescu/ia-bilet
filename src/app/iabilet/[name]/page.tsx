"use client";
import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import { FaLocationDot } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa";
import useEvents from "@/app/hooks/useEvents";
import { useAppSelector } from "@/app/redux/store";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { addItem } from "@/app/redux/cartSlice";

interface Props {
  params: { name: string };
}

const Page = ({ params }: Props) => {
  const [count, setCount] = useState<number>(0);
  const [count2, setCount2] = useState<number>(0);
  const [items, setItems] = useState<string[] | number[]>([]);
  const [allTickets, setAllTickets] = useState(0);
  const dispatch = useDispatch();
  const searchParams = useSearchParams();
  const id: any = searchParams.get("id");

  const eventName = decodeURIComponent(params.name);
  let event: any;
  useEvents();
  const events = useAppSelector((store) => store.event.allEvents);
  const cart = useAppSelector((store) => store.cart.cartItems);
  if (events.length === 0) return null;

  if (id !== null) event = events[id];

  const handleAdd = () => {
    setItems([
      {
        eventName: eventName,
        ticket1: event.tickets[0].name,
        ticket_price1: event.tickets[0].price,
        ticket_count1: count,
        ticket2: event.tickets[1].name,
        ticket_price2: event.tickets[1].price,
        ticket_count2: count2,
        totalTicketsCount: allTickets,
      },
    ]);
    dispatch(addItem(items));
    console.log(cart);
  };

  return (
    <div className="flex flex-col md:w-[60%] m-auto py-4 bg-white rounded-b-lg shadow-lg items-center md:items-stretch">
      <div className="flex pb-14">
        <div className="md:w-[30%] md:pl-4">
          <Image src={event.image} alt="poster" width="245" height="347" />
        </div>
        <div className="md:w-[70%] py-2 my-2 text-sm md:pr-32">
          <h1 className="text-3xl">{eventName}</h1>
          <div className="flex my-6">
            <FaLocationDot className="mr-4" />
            <div>
              <p>
                {event.address[0]}, {event.address[2]}
              </p>
              <p>{event.address[1]}</p>
            </div>
          </div>
          <div className="flex my-6">
            <FaRegClock className="mr-4" />
            <div>
              <p>
                {event.date["weekday"]}, {event.date["day"]},{" "}
                {event.date["time"]}
              </p>
            </div>
          </div>
          <div>
            {event.artist} - {event.description}
          </div>
        </div>
      </div>
      <div className="border border-black/40 w-[60%] m-auto text-black/80 rounded-lg shadow-lg p-2">
        <div className="flex justify-between text-lg font-bold border-b-2">
          <h1>Cumpara bilete</h1>
          <h1>Nr. bilete</h1>
        </div>
        <div className="flex flex-col font-light">
          <div className="flex justify-between py-2">
            <h2>{event.tickets[0].name}</h2>
            <div className="flex justify-end">
              <h2 className="pr-1">{event.tickets[0].price}</h2>
              <h2>lei</h2>
              <div className="mx-2">
                <button
                  className="px-2 text-white bg-blue-600 border rounded-l-lg border-black/50"
                  onClick={() => {
                    setCount(count - 1);
                    setAllTickets(allTickets - 1);
                  }}
                >
                  -
                </button>
                <input
                  type="text"
                  className="w-3 border border-black/50"
                  value={count}
                />
                <button
                  className="px-2 text-white bg-blue-600 border rounded-r-lg border-black/50"
                  onClick={() => {
                    setCount(count + 1);
                    setAllTickets(allTickets + 1);
                  }}
                >
                  +
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            <h2>{event.tickets[1].name}</h2>
            <div className="flex justify-end">
              <h2 className="pr-1">{event.tickets[1].price}</h2>
              <h2>lei</h2>
              <div className="mx-2">
                <button
                  className="px-2 text-white bg-blue-600 border rounded-l-lg border-black/50"
                  onClick={() => {
                    setCount2(count2 - 1);
                    setAllTickets(allTickets - 1);
                  }}
                >
                  -
                </button>
                <input
                  type="text"
                  className="w-3 border border-black/50"
                  value={count2}
                />
                <button
                  className="px-2 text-white bg-blue-600 border rounded-r-lg border-black/50"
                  onClick={() => {
                    setCount2(count2 + 1);
                    setAllTickets(allTickets + 1);
                  }}
                >
                  +
                </button>
              </div>
            </div>
          </div>
          <div className="py-2 pr-2 text-right">
            <button
              className="p-2 text-white bg-blue-600 border rounded-lg right-2 border-black/50"
              onClick={handleAdd}
            >
              Adauga in cos
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
