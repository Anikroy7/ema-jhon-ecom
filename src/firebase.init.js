// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB2oEejPbXm0-tV842wYsmtwNpHJPDhTgw",
    authDomain: "ema-jhon-ecom-23e49.firebaseapp.com",
    projectId: "ema-jhon-ecom-23e49",
    storageBucket: "ema-jhon-ecom-23e49.appspot.com",
    messagingSenderId: "734305844830",
    appId: "1:734305844830:web:2ce02ee3224935ef687ecf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;