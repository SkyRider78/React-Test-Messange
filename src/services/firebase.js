// Import the functions you need from the SDKs you need
import { async } from "@firebase/util";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    getAuth,
} from "firebase/auth";
// import { getDatabase, ref } from "firebase/database";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBtyUjcivuy5F-y24msRuvwzebtsAqzO4Y",
    authDomain: "gb2404-ac330.firebaseapp.com",
    projectId: "gb2404-ac330",
    storageBucket: "gb2404-ac330.appspot.com",
    messagingSenderId: "219265074080",
    appId: "1:219265074080:web:152fe3e7c11258dcdb9ac5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
// export const db = getDatabase(app);

export const singUP = async (email, pass) => {
    await createUserWithEmailAndPassword(auth, email, pass);
};

export const logIn = async (email, pass) => {
    await signInWithEmailAndPassword(auth, email, pass);
};

export const logOut = async () => {
    await signOut(auth);
};

