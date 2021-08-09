<template>
  <div class="sunxy-layout">
    <component :is="layout"></component>
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

<style lang="scss">
.sunxy-layout {
  width: 100%;
  height: 100%;
}
</style>