import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDKBDHLU5ce24RBaqoYQkiv2iF5vSh0LVw",
    authDomain: "playshop-a9e8f.firebaseapp.com",
    projectId: "playshop-a9e8f",
    storageBucket: "playshop-a9e8f.appspot.com",
    messagingSenderId: "913614107784",
    appId: "1:913614107784:web:1aed78e06a905a1ceddb3d",
    measurementId: "G-9BLW93SSRZ"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const dataBase = getFirestore(app);
