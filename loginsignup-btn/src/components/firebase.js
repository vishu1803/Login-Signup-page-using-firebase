// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBI1Z3djiXceR43i2jh7F2WzHMuSenwHVA",
  authDomain: "loginsignupbtn.firebaseapp.com",
  projectId: "loginsignupbtn",
  storageBucket: "loginsignupbtn.appspot.com",
  messagingSenderId: "362877880248",
  appId: "1:362877880248:web:856a860f4cf3a94764314d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export const db=getFirestore(app);
export default app;