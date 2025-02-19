<template>
  <nav>
      <router-link to="/home">ホーム</router-link> | 
      <router-link to="/edit">作成</router-link>|
      <router-link to="/mypage">マイページ</router-link>
  </nav>
  <div>
    <h1>Home</h1>
    <div v-if="user">
      <p>ユーザーID: {{ user.uid }}</p>
      <p>ユーザー名: {{ user.displayName }}</p>
      <p>メールアドレス: {{ user.email }}</p>
    </div>
    <div v-else>
      <p>ユーザーがサインインしていません。</p>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default {
  setup() {
    const user = ref(null);
    const auth = getAuth();

    onMounted(() => {
      onAuthStateChanged(auth, (currentUser) => {
        if (currentUser) {
          user.value = currentUser;
        } else {
          user.value = null;
        }
      });
    });

    return { user };
  }
};
</script>

<style scoped>
</style>
