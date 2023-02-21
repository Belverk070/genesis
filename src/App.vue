<template>
  <main-page></main-page>
</template>

<script>
import MainPage from "./views/MainPage.vue";

export default {
  components: { MainPage },
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  font-family: "Courier New", Courier, monospace;
  font-size: 18px;
}
</style>
