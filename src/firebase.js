import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDn3_9r9W_zbxkllY2bNaqzc1kqz3G879M",
  authDomain: "neub-spring23.firebaseapp.com",
  projectId: "neub-spring23",
  storageBucket: "neub-spring23.appspot.com",
  messagingSenderId: "788648309830",
  appId: "1:788648309830:web:c6eb2f079ca3f5b1a88647",
  measurementId: "G-G7VT7SXPRZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export {auth,db,storage}