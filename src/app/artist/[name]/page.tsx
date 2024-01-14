"use client";
import React from "react";
import Image from "next/image";
import { useAppSelector } from "@/app/redux/store";
import useEvents from "@/app/hooks/useEvents";
import EventCard from "@/app/components/EventCard";

interface ArtistPageProps {
  params: { name: string };
}

const ArtistPage = ({ params }: ArtistPageProps) => {
  const artistName = decodeURIComponent(params.name);
  useEvents();
  const events = useAppSelector((store) => store.event.allEvents);
  if (events.length === 0) return null;

  return (
    <div>
      <div className="relative">
        <Image
          className="w-full"
          src="https://static.iabilet.ro/img/site/venue-bg-sample-1.jpg"
          alt="header"
          width="970"
          height="300"
        />
        <div className="absolute left-2 bottom-2">
          <h2 className="secondary-header">{`Bilete`}</h2>
          <h1 className="main-header">{artistName}</h1>
        </div>
      </div>
      <div className="px-5">
        <span className="py-5 text-sm">{`Poti cumpara bilete la ${artistName} direct de aici!`}</span>
        {events
          .filter((event) => event.artist === artistName)
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

export default ArtistPage;
