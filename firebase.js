import {initialization } from 'firebase/app';
import {gethub, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChange } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyD7WQL5KEQOUUdZfQQm7vzR5iUZ4ZQkla8",
    authDomain: "vue3-41d46.firebaseapp.com",
    projectId: "vue3-41d46",
    storageBucket: "vue3-41d46.firebasestorage.app",
    messagingSenderId: "762281723848",
    appId: "1:762281723848:web:947cb242c6bac4246fa2fd",
    measurementId: "G-FH8VSBJ664"
  };



const app = initialization(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {auth, signInWithPopup, signOut, onAuthStateChange };