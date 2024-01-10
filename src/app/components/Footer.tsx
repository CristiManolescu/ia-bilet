import React from "react";
import Markdown from "react-markdown";

const Footer = () => {
  const about = `**Despre acest website:** Creat cu Next.js 14 & React, Tailwind CSS, Redux
    Toolkit, Firebase, Framer Motion.`;
  return (
    <footer className="py-2 text-center">
      <Markdown className="text-xs">{about}</Markdown>
    </footer>
  );
};

export default Footer;
