import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";

import useOutsideClick from "../hooks/useOutsideClick";

import { accMenu } from "../utils/data";

const LoggedUserMenu = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const ref = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    setShowMenu(!showMenu);
  };

  useOutsideClick(ref, setShowMenu);

  return (
    <div>
      <div onClick={handleClick} className="relative cursor-pointer">
        Contul meu
      </div>
      <div ref={ref}>
        {showMenu && (
          <ul className="absolute border border-black/70 p-1 rounded-lg shadow-lg">
            {accMenu?.notLogged?.map((menu) => (
              <Link
                key={menu}
                href={{
                  pathname: "account",
                  query: { action: menu },
                }}
                onClick={handleClick}
              >
                <li className=" hover:bg-gray-100">{menu}</li>
              </Link>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default LoggedUserMenu;
