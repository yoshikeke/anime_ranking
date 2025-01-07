<template>
    <div>
      <h1>this is login.</h1>
      <div id="firebaseui-auth-container"></div>
    </div>
  </template>
  
<script>
    import * as firebaseui from 'firebaseui';
    import 'firebaseui/dist/firebaseui.css';
    import { firebase  } from "@/firebase/init.js";
    import { getAuth , onAuthStateChanged } from "firebase/auth";
    export default {
        name: "LoginScreen",
        mounted(){
            this.createUI();
            this.monitorAuthState();
        },
        methods: {
            
            monitorAuthState(){
                const auth = getAuth();
                onAuthStateChanged(auth, (user) => {
                    if(user){
                        console.log("User is logged in");
                        user.getIdToken(true)
                        .then((token) => {
                            console.log("access token", token);
                            this.sendToRestApi(token);
                        })
                        .catch((error) => {
                            console.log("error", error);
                        });
                        // this.$router.push('/home');
                    }else{
                        console.log("User is logged out");
                    }
                })
            },
            sendToRestApi(token){
                const url = "https://api.annict.com/v1/me";
                console.log("url", url);
                fetch(url, {
                    method: "GET",
                    headers: {
                        access_token: token,
                        filter_usernames: "yoshikeke"
                    }
                })
                .then(response => response.json())  // レスポンスをJSONとして処理
                .then(data => {
                if (data && data.users && data.users.length > 0) {
                    this.user = data.users[0];  // 最初のユーザーを取得
                } else {
                    this.user = null;  // ユーザーが見つからなければnullに設定
                }
                })
                .catch(error => {
                console.error("Error fetching user data:", error);  // エラーハンドリング
                });
            },  
            createUI(){ 
                const ui = new firebaseui.auth.AuthUI(firebase.auth());
                const uiConfig = {
                    callbacks: {
                        signInSuccessWithAuthResult: function(authResult, redirectUrl) {
                        return true;
                        },
                        uiShown: function() {
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