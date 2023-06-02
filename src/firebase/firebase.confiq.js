// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfat_L1YynyUnaPsMotHkvTp31ChMOiPk",
  authDomain: "bistro-boss-7b70d.firebaseapp.com",
  projectId: "bistro-boss-7b70d",
  storageBucket: "bistro-boss-7b70d.appspot.com",
  messagingSenderId: "729125294772",
  appId: "1:729125294772:web:faec9be60f81c85d63bde1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app();