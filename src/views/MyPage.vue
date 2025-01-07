<template>
  <div>
    <h1>My Page</h1>
    <button @click="logout">Logout</button>
  </div>
</template>

<script>
import { getAuth, signOut } from "firebase/auth";
import { useRouter } from 'vue-router';

export default {
  name: "MyPage",
  setup() {
    const router = useRouter();
    const auth = getAuth();

    const logout = () => {
      signOut(auth).then(() => {
        console.log("ログアウト成功");
        router.push('/');
      }).catch((error) => {
        console.error("Logout failed:", error);
      });
    };

    return { logout };
  }
}
</script>

<style scoped>
</style>