"use client";

import React from "react";
import useEvents from "../hooks/useEvents";
import { useAppSelector } from "../redux/store";
import EventCard from "./EventCard";
import Link from "next/link";

const MainPage = () => {
  useEvents();
  const events = useAppSelector((store) => store.event.allEvents);
  if (events.length === 0) return null;

  return (
    <section className="flex flex-col w-[50%] m-auto py-4">
      <div>
        LIDER DE PIAȚĂ ÎN TICKETING. ACUM: {events.length} EVENIMENTE DIN {}{" "}
        ORAȘE
      </div>
      <div className="flex flex-wrap">
        {events.map((event) => (
          <Link
            key={event.title}
            href={{
              pathname: `/iabilet/${event.title}`,
              query: { id: event.id },
            }}
          >
            <EventCard image={event.image} title={event.title} />
          </Link>
        ))}{" "}
      </div>
    </section>
  );
};

export default MainPage;
