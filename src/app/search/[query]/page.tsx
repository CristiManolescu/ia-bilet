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
    <div>
      <h1 className="lg:text-3xl font-bold py-4">{`Rezultatele cautarii dupa "${searchQuery}"`}</h1>
      {events.filter(
        (event) =>
          event.title.toLowerCase().search(searchQuery.toLowerCase()) !== -1
      ).length > 0 ? (
        events
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
          ))
      ) : (
        <p className="text-sm">{`Ne pare rau, nu am gasit niciun rezultat pentru cautarea introdusa.`}</p>
      )}
    </div>
  );
};

export default SearchPage;
