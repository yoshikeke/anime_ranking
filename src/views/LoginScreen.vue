<template>
  <div class="login-screen">
    <h1>Annict tier maker</h1>
    <div id="firebaseui-auth-container"></div>
    <div id="loader">Loading...</div>
  </div>
</template>

<script>
import 'firebaseui/dist/firebaseui.css';
import { auth, ui, uiConfig, db, doc, getDoc } from "@/firebase/init.js";
import { ref, onMounted } from "vue";
import { useRouter } from 'vue-router';


export default {
  setup() {
    const user = ref(null);
    const router = useRouter();

    onMounted(() => {
      ui.start('#firebaseui-auth-container', uiConfig);

      auth.onAuthStateChanged(async (currentUser) => {
        if (currentUser) {
          user.value = currentUser;
          const userRef = doc(db, "users", currentUser.uid);
          const userDoc = await getDoc(userRef);
          if (!userDoc.exists()) {
            router.push('/register'); //未登録ユーザーは登録画面へ
          } else {
            router.push('/home'); //登録済みユーザーはホーム画面へ
          }   
        }   
      });
    });  
 
    const logout = async () => {
      await auth.signOut();
      user.value = null;
    };  
    return { user, logout };  
  },  
};
</script>

<style scoped>
.login-screen {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
</style>

