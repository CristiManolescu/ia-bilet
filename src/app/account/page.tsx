"use client";

import React, { SyntheticEvent, useEffect, useState, useRef } from "react";
import { useSearchParams } from "next/navigation";
import { useDispatch } from "react-redux";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser } from "../redux/userSlice";
import { checkValidData } from "../utils/checkValidData";

const Account = () => {
  const [logInForm, setLogInForm] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const name = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  const searchParams = useSearchParams();
  const action = searchParams.get("action");

  useEffect(() => {
    action === "Cont nou" ? setLogInForm(false) : setLogInForm(true);
  }, [action]);

  const handleSubmit = (
    event: SyntheticEvent<HTMLFormElement, SubmitEvent>
  ) => {
    event.preventDefault();

    const message = checkValidData(
      email.current!.value,
      password.current!.value
    );
    setErrorMessage(message);
    if (errorMessage) return;

    if (!logInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current!.value,
        password.current!.value
      ).then((userCredential) => {
        const user = userCredential.user;
        updateProfile(user, {
          displayName: name.current!.value,
        }).then(() => {
          const { uid, email, displayName } = auth.currentUser!;
          dispatch(
            addUser({
              uid: uid,
              email: email,
              displayName: displayName,
            })
          );
        });
      });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current!.value,
        password.current!.value
      )
        .then((userCredential) => {})
        .catch((error) => {
          setErrorMessage("Adresa de e-mail sau parola introdusa este gresita");
        });
    }
  };

  const handleChangeForm = () => {
    setLogInForm(!logInForm);
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold">
        {" "}
        {logInForm ? "Intră în cont" : "Creează un cont"}
      </h1>
      <form
        onSubmit={handleSubmit}
        className="md:w-[30%] m-auto flex flex-col justify-center items-center gap-y-2"
      >
        {!logInForm && (
          <input
            type="text"
            placeholder="Nume complet"
            className="w-full rounded-md p-2 m-2 border border-black/30"
            ref={name}
          />
        )}
        <input
          type="text"
          placeholder="Adresa de e-mail"
          className="w-full rounded-md p-2 m-2 border border-black/30"
          ref={email}
        />
        <input
          type="password"
          placeholder="Parola"
          className="w-full rounded-md p-2 m-2 border border-black/30"
          ref={password}
        />
        <p className="text-red-500 font-bold text-sm py-2">{errorMessage}</p>
        <button
          type="submit"
          className="w-full rounded-md p-2 m-2 border border-black/30 bg-gray-100 hover:bg-gray-200 dark:text-black"
        >
          {logInForm ? "Conectaza-te" : "Inregistreaza-te"}
        </button>
        <p
          className="text-sm cursor-pointer text-blue-500 hover:underline"
          onClick={handleChangeForm}
        >
          {logInForm
            ? "Nu ai un cont? Înregistrează-te acum!"
            : "Ai deja cont? Conectează-te acum!"}
        </p>
      </form>
    </div>
  );
};

export default Account;
