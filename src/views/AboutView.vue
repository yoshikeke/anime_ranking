<!-- About.vue -->
<template>
    <div>
      <h1>アバウトページ</h1>
      <p>このアプリについて。</p>
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