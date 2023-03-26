import firebase from 'firebase/app';
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyAMjcvmuOn6Ga6-HOlYB9memIqHHuu3BsA",
    authDomain: "flexmypf.firebaseapp.com",
    projectId: "flexmypf",
    storageBucket: "flexmypf.appspot.com",
    messagingSenderId: "96503920839",
    appId: "1:96503920839:web:5816437dbc5457d8a766e2",
    measurementId: "G-LRH59JPVJG"
  };

  export const firebaseapp = initializeApp(firebaseConfig)
  const db = getFirestore(firebase)
  
  export default db;