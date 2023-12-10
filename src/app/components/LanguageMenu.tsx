import React, { useState } from "react";
import { languages } from "../utils/data";

const LanguageMenu = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const handleClick = () => {
    setShowMenu(!showMenu);
  };

  const handleLanguage = (e: React.FormEvent<HTMLSelectElement>) => {
    const target = e.target as HTMLSelectElement;
    console.log(target.value);
  };

  return (
    <select
      onChange={handleLanguage}
      className="border border-black/70 p-1 rounded-lg shadow-lg bg-white"
    >
      {languages.map((language) => (
        <option key={language.id} value={language.id}>
          {language.name}
        </option>
      ))}
    </select>
  );
};

export default LanguageMenu;
