// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGNUT5IuJ9jjOUCU4N_WKN_lgJe8sjvng",
  authDomain: "flagman-32f58.firebaseapp.com",
  projectId: "flagman-32f58",
  storageBucket: "flagman-32f58.firebasestorage.app",
  messagingSenderId: "33496201273",
  appId: "1:33496201273:web:28842fca835033555635e8",
  measurementId: "G-SM9P7PGTTH"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
const auth = getAuth(app)


export {auth}