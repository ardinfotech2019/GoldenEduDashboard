import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const config = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: "42474840049",
  appId: import.meta.env.VITE_APP_ID,
  measurementId: "G-ZKNL3PH0WC",
};

export const App = initializeApp(config);
export const auth = getAuth();
export const db = getFirestore(App);

// export const analytics = getAnalytics(App);
