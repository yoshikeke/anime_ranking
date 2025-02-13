// Import the functions you need from the SDKs you need
import 'firebaseui/dist/firebaseui.css';
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import * as firebaseui from "firebaseui";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD09c93oPONSpiKTLwzQdKr8sJnx6QTIKU",
  authDomain: "animetier-54ccf.firebaseapp.com",
  projectId: "animetier-54ccf",
  storageBucket: "animetier-54ccf.firebasestorage.app",
  messagingSenderId: "573251797578",
  appId: "1:573251797578:web:1385b4fbd75452fb289cb3",
  measurementId: "G-1NSGT0S0Q8"
};

const app = firebase.initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

var uiConfig = {
  callbacks: {
    signInSuccessWithAuthResult: function (authResult, redirectUrl) {
      return false;
    },
    uiShown: function () {
      document.getElementById('loader').style.display = 'none';
    }
  },
  signInFlow: 'popup',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  ],
  tosUrl: '<your-tos-url>',
  privacyPolicyUrl: '<your-privacy-policy-url>'
};

var ui = new firebaseui.auth.AuthUI(auth);

export { app, firebase, auth, db, ui, uiConfig, firebaseui };