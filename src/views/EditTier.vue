<template>
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
</template>

<script>
import draggable from "vuedraggable";

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
          { id: 1, content: "item1"},
          { id: 2, content: "item2"},
          { id: 3, content: "item3"},
          { id: 4, content: "item4"},
          { id: 5, content: "item5"},
          { id: 6, content: "item6"},
          { id: 7, content: "item7"},
          { id: 8, content: "item8"},
          { id: 9, content: "item9"},
        ] }
      ]
    }
  }
}
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
</style>