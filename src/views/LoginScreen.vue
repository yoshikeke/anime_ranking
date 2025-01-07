<template>
    <div>
      <h1>this is login.</h1>
      <div id="firebaseui-auth-container"></div>
      <div id="loader">Loading...</div>
    </div>
  </template>
  
  <script>
  import { firebase } from "@/firebase/init.js"; // Firebaseの初期化をインポート
  import * as firebaseui from "firebaseui";
  import "firebaseui/dist/firebaseui.css";
  import { getAuth, onAuthStateChanged } from "firebase/auth";
  import { useRouter } from 'vue-router';
  
  export default {
    name: "LoginScreen",
    mounted() {
      this.createUI();
      this.checkAuthState();
    },
    methods: {
      createUI() {
        const auth = getAuth();
        const ui = new firebaseui.auth.AuthUI(auth);
        ui.start("#firebaseui-auth-container", {
          callbacks: {
            signInSuccessWithAuthResult: (authResult, redirectUrl) => {
              console.log("ログイン成功");
              this.$router.push('/home');
              return false;
            },
            uiShown: () => {
              document.getElementById("loader").style.display = "none";
            },
          },
          signInFlow: "popup",
          signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID
          ],
        });
      },
      checkAuthState() {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
          if (user) {
            console.log("User is logged in:", user);
            this.$router.push('/home');
          } else {
            console.log("User is not logged in");
          }
        });
      }
    }
  };
  </script>
  
  <style scoped>
  </style>