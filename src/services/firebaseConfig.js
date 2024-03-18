// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwHVQdJ8HIvibj4ZzX55pJzMbT4ZsR34k",
  authDomain: "pi-backend-5s.firebaseapp.com",
  projectId: "pi-backend-5s",
  storageBucket: "pi-backend-5s.appspot.com",
  messagingSenderId: "454597756874",
  appId: "1:454597756874:web:720ff682200c2b42c8b133"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);