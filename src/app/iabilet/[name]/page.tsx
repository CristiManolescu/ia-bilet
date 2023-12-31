"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
import { FaLocationDot } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa";
import useEvents from "@/app/hooks/useEvents";
import { useAppSelector } from "@/app/redux/store";
import Image from "next/image";
import { useRouter } from "next/navigation";

import Link from "next/link";
import TicketComponent from "@/app/components/TicketComponent";

interface Props {
  params: { name: string };
}

const Page = ({ params }: Props) => {
  const searchParams = useSearchParams();
  const id: any = searchParams.get("id");
  const router = useRouter();

  const eventName = decodeURIComponent(params.name);
  let event: any;
  useEvents();
  const events = useAppSelector((store) => store.event.allEvents);
  if (events.length === 0) return null;

  if (id !== null) event = events[id];

  const handleAdd = () => {
    router.push("/cart");
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
            <Link className="underline" href={`/artist/${event.artist}`}>
              {event.artist}
            </Link>{" "}
            - {event.description}
          </div>
        </div>
      </div>
      <div className="border border-black/40 w-[60%] m-auto text-black/80 rounded-lg shadow-lg p-2">
        <div className="flex justify-between text-lg font-bold border-b-2">
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
          <div className="py-2 pr-2 text-right">
            <button
              className="p-2 text-white bg-[#006ACA]  rounded-lg right-2 hover:bg-blue-500"
              onClick={handleAdd}
            >
              Cumpara bilete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
