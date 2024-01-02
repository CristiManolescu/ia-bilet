import React from "react";
import Markdown from "react-markdown";

const Footer = () => {
  const about = `**Despre acest website:** Creat cu Next.js 14 & React, Tailwind CSS, Redux
    Toolkit, Firebase.`;
  return (
    <footer className="flex justify-center items-center py-2">
      <Markdown className="text-xs">{about}</Markdown>
    </footer>
  );
};

export default Footer;
