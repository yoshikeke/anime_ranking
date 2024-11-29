// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD09c93oPONSpiKTLwzQdKr8sJnx6QTIKU",
  authDomain: "animetier-54ccf.firebaseapp.com",
  projectId: "animetier-54ccf",
  storageBucket: "animetier-54ccf.firebasestorage.app",
  messagingSenderId: "573251797578",
  appId: "1:573251797578:web:1385b4fbd75452fb289cb3",
  measurementId: "G-1NSGT0S0Q8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
// Initialize Authentication
const auth = getAuth()

export default { analytics, db, auth };