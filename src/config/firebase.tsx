import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDKBDHLU5ce24RBaqoYQkiv2iF5vSh0LVw",
    authDomain: "playshop-a9e8f.firebaseapp.com",
    databaseURL: "https://playshop-a9e8f-default-rtdb.firebaseio.com",
    projectId: "playshop-a9e8f",
    storageBucket: "playshop-a9e8f.appspot.com",
    messagingSenderId: "913614107784",
    appId: "1:913614107784:web:1aed78e06a905a1ceddb3d",
    measurementId: "G-9BLW93SSRZ"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)



