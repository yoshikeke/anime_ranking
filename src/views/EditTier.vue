<template>
  
  <div class="tier-container">
    <draggable v-for="(tier, index) in tiers" :key="index" v-model="tier.data" group="shared" class="draggable-container">
      <template #header>
        <div class="tier-label">{{ tier.name }}</div>
      </template>
      <template #item="{element}">
        <div :key="element.id" class="Tier">
          <img :src="element.image" alt="Anime Image" class="tier-image" />
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
  setup() {
    const animeList = ref([]);
    const tiers = ref([
      { name: "S", data: [] },
      { name: "A", data: [] },
      { name: "B", data: [] },
      { name: "C", data: [] },
      { name: "D", data: [] },
      { name: "未分類", data: [] }
    ]);

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

        // 未分類のティアにアニメを追加
        const unclassifiedTier = tiers.value.find(tier => tier.name === "未分類");
        if (unclassifiedTier) {
          unclassifiedTier.data = animeList.value.map(anime => ({
            id: anime.id,
            image: anime.recommended_url
          }));
        }
      } catch (error) {
        console.error("アニメリストの取得に失敗しました: ", error);
      }
    };

    onMounted(fetchAnimeList);

    return { animeList, tiers };
  }
};
</script>

<style scoped>
.tier-container {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.draggable-container {
  display: flex;
  gap: 8px;
  align-items: center;
  background: #f5f5f5;
  padding: 5px;
  border-radius: 4px;
  flex-wrap: wrap;
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
  padding: 0px;
  border: solid #ddd 1px;
  width: 80px;
  height: 40px;
  background: white;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.tier-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
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
  width: 75px;
  height: 50px;
  margin-right: 10px;
}
@media (min-width: 600px) {
  .Tier {
    width: 120px;
    height: 60px;
  }
  .anime-image {
    width: 100px;
    height: 75px;
  }
}
@media (min-width: 900px) {
  .Tier {
    width: 160px;
    height: 80px;
  }
  .anime-image {
    width: 125px;
    height: 100px;
  }
}
</style>