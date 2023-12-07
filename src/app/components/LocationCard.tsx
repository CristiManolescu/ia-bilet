import Image from "next/image";
import Link from "next/link";
import React from "react";

interface LocationCardProps {
  name: string;
  address: string;
  city: string;
  phone: string;
  lat: string;
  long: string;
  link: string;
}

const LocationCard = ({
  name,
  address,
  city,
  phone,
  lat,
  long,
  link,
}: LocationCardProps) => {
  return (
    <div className="text-sm bg-gray-100 mb-auto m-3">
      <Link href={link}>
        <Image
          alt="google-maps"
          src={`https://maps.googleapis.com/maps/api/staticmap?center=${lat},${long}&zoom=14&size=235x235&maptype=roadmap|44.439080900000000,26.095062099999950&key=AIzaSyC_q2H2NzHMBxuCMcoewpTl208pUUzNZQQ`}
          width="235"
          height="235"
        ></Image>
      </Link>
      <div className="mb-3 p-2">
        <h1 className="font-bold">{name}</h1>
        <p>{address}</p>
        <p>{city}</p>
      </div>
      <div className="p-2">
        <h1 className="font-bold">{`Telefon`}</h1>
        <p>{phone}</p>
      </div>
    </div>
  );
};

export default LocationCard;
