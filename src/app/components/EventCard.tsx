import Image from "next/image";
import React from "react";
import short from "../utils/stringShorter";
import Link from "next/link";

interface EventCardProps {
  image: string;
  title: string;
  address: string[];
  description: string;
  ticketPrice: number;
  date: string;
  id: number;
}

const EventCard = (props: EventCardProps) => {
  const { image, date, title, address, description, ticketPrice, id } = props;
  const fullDate = date.split(" ");
  const day = Number(fullDate[0]) < 10 ? "0" + fullDate[0] : fullDate[0];
  const month = fullDate[2]
    ? fullDate[1].slice(0, 3) + fullDate[2]
    : fullDate[1].slice(0, 3);

  return (
    <div className="flex gap-6 my-4">
      <div className="w-[15%]">
        <Image src={image} alt="poster" width="130" height="180" />
      </div>
      <div className="flex w-[70%]">
        <div className="bg-gray-200 px-5 py-2 flex flex-col items-center mb-auto">
          <div className="font-bold text-2xl text-gray-800">{day}</div>
          <div className="font-normal text-md text-gray-400">{month}</div>
        </div>
        <div className="mx-2">
          <h1 className="text-3xl font-normal">{title}</h1>
          <span className="text-sm font-light text-gray-800">
            <Link className="hover:underline" href={`/location/${address[0]}`}>
              {address[0]}
            </Link>
            {` · `}
            <Link className="hover:underline" href={`/city/${address[2]}`}>
              {address[2]}
            </Link>
          </span>
          <p className="text-sm">{short(description, 150)}</p>
        </div>
      </div>
      <div className="flex flex-col w-[15%]">
        <Link href={`/iabilet/${title}?id=${id}`}>
          <p className="text-white bg-[#006ACA] rounded-md p-2 text-lg font-bold text-center hover:bg-blue-500">{`ia bilet`}</p>
        </Link>
        <span>{`de la ${ticketPrice} lei`}</span>
      </div>
    </div>
  );
};

export default EventCard;
