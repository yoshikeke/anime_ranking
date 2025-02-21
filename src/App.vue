<template>
  <div>
    <MainHeader v-if="showHeader"/>
    <router-view class="screen"></router-view>
  </div>
</template>

<script>
    import MainHeader from "@/views/MainHeader.vue";
    import { computed } from "vue";
    import { useRoute } from "vue-router";

    export default {
        components: {
            MainHeader
        },
        setup() {
          const route = useRoute();
          const showHeader = computed(() => {
            return route.path === '/home' || route.path === '/mypage' || route.path === '/edit';
          })
          return { showHeader };

        }
    }
</script>

<style scoped>
.screen {
    margin: 20px;
}
</style>