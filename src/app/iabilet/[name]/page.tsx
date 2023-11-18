"use client";
import React from "react";
import { ReadonlyURLSearchParams, useSearchParams } from "next/navigation";
import { FaLocationDot } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa";
import useEvents from "@/app/hooks/useEvents";
import { useAppSelector } from "@/app/redux/store";
import Image from "next/image";

interface Props {
  params: { name: string };
}

const Page = ({ params }: Props) => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  useEvents();
  const events = useAppSelector((store) => store.event.allEvents);
  const event = events[id];

  return (
    <div className="flex flex-col md:flex-row md:w-[60%] m-auto py-4 bg-white rounded-b-lg shadow-lg items-center md:items-stretch">
      <div className="md:w-[30%] md:pl-4">
        <Image src={event.image} alt="poster" width="245" height="347" />
      </div>
      <div className="md:w-[70%] py-2 my-2 text-sm md:pr-32">
        <h1 className="text-3xl">{decodeURIComponent(params.name)}</h1>
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
              {event.date["weekday"]}, {event.date["day"]}, {event.date["time"]}
            </p>
          </div>
        </div>
        <div>
          {event.artist} - {event.description}
        </div>
      </div>
    </div>
  );
};

export default Page;
