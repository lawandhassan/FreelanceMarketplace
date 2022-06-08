import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAs75xrKaOsDTZwjmvbaryAwsEtdrzGu-s",
    authDomain: "freelancemarketplace-database.firebaseapp.com",
    projectId: "freelancemarketplace-database",
    storageBucket: "freelancemarketplace-database.appspot.com",
    messagingSenderId: "614851547180",
    appId: "1:614851547180:web:6cb84397b9db4fd037c189"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, auth, db }