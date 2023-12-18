
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDI6NMtJPodDSCxwuqZ3VE-9muE3YCQ2Go",
  authDomain: "photofolio-6803a.firebaseapp.com",
  projectId: "photofolio-6803a",
  storageBucket: "photofolio-6803a.appspot.com",
  messagingSenderId: "1071755523367",
  appId: "1:1071755523367:web:0517d84de3c13c8df92502"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
