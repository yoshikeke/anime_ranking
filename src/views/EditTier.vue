<template>
  <div class="tier-container">
    <draggable v-model="data1" group="shared" class="draggable-container">
      <template #header>
        <div class="tier-label">S</div>
      </template>
      <template #item="{element}">
        <div :key="element.id" class="Tier">
          <span class="tier-content">{{ element.content }}</span>
        </div>
      </template>
    </draggable>
    
    <draggable v-model="data2" group="shared" class="draggable-container">
      <template #header>
        <div class="tier-label">A</div>
      </template>
      <template #item="{element}">
        <div :key="element.id" class="Tier">
          <span class="tier-content">{{ element.content }}</span>
        </div>
      </template>
    </draggable>
    <draggable v-model="data3" group="shared" class="draggable-container">
      <template #header>
        <div class="tier-label">B</div>
      </template>
      <template #item="{element}">
        <div :key="element.id" class="Tier">
          <span class="tier-content">{{ element.content }}</span>
        </div>
      </template>
    </draggable>
    <draggable v-model="data4" group="shared" class="draggable-container">
      <template #header>
        <div class="tier-label">C</div>
      </template>
      <template #item="{element}">
        <div :key="element.id" class="Tier">
          <span class="tier-content">{{ element.content }}</span>
        </div>
      </template>
    </draggable>
    <draggable v-model="data5" group="shared" class="draggable-container">
      <template #header>
        <div class="tier-label">D</div>
      </template>
      <template #item="{element}">
        <div :key="element.id" class="Tier">
          <span class="tier-content">{{ element.content }}</span>
        </div>
      </template>
    </draggable>
    <draggable v-model="allData" group="shared" class="draggable-container">
      <template #header>
        <div class="tier-label">未分類</div>
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
      data1: [],
      data2: [],
      data3: [],
      data4: [],
      data5: [],
      data6: [],
      allData: [
        {id: 1, content: "アイテム1"},
        {id: 2, content: "アイテム2"},
        {id: 3, content: "アイテム3"},
        {id: 4, content: "アイテム4"},
        {id: 5, content: "アイテム5"},
        {id: 6, content: "アイテム6"},
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
  text-align: center;
  word-break: break-all;
}
</style>