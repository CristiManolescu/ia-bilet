"use client";
import React from "react";
import Image from "next/image";
import logo from "public/logo.png";
import { menu } from "../utils/data";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { IoIosCart } from "react-icons/io";
import { useAppSelector } from "../redux/store";
import { onAuthStateChanged } from "firebase/auth"; // actiuni daca userul are sesiune activa
import LoggedUserMenu from "./LoggedUserMenu";

const Header = () => {
  const cart = useAppSelector((store) => store.cart.cartItems);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
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
        <div className="flex items-center gap-4 text-sm">
          <LoggedUserMenu />
          <p>Limba</p>
          <Link href="/cart">
            <div className="relative flex">
              <IoIosCart className="text-2xl" />

              <p className="absolute right-0 p-[1px] text-xs text-white bg-red-600 rounded-full">
                {/* {cart.length !== 0 && cart[0].totalTicketsCount} */}
              </p>
            </div>
          </Link>
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
