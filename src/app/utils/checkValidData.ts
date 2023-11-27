export const checkValidData = (email: string, password: string) => {
  const validEmail =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (!email.match(validEmail)) return "Adresa de e-mail invalida";

  if (password.length < 8) {
    return "Parola trebuie sa contina cel putin 8 caractere";
  } else if (password.search(/[a-z]/) < 0) {
    return "Parola trebuie sa contina cel putin o litera mica";
  } else if (password.search(/[A-Z]/) < 0) {
    return "Parola trebuie sa contina cel putin o litera mare";
  } else if (password.search(/[0-9]/) < 0) {
    return "Parola trebuie sa contina cel putin un numar";
  }

  return null;
};
