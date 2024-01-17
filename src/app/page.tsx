"use client";

import React from "react";

import { IoTicket } from "react-icons/io5";
import Link from "next/link";

import useEvents from "./hooks/useEvents";

import { useAppSelector } from "./redux/store";
import MainPageEventCard from "./components/MainPageEventCard";
import ShimmerCardsUI from "./components/ShimmerCardsUI";

const Home = () => {
  useEvents();
  const events = useAppSelector((store) => store.event.allEvents);

  return (
    <main className="flex flex-col">
      <div className="flex items-center">
        <IoTicket className="mr-1" />
        <p className="text-lg font-light main-page-text-color">
          LIDER DE PIAȚĂ ÎN TICKETING. ACUM: {events.length} EVENIMENTE DIN 128
          ORAȘE
        </p>
      </div>
      <div className="flex flex-wrap justify-center">
        {events.length === 0 ? (
          <ShimmerCardsUI />
        ) : (
          events.map((event) => (
            <Link
              key={event.title}
              href={{
                pathname: `/iabilet/${event.title}`,
                query: { id: event.id },
              }}
            >
              <MainPageEventCard image={event.image} title={event.title} />
            </Link>
          ))
        )}{" "}
      </div>
    </main>
  );
};

export default Home;
