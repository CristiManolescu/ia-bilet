"use client";
import EventCard from "@/app/components/EventCard";
import useEvents from "@/app/hooks/useEvents";
import { useAppSelector } from "@/app/redux/store";
import React from "react";

interface CityPageProps {
  params: { name: string };
}

const CityPage = ({ params }: CityPageProps) => {
  const cityName = decodeURIComponent(params.name);
  useEvents();
  const events = useAppSelector((store) => store.event.allEvents);
  if (events.length === 0) return null;

  return (
    <div>
      <div>
        <span className="main-header !text-black">{`Bilete la concerte si evenimente in ${cityName}`}</span>
        {events
          .filter((event) => event.address[2] === cityName)
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
    </div>
  );
};

export default CityPage;
