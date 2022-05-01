// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDx-URPvCBeahSzYisIGAM3fqCAh_bOeuI",
  authDomain: "warehouse-5d852.firebaseapp.com",
  projectId: "warehouse-5d852",
  storageBucket: "warehouse-5d852.appspot.com",
  messagingSenderId: "77448974763",
  appId: "1:77448974763:web:c8b059742adf0e32b842ee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export default app; 