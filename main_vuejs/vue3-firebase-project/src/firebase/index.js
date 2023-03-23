import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBS8rQ0ZIdgt6SY5eOIoIEGm7r5Ufc3Z-Q",
    authDomain: "vue3-firebase-auth-4b952.firebaseapp.com",
    projectId: "vue3-firebase-auth-4b952",
    storageBucket: "vue3-firebase-auth-4b952.appspot.com",
    messagingSenderId: "27985959314",
    appId: "1:27985959314:web:4f9ff4730cbe1c4c8d894b"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export{
    db, auth
}