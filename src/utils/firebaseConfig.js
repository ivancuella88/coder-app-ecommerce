// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBWsbdwohtrC_6A0aQAiOTQCZCL9LPEXdM",
    authDomain: "musiccom-e2f1f.firebaseapp.com",
    projectId: "musiccom-e2f1f",
    storageBucket: "musiccom-e2f1f.appspot.com",
    messagingSenderId: "633976961465",
    appId: "1:633976961465:web:85a81ee895a0fe52029e68",
    measurementId: "G-P90CSB71T3"
};

// Initialize Firebase
const app   = initializeApp(firebaseConfig);
const db    = getFirestore(app);

export default db