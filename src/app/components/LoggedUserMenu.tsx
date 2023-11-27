import React, { useState, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import useOutsideClick from "../hooks/useOutsideClick";

import { accMenu } from "../utils/data";
import { useAppSelector } from "../redux/store";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";

const LoggedUserMenu = () => {
  const user = useAppSelector((store) => store.user);
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const ref = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const handleClick = () => {
    setShowMenu(!showMenu);
  };

  const handleSignOut = () => {
    signOut(auth).then(() => {
      router.push("/account?action=Intra+in+cont");
    });
    setShowMenu(!showMenu);
  };

  useOutsideClick(ref, setShowMenu);

  return (
    <div>
      <div onClick={handleClick} className="relative cursor-pointer">
        {user.displayName !== null
          ? `Salut, ${user.displayName}`
          : "Contul meu"}
      </div>
      <div ref={ref}>
        {showMenu && (
          <ul className="absolute border border-black/70 p-1 rounded-lg shadow-lg">
            {user.displayName === null ? (
              accMenu?.notLogged?.map((menu) => (
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
              ))
            ) : (
              <li className="cursor-pointer" onClick={handleSignOut}>
                {accMenu?.logged}
              </li>
            )}
          </ul>
        )}
      </div>
    </div>
  );
};

export default LoggedUserMenu;
