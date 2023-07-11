import { getAuth } from 'firebase/auth';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "@firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyBEHpjG9f1t7NeMUeg62Zs9J7j1m7F7yA4",
    authDomain: "selo-users-data.firebaseapp.com",
    projectId: "selo-users-data",
    storageBucket: "selo-users-data.appspot.com",
    messagingSenderId: "291626554055",
    appId: "1:291626554055:web:6a6faa7ed0c8918c6d24e2",
    measurementId: "G-K0R6R9M8GC",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const db = getFirestore(app)
