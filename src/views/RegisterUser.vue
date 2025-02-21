<template>
  <div class="register-user">
    <h1>Register User</h1>
    <div class="input-container">
        <input v-model="accessToken" placeholder="アクセストークン" required />
    </div>
    <v-btn class="register-button" @click="registerUser">登録</v-btn>
    <div class="link-container">
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
      if (!accessToken.value) {
        alert("項目を入力してください");
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
.register-user {
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.register-user h1 {
  margin-bottom: 20px;
}

.input-container {
  margin-bottom: 20px;
  width: 100%;
  max-width: 400px;
}

.register-button {
  margin-bottom: 20px;
}

.link-container {
  margin-top: 20px;
}

input {
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

v-btn {
  padding: 10px 20px;
  font-size: 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

v-btn:hover {
  background-color: #0056b3;
}
</style>