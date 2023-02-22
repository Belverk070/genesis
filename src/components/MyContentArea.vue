<template>
  <div class="content-area">
    <p>ID тестового объекта: {{ id }}</p>
    <p>Название тестового объекта: {{ title.name }}</p>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: Object,
    },
    id: {
      type: Number,
    },
  },
  name: "MyContentArea",
};
</script>

<style scoped>
.content-area {
  display: flex;
  flex-direction: column;
  width: 80%;
  border: 1px solid lightgray;
  gap: 10px;
  margin-bottom: 10px;
  padding: 10px;
}
</style>
