<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "MyButton",
};
</script>

<style scoped>
.btn {
  width: 80px;
  height: 40px;
  position: relative;
  font-size: 16px;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid lightslategray;
  background-color: blue;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease-out;
}

.btn:hover {
  opacity: 0.7;
  transition: all 0.3s ease-out;
}

.btn:disabled {
  color: black;
  background-color: lightgrey;
  cursor: not-allowed;
  transition: all 0.3s ease-out;
}

.btn_loading {
  color: transparent;
  cursor: not-allowed;
}
.btn_loading::after {
  content: "";
  position: absolute;
  width: 16px;
  height: 16px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  border: 4px solid transparent;
  border-top-color: #ffffff;
  border-radius: 50%;
  animation: button-loading-spinner 1s ease infinite;
}

@keyframes button-loading-spinner {
  from {
    transform: rotate(0turn);
  }

  to {
    transform: rotate(1turn);
  }
}
</style>
