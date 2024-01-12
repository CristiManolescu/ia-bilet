"use client";

import React from "react";
import useEvents from "../hooks/useEvents";
import { useAppSelector } from "../redux/store";
import MainPageEventCard from "./MainPageEventCard";
import Link from "next/link";
import { IoTicket } from "react-icons/io5";
import useTheme from "../hooks/useTheme";

const MainPage = () => {
  const { theme, toggleTheme } = useTheme();
  useEvents();
  const events = useAppSelector((store) => store.event.allEvents);
  if (events.length === 0) return null;

  return (
    <section className="flex flex-col">
      <div className="flex items-center">
        <IoTicket className="mr-1" />
        <p className="text-lg font-light text-black/40" onClick={toggleTheme}>
          LIDER DE PIAȚĂ ÎN TICKETING. ACUM: {events.length} EVENIMENTE DIN 128
          ORAȘE
        </p>
      </div>
      <div className="flex flex-wrap justify-center">
        {events.map((event) => (
          <Link
            key={event.title}
            href={{
              pathname: `/iabilet/${event.title}`,
              query: { id: event.id },
            }}
          >
            <MainPageEventCard image={event.image} title={event.title} />
          </Link>
        ))}{" "}
      </div>
    </section>
  );
};

export default MainPage;
