"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import logo from "public/logo.png";
import { menu } from "../utils/data";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { IoIosCart } from "react-icons/io";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";

import { useAppSelector } from "../redux/store";
import { onAuthStateChanged } from "firebase/auth"; // actiuni daca userul are sesiune activa
import LoggedUserMenu from "./LoggedUserMenu";
import LanguageMenu from "./LanguageMenu";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { addUser, removeUser } from "../redux/userSlice";
import { NavMobile } from "./NavMobile";
import useTheme from "../hooks/useTheme";

const Header = () => {
  const [ticketsNo, setTicketsNo] = useState<number>(0);
  const search = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const cart = useAppSelector((store) => store.cart.cartItems);
  const dispatch = useDispatch();

  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
          })
        );
        router.push("/");
      } else {
        dispatch(removeUser());
        router.push("/");
      }
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    checkTicketsNo();
  }, [cart]);

  const checkTicketsNo = () => {
    let tickets = 0;
    if (cart.length > 0) {
      for (let i = 0; i < cart.length; i++) {
        tickets = tickets + cart[i].quantity;
      }
    }
    setTicketsNo(tickets);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (search.current!.value !== "") {
      router.push(`/search/${search.current!.value}`);
    } else {
      // TODO: To implement if search box is empty
    }
  };

  return (
    <header className="flex flex-col header-colors">
      <div className="flex flex-col md:flex-row justify-between w-[60%] m-auto items-center py-10 gap-4">
        <Link href="/">
          <Image className="w-36" src={logo} alt="test" />
        </Link>
        <form className="relative" onSubmit={handleSubmit}>
          <input
            ref={search}
            type="text"
            className="p-2 border w-[400px] text-sm rounded-md search-bar-colors "
            placeholder="Cauta artist, trupa, locatie"
          />
          <button type="submit" className="absolute px-2 py-3 right-2">
            <CiSearch />
          </button>
        </form>
        <div className="flex items-center gap-4 text-sm">
          <LoggedUserMenu />
          <LanguageMenu />
          <Link href="/cart">
            <div className="relative flex">
              <IoIosCart className="text-2xl" />

              {ticketsNo > 0 && (
                <p className="absolute right-0 p-[1px] text-xs text-white bg-red-600 rounded-full">
                  {ticketsNo}
                </p>
              )}
            </div>
          </Link>
          <button className="text-2xl" onClick={toggleTheme}>
            {theme === "light" ? <MdOutlineDarkMode /> : <MdOutlineLightMode />}
          </button>
        </div>
      </div>
      <nav className="flex nav-colors justify-start md:justify-center">
        <NavMobile />
        <ul className="lg:flex flex-wrap gap-10 hidden">
          {menu.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
