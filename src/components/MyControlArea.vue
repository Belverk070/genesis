<template>
  <div class="control-area">
    <select v-model="selected" class="dropdown">
      <option disabled value="">Выберите действие:</option>
      <option>Не выбрано</option>
      <option>Сделка</option>
      <option>Контакт</option>
      <option>Компания</option>
    </select>
    <my-button
      :class="{ btn_loading: this.isLoading }"
      :disabled="isActive"
      @click="onClickCreate"
      >Создать</my-button
    >
  </div>
</template>

<script>
import MyButton from "./MyButton.vue";
import axios from "axios";

export default {
  name: "MyControlArea",
  components: { MyButton },
  data() {
    return {
      selected: "",
      userData: [],
      isLoading: false,
    };
  },
  computed: {
    isActive() {
      return this.selected == "" || this.selected === "Не выбрано";
    },
  },
  methods: {
    async createObject(option) {
      this.isLoading = true;
      let headers = {
        "content-type": "application/json",
        Authorization: "Bearer " + this.$store.state.access_token,
      };
      let apiURL = "https://d6757be6f1100.amocrm.ru/api/v4/";
      let data;
      let path;
      let url;
      switch (option) {
        case "Сделка": {
          path = "leads";
          url = apiURL + path;
          data = [
            {
              name: "Тестовый лид",
            },
          ];
          break;
        }
        case "Контакт": {
          path = "contacts";
          url = apiURL + path;
          data = [
            {
              name: "Иван Иванов",
            },
          ];
          break;
        }
        case "Компания": {
          path = "companies";
          url = apiURL + path;
          data = [
            {
              name: "ООО Рога и Копыта",
            },
          ];
          break;
        }
        default: {
          break;
        }
      }
      try {
        const response = await axios.post(url, data, { headers: headers });
        console.log("data:", data[0]);
        console.log("ID:", response.data._embedded[`${path}`][0].id);
        let recievedData = {
          title: data[0],
          id: response.data._embedded[`${path}`][0].id,
        };
        this.$store.state.data.push(recievedData);
      } catch (error) {
        console.log(error);
      } finally {
        this.isLoading = false;
      }
    },

    async authorize() {
      const tokenGetURL = "https://test.gnzs.ru/oauth/get-token.php";
      try {
        const data = await axios.get(tokenGetURL, {
          headers: {
            "Content-Type": "application/json",
            "X-Client-Id": "30878566",
          },
        });
        this.userData.push(data.data);
      } catch (error) {
        console.log(error);
      }
      this.$store.state.access_token = this.userData[0].access_token;
      this.$store.state.base_domain = this.userData[0].base_domain;
      console.log("Authorization success");
      console.log("ACCESS_TOKEN:", this.$store.state.access_token);
      console.log("BASE_DOMAIN:", this.$store.state.base_domain);
    },
    onClickCreate() {
      this.createObject(this.selected);
      console.log(this.$store.state.data);
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
.dropdown {
  padding: 5px 10px;
}
</style>
