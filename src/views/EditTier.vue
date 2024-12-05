<template>
  <draggable v-model="data1" group="shared" class="draggable-container" >
    <template #item="{element}">
      <div :key="element.id" class="Tier" >
        {{ element.content }}
      </div>
    </template>
  </draggable>
  <draggable v-model="data2" group="shared" class="draggable-container">
    <template #item="{element}">
      <div :key="element.id" class="Tier" >
        {{ element.content }}
      </div>
    </template>
  </draggable>
</template>

<script>
  import draggable from "vuedraggable";
  export default{
    components: {
      draggable
    },
    data() {
      return {
        data1: [
          {id: 1,content: "test1"},
          {id: 2,content: "test2"},
          {id: 3,content: "test3"},
        ],
        data2: [
          {id: 1,content: "test4"},
          {id: 2,content: "test5"},
          {id: 3,content: "test6"},
        ]
      }
    }
  }
</script>

<style scoped>
grid-container {
  display: grid;
  grid-template-columns: repeat(3,1fr);
}

.Tier {
  cursor: pointer;
  padding: 10px;
  border: solid #ddd 1px;
  width: 50px;
}

.draggable-container{
  display:flex;
  gap:10px;
}

</style>