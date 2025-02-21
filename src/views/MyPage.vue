<template>
  
  <div class="mypage">
    <h1>My Page</h1>
    <div v-if="user">
      <p>ユーザーID: {{ user.uid }}</p>
      <p>ユーザー名: {{ user.displayName }}</p>
      <p>メールアドレス: {{ user.email }}</p>
    </div>
    <div v-else>
      <p>ユーザーがサインインしていません。</p>
    </div>
    <v-btn @click="logout" class="logout">Logout</v-btn>
  </div>
</template>

<script>
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { useRouter } from 'vue-router';
import { ref, onMounted } from "vue";

export default {
  name: "MyPage",
  setup() {
    const router = useRouter();
    const user = ref(null);
    const auth = getAuth();

    const logout = () => {
      signOut(auth).then(() => {
        console.log("ログアウト成功");
        router.push('/');
      }).catch((error) => {
        console.error("Logout failed:", error);
      });
    };
    onMounted(() => {
      onAuthStateChanged(auth, (currentUser) => {
        if (currentUser) {
          user.value = currentUser;
        } else {
          user.value = null;
        }
      });
    });

    return { logout, user };
  }
}
</script>

<style scoped>
.mypage {
  display: flex;
  flex-direction: column;
  align-items: center;
  
  height: 100vh;
}
</style>