import React from "react";
import Image from "next/image";
import logo from "public/logo.png";
import { menu } from "../utils/data";

const Header = () => {
  return (
    <header className="flex flex-col">
      <div className="flex justify-between w-[50%] m-auto items-center py-10">
        <Image className="w-36" src={logo} alt="test" />
        <input
          type="text"
          className="border"
          placeholder="Cauta artist, trupa, locatie"
        ></input>
        <div className="flex gap-4">
          <p>Contul meu</p>
          <p>Limba</p>
        </div>
      </div>
      <div className="bg-gray-100 flex justify-center">
        <ul className="flex flex-wrap gap-10">
          {menu.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
