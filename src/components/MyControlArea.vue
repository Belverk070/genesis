<template>
  <div class="control-area">
    <select v-model="selected">
      <option disabled value="">Выберите действие:</option>
      <option>Не выбрано</option>
      <option>Сделка</option>
      <option>Контакт</option>
      <option>Компания</option>
    </select>
    <my-button
      :disabled="selected == '' || selected == 'Не выбрано'"
      @click="onClick"
    ></my-button>
  </div>
</template>

<script>
import MyButton from "./MyButton.vue";
import axios from "axios";
// import oauth from "axios-oauth-client";

export default {
  name: "MyDropdown",
  components: { MyButton },
  data() {
    return {
      selected: "",
      recievedData: [],
    };
  },
  methods: {
    async authorize() {
      try {
        console.log("authorized");
        const data = await axios.get(
          "https://test.gnzs.ru/oauth/get-token.php",
          {
            headers: {
              "Content-Type": "application/json",
              "X-Client-Id": "30878566",
            },
          }
        );
        return data;
      } catch (error) {
        console.log(error);
      }
    },
    lead() {},
    contact() {},
    company() {},
    onClick() {
      console.log("Mess from parent");
    },
  },
  created() {
    this.authorize();
  },
};
</script>

<style scoped>
.control-area {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  padding: 20px 0;
  margin-bottom: 30px;
}
</style>
