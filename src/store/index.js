import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      data: [],
      access_token: null,
      base_domain: null,
    };
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});

export default store;
