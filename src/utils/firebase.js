import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBwrX21xuWVzW0JQbSjKW3rMtW6wFfjU3U",
    authDomain: "fir-chatapp-a4ec8.firebaseapp.com",
    projectId: "fir-chatapp-a4ec8",
    storageBucket: "fir-chatapp-a4ec8.appspot.com",
    messagingSenderId: "172683277732",
    appId: "1:172683277732:web:79bcf5bed0f27ef3277d31"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  export const db=getFirestore(app);