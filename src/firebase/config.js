import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



const config = {
  apiKey: "AIzaSyC0fOzFPCM0GZbius_EB3gTBw7mnbKi3r8",
  authDomain: "goldeneducation-55fba.firebaseapp.com",
  projectId: "goldeneducation-55fba",
  storageBucket: "goldeneducation-55fba.appspot.com",
  messagingSenderId: "42474840049",
  appId: "1:42474840049:web:e91924a9567b7225ec6e50",
  measurementId: "G-ZKNL3PH0WC",
};

export const App = initializeApp(config);
export const auth = getAuth();
export const db = getFirestore(App);

// export const analytics = getAnalytics(App);
