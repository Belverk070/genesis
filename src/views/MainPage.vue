<template>
  <div class="main">
    <my-control-area></my-control-area>
    <my-content-area
      v-for="task in tasks"
      :key="task"
      :title="task.title"
      :id="task.id"
    ></my-content-area>
  </div>
</template>

<script>
import MyContentArea from "../components/MyContentArea.vue";
import MyControlArea from "../components/MyControlArea.vue";
export default {
  name: "MainPage",
  components: { MyContentArea, MyControlArea },
  data() {
    return {
      tasks: [
        { id: 1, title: "some test title" },
        { id: 2, title: "some test title" },
        { id: 3, title: "some test title" },
      ],
    };
  },
};
</script>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  max-width: 800px;
}
</style>
