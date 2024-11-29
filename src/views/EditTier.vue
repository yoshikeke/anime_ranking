<template>
    <div class="row">
      <div class="col-8">
        <h3>Tier Maker</h3>
        <!-- 外側のドラッグ可能なリスト -->
        <draggable v-model="rows" class="rows" tag="div">
          <template #item="{ element }">
            <v-flex
              :key="element.index"
              class="row-container"
              style="margin-bottom: 16px; border: 1px solid #ccc; padding: 16px;"
            >
              <draggable
                v-model="element.items"
                :group="{ name: 'shared-items' }"
                class="items"
                tag="div"
              >
                <template #item="{ element: item }">
                  <v-flex
                    :key="item.title"
                    class="item-container"
                    style="margin-bottom: 8px;"
                  >
                    <v-card style="height: 100px; display: flex; align-items: center; justify-content: center;">
                      {{ item.title }}
                    </v-card>
                  </v-flex>
                </template>
              </draggable>
            </v-flex>
          </template>
        </draggable>
      </div>
    </div>
  </template>
  
  <script>
  import draggable from "vuedraggable";
  
  export default {
    components: {
      draggable,
    },
    data() {
      return {
        rows: [
          {
            index: 1,
            items: [
              { title: "Item 1" },
              { title: "Item 2" },
            ],
          },
          {
            index: 2,
            items: [
              { title: "Item 3" },
              { title: "Item 4" },
            ],
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .rows {
    background-color: #f9f9f9;
    padding: 16px;
    border-radius: 8px;
  }
  
  .row-container {
    background-color: #ffffff;
    border-radius: 8px;
  }
  
  .items {
    display: flex;
    flex-wrap: wrap;
  }
  
  .item-container {
    flex: 0 0 30%;
    margin: 8px;
  }
  
  v-card {
    background-color: #e0e0e0;
    text-align: center;
    font-size: 16px;
  }
  </style>
  