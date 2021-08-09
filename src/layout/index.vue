<template>
  <div>
    <component :is="layout"></component>
    <router-view></router-view>
  </div>
</template>

<script>
import BasicLayout from "./common/BasicLayout.vue";
import MobileLayout from "./common/MobileLayout.vue";
export default {
  components: {
    BasicLayout,
    MobileLayout,
  },
  data() {
    return {
      layout: "BasicLayout",
    };
  },
};
</script>