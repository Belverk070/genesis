<template>
  <div class="main">
    <my-control-area></my-control-area>
    <my-content-area
      v-for="item in items"
      :key="item"
      :title="item.title"
      :id="item.id"
    ></my-content-area>
  </div>
</template>

<script>
import MyContentArea from "../components/MyContentArea.vue";
import MyControlArea from "../components/MyControlArea.vue";
export default {
  name: "MainPage",
  components: { MyContentArea, MyControlArea },
  computed: {
    items() {
      return this.$store.state?.data || [];
    },
  },
};
</script>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding: 0 15px;
  max-width: 800px;
}
</style>
