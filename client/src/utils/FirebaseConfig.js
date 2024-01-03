// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDvd0EderSm5Lsj7prjBJgbQIjerJjliw4",
    authDomain: "whatsapp-clone-a1c05.firebaseapp.com",
    projectId: "whatsapp-clone-a1c05",
    storageBucket: "whatsapp-clone-a1c05.appspot.com",
    messagingSenderId: "86823331412",
    appId: "1:86823331412:web:0a20c04476a01e06126fc1",
    measurementId: "G-TMXTWW313Z"
  };


  const app = initializeApp(firebaseConfig);
  export const firebaseAuth = getAuth(app);