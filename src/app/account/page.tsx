"use client";

import React, { SyntheticEvent, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

const Account = () => {
  const [logInForm, setLogInForm] = useState<boolean>(true);
  const searchParams = useSearchParams();
  const action = searchParams.get("action");

  const handleSubmit = (
    event: SyntheticEvent<HTMLFormElement, SubmitEvent>
  ) => {
    event.preventDefault();
  };

  const handleChangeForm = () => {
    setLogInForm(!logInForm);
  };

  useEffect(() => {
    action === "Cont nou" ? setLogInForm(false) : setLogInForm(true);
  }, [action]);

  return (
    <div className="flex flex-col justify-center items-center bg-white w-[60%] m-auto rounded-b-lg shadow-lg pt-4">
      <h1 className="text-2xl font-bold">
        {" "}
        {logInForm ? "Logheaza-te" : "Inregistreaza-te"}
      </h1>
      <form
        onSubmit={handleSubmit}
        className="w-[30%] m-auto flex flex-col justify-center items-center gap-y-2"
      >
        {!logInForm && (
          <input
            type="text"
            placeholder="Nume complet"
            className="w-full rounded-md p-2 m-2 border border-black/50"
          />
        )}
        <input
          type="text"
          placeholder="Adresa de e-mail"
          className="w-full rounded-md p-2 m-2 border border-black/50"
        />
        <input
          type="password"
          placeholder="Parola"
          className="w-full rounded-md p-2 m-2 border border-black/50"
        />
        <button
          type="submit"
          className="w-full rounded-md p-2 m-2 border border-black/50 bg-gray-100 hover:bg-gray-200"
        >
          {logInForm ? "Conectaza-te" : "Inregistreaza-te"}
        </button>
        <p className="text-sm cursor-pointer" onClick={handleChangeForm}>
          {logInForm
            ? "Nu ai un cont? Inregistreaza-te acum!"
            : "Ai deja cont? Conecteaza-te acum!"}
        </p>
      </form>
    </div>
  );
};

export default Account;
