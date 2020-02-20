import axios from "axios";

export default ({
  state: {
    money: []
  },
  mutations: {
    set_money(state, payload) {
      state.money = payload;
    }
  },
  actions: {
    load_rate({ commit }) {
      let money = [];
      axios.get("https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5").then(res => {
        money = res.data;
        commit("set_money", money)
      })
    }
  },
  getters: {
    rate_exchengr: state => state.money
    }
})