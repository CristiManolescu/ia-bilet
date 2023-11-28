// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7Io3IDT_0L_3tsHwcWvtN2mjRsMcdX0Y",
  authDomain: "ia-bilet.firebaseapp.com",
  projectId: "ia-bilet",
  storageBucket: "ia-bilet.appspot.com",
  messagingSenderId: "393727878781",
  appId: "1:393727878781:web:8246cea4d200919a727314",
  measurementId: "G-CE0KC06RXH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth();
