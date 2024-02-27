// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-a739c.firebaseapp.com",
  projectId: "mern-estate-a739c",
  storageBucket: "mern-estate-a739c.appspot.com",
  messagingSenderId: "256251388046",
  appId: "1:256251388046:web:44d809585146294a86a9df"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);