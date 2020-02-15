import Vue from "vue";
import Vuex from "vuex";
import UserModul from "@/store/User.js";
import TasksModul from "@/store/Tasks.js";
import CommonModul from "@/store/Common.js";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    CommonModul,
    UserModul,
    TasksModul
  }
});
