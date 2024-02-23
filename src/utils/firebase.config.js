import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNT16cV6vU1a_ne6NsVjOB6HQSdcBZiBU",
  authDomain: "redux-kanban.firebaseapp.com",
  projectId: "redux-kanban",
  storageBucket: "redux-kanban.appspot.com",
  messagingSenderId: "275416404331",
  appId: "1:275416404331:web:3319736c6d136b03523c2e",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
