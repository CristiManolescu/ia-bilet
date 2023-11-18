import React from "react";
import Image from "next/image";
import short from "../utils/shortTitle";

interface ExportCardProps {
  image: string;
  title: string;
}

const EventCard = (props: ExportCardProps) => {
  const { image, title } = props;
  const shortTitle = short(title);

  return (
    <div className="py-4 mr-4">
      <Image
        src={image}
        alt={title}
        width="145"
        height="200"
        className="transform hover:scale-105"
      />
      <h1 className="w-[145px] font-bold text-gray-700">{shortTitle}</h1>
    </div>
  );
};

export default EventCard;
