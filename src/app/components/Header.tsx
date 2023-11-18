"use client";
import React from "react";
import Image from "next/image";
import logo from "public/logo.png";
import { menu } from "../utils/data";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";

const Header = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("pl");
  };

  return (
    <header className="flex flex-col bg-white">
      <div className="flex flex-col md:flex-row justify-between w-[60%] m-auto items-center py-10">
        <Link href="/">
          <Image className="w-36" src={logo} alt="test" />
        </Link>
        <form className="relative" onSubmit={handleSubmit}>
          <input
            type="text"
            className="p-2 border border-black/20 w-[400px] text-sm rounded-md"
            placeholder="Cauta artist, trupa, locatie"
          />
          <button type="submit" className="absolute px-2 py-3 right-2">
            <CiSearch />
          </button>
        </form>
        <div className="flex gap-4">
          <p>Contul meu</p>
          <p>Limba</p>
        </div>
      </div>
      <div className="flex justify-center bg-gray-100">
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
