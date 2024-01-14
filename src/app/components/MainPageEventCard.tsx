import React from "react";
import Image from "next/image";
import short from "../utils/stringShorter";

interface ExportCardProps {
  image: string;
  title: string;
}

const MainPageEventCard = (props: ExportCardProps) => {
  const { image, title } = props;
  const shortTitle = short(title, 30);

  return (
    <div className="py-4 mr-4">
      <Image
        src={image}
        alt={title}
        width="145"
        height="200"
        className="hover:scale-105 rounded-md"
      />
      <h1 className="w-[145px] font-bold main-page-text-color">{shortTitle}</h1>
    </div>
  );
};

export default MainPageEventCard;
