<template>
  <nav>
    <router-link to="/home">ホーム</router-link> | 
    <router-link to="/edit">作成</router-link> |
    <router-link to="/mypage">マイページ</router-link>
  </nav>
  <div class="tier-container">
    <draggable v-for="(tier, index) in tiers" :key="index" v-model="tier.data" group="shared" class="draggable-container">
      <template #header>
        <div class="tier-label">{{ tier.name }}</div>
      </template>
      <template #item="{element}">
        <div :key="element.id" class="Tier">
          <span class="tier-content">{{ element.content }}</span>
        </div>
      </template>
    </draggable>
  </div>
  <div class="anime-list">
    <h2>Anime List</h2>
    <ul>
      <li v-for="anime in animeList" :key="anime.id">
        <img :src="anime.recommended_url" alt="Anime Image" class="anime-image" />
        <p>{{ anime.title }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import { ref, onMounted } from "vue";
import { getAuth } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase/init.js";

export default {
  components: {
    draggable
  },
  data() {
    return {
      tiers: [
        { name: "S", data: [] },
        { name: "A", data: [] },
        { name: "B", data: [] },
        { name: "C", data: [] },
        { name: "D", data: [] },
        { name: "未分類", data: [
          { id: 1, content: "item1" },
          { id: 2, content: "item2" },
          { id: 3, content: "item3" },
          { id: 4, content: "item4" },
          { id: 5, content: "item5" },
          { id: 6, content: "item6" },
          { id: 7, content: "item7" },
          { id: 8, content: "item8" },
          { id: 9, content: "item9" },
        ] }
      ],
      animeList: []
    };
  },
  setup() {
    const animeList = ref([]);
    const fetchAnimeList = async () => {
      const auth = getAuth();
      const currentUser = auth.currentUser;
      if (!currentUser) {
        console.error("ユーザーが認証されていません");
        return;
      }

      const userRef = doc(db, "users", currentUser.uid);
      const userDoc = await getDoc(userRef);
      if (!userDoc.exists()) {
        console.error("ユーザードキュメントが存在しません");
        return;
      }

      const accessToken = userDoc.data().accessToken;
      if (!accessToken) {
        console.error("アクセストークンが存在しません");
        return;
      }

      try {
        const response = await fetch(`https://api.annict.com/v1/me/works?access_token=${accessToken}`);
        const data = await response.json();
        animeList.value = data.works.map(work => ({
          id: work.id,
          title: work.title,
          recommended_url: work.images.facebook.og_image_url
        }));
      } catch (error) {
        console.error("アニメリストの取得に失敗しました: ", error);
      }
    };

    onMounted(fetchAnimeList);

    return { animeList };
  }
};
</script>

<style scoped>
.tier-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.draggable-container {
  display: flex;
  gap: 10px;
  align-items: center;
  background: #f5f5f5;
  padding: 10px;
  border-radius: 4px;
}

.tier-label {
  background: #333;
  color: white;
  padding: 8px 16px;
  border-radius: 4px;
  font-weight: bold;
  min-width: 40px;
  text-align: center;
}

.Tier {
  cursor: pointer;
  padding: 10px;
  border: solid #ddd 1px;
  width: 50px;
  height: 50px;
  background: white;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.tier-content {
  font-size: 14px;
  color: black;
  text-align: center;
  word-break: break-all;
}

.anime-list {
  margin-top: 20px;
}

.anime-list ul {
  list-style-type: none;
  padding: 0;
}

.anime-list li {
  padding: 5px 0;
  display: flex;
  align-items: center;
}

.anime-image {
  width: 50px;
  height: 50px;
  margin-right: 10px;
}
</style>