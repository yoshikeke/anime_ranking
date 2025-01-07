<template>
    <div>
      <h1>this is login.</h1>
      <div id="firebaseui-auth-container"></div>
      <div id="loader">Loading...</div>
    </div>
  </template>
  
<script>
    import * as firebaseui from 'firebaseui';
    import 'firebaseui/dist/firebaseui.css';
    import { firebase  } from "@/firebase/init.js"; 
    export default {
        name: "LoginScreen",
        mounted(){
            this.createUI();
        },
        methods: {
            
            createUI(){ 
                const ui = new firebaseui.auth.AuthUI(firebase.auth());
                const uiConfig = {
                    callbacks: {
                        signInSuccessWithAuthResult: function(authResult, redirectUrl) {
                        // User successfully signed in.
                        // Return type determines whether we continue the redirect automatically
                        // or whether we leave that to developer to handle.
                        return true;
                        },
                        uiShown: function() {
                        // The widget is rendered.
                        // Hide the loader.
                        document.getElementById('loader').style.display = 'none';
                        }
                    },
                    // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
                    signInFlow: 'popup',
                    signInSuccessUrl: '/home',
                    signInOptions: [
                        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                    ],

                }
                ui.start('#firebaseui-auth-container', uiConfig);

            }   
            
        }
    };
    
</script>
  
  <style scoped>
  </style>