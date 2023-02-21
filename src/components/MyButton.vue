<template>
  <button class="btn">Создать</button>
</template>

<script>
export default {
  name: "MyButton",
};
</script>

<style scoped>
.btn {
  font-size: 16px;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid lightslategray;
  background-color: blue;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease-out;
}

.btn:disabled {
  color: black;
  background-color: lightgrey;
  cursor: not-allowed;
  transition: all 0.3s ease-out;
}
</style>
