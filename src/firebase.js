import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
    apiKey: "AIzaSyCrKak_minXmHQa5FDYLqmqKnRPxDtZXzU",
    authDomain: "consult-aa9b7.firebaseapp.com",
    projectId: "consult-aa9b7",
    storageBucket: "consult-aa9b7.appspot.com",
    messagingSenderId: "517395883978",
    appId: "1:517395883978:web:f1b0c6e13045518e07d133"
};

const appf = initializeApp(firebaseConfig);
const auth = getAuth();

const db = getFirestore(appf);



export { auth };
export default db;