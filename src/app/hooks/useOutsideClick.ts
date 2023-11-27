import React, { useEffect } from "react";

const useOutsideClick = (
  ref: React.RefObject<HTMLInputElement>,
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>
) => {
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        setShowMenu(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, setShowMenu]);
};

export default useOutsideClick;
