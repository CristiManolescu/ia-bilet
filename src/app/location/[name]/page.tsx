"use client";
import EventCard from "@/app/components/EventCard";
import LocationCard from "@/app/components/LocationCard";
import useEvents from "@/app/hooks/useEvents";
import useLocations from "@/app/hooks/useLocations";
import { useAppSelector } from "@/app/redux/store";
import Image from "next/image";
import React from "react";

interface LocationPageProps {
  params: { name: string };
}

const LocationPage = ({ params }: LocationPageProps) => {
  const locationName = decodeURIComponent(params.name);
  useEvents();
  useLocations();
  const events = useAppSelector((store) => store.event.allEvents);
  const locations = useAppSelector((store) => store.location.allLocations);
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
          <h1 className="main-header">{locationName}</h1>
        </div>
      </div>
      <div className="flex">
        <div className="px-5">
          <span className="py-5 text-sm">{`Poți cumpăra bilete la ${locationName} direct de aici!`}</span>
          {events
            .filter((event) => event.address[0] === locationName)
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
        <div className="w-[40%] hidden lg:block">
          {locations
            .filter((location) => location.name === locationName)
            .map((location) => (
              <LocationCard
                key={location.name}
                name={location.name}
                address={location.address}
                city={location.city}
                phone={location.phone}
                lat={location.lat}
                long={location.long}
                link={location.link}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default LocationPage;
