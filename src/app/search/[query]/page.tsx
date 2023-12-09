"use client";

import useEvents from "@/app/hooks/useEvents";
import { useAppSelector } from "@/app/redux/store";
import React from "react";
import EventCard from "@/app/components/EventCard";

interface SearchPageProps {
  params: { query: string };
}

const SearchPage = ({ params }: SearchPageProps) => {
  const searchQuery = decodeURIComponent(params.query);
  useEvents();
  const events = useAppSelector((store) => store.event.allEvents);
  if (events.length === 0) return null;

  return (
    <div className="page-template py-4 px-5">
      <h1 className="text-3xl font-bold py-4">{`Rezultatele cautarii dupa "${searchQuery}"`}</h1>
      {events
        .filter(
          (event) =>
            event.title.toLowerCase().search(searchQuery.toLowerCase()) !== -1
        )
        .map((event) => (
          <EventCard
            key={event.id}
            image={event.image}
            title={event.title}
            address={event.address}
            description={event.description}
            ticketPrice={event.tickets[0].price}
            date={event.date.day}
            id={event.id}
          />
        ))}
    </div>
  );
};

export default SearchPage;
