// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATDEIsPI6C7BzAFkRBvRaiJgrgra1julE",
  authDomain: "react-1f64c.firebaseapp.com",
  databaseURL: "https://react-1f64c-default-rtdb.firebaseio.com",
  projectId: "react-1f64c",
  storageBucket: "react-1f64c.appspot.com",
  messagingSenderId: "627332414417",
  appId: "1:627332414417:web:8f6ba41fccc26a4b833ef0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//Initialize firebase authentication
export const auth = getAuth(app);
export const db = getFirestore(app);
