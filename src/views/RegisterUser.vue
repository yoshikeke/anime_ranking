<template>
  <div>
    <h1>Register User</h1>
    <div>
        <input v-model="username" placeholder="ユーザー名" required />
        <input v-model="accessToken" placeholder="アクセストークン" required />
        <button @click="registerUser">Register</button>
    </div>
    <div>
        <a href="https://annict.com/settings/apps" target="_blank">アクセストークンの取得</a>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { auth, db } from "@/firebase/init.js";
import { doc, setDoc } from "firebase/firestore";

export default {
  setup() {
    const username = ref("");
    const accessToken = ref("");
    const router = useRouter();

    const registerUser = async () => {
      if (!username.value || !accessToken.value) {
        alert("すべての項目を入力してください");
        return;
      }

      const currentUser = auth.currentUser;
      if (!currentUser) {
        alert("ユーザーが認証されていません");
        return;
      }

      try {
        const userRef = doc(db, "users", currentUser.uid);
        await setDoc(userRef, {
          uid: currentUser.uid,
          username: username.value,
          email: currentUser.email,
          accessToken: accessToken.value,
        });
        console.log("ユーザーが登録されました");
        router.push("/home");
      } catch (e) {
        console.error("ユーザーの登録に失敗しました: ", e);
      }
    };

    return {
      username,
      accessToken,
      registerUser,
    };
  },
};
</script>

<style scoped>
</style>