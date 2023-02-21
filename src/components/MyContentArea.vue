<template>
  <div>
    <p>{{ id }} {{ title }}</p>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
    },
    id: {
      type: Number,
    },
  },
  name: "MyContentArea",
};
</script>

<style scoped></style>
