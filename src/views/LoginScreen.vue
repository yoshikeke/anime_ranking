<template>
  <div>
    <h1>firebase UI login</h1>
    <div id="firebaseui-auth-container"></div>
    <div id="loader">Loading...</div>
  </div>
</template>

<script>
import 'firebaseui/dist/firebaseui.css';
import { auth, ui, uiConfig } from "@/firebase/init.js";
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
            router.push('/home');
          } else {
            router.push('/resister');
          }   router.push('/about');
        }   
      });
    });  
 
    const logout = async () => {
      await auth.signOut();
      user.value = null;
    };  
    return { user, logout };  return {};
  },  
};
</script>

