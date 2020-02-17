import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import vuetify from "@/plugins/vuetify"
import firebaseConfig from "./config/Firebase.js"
import firebase from "firebase"
import 'firebase/firestore'
import VuetifyConfirm from "vuetify-confirm"

Vue.config.productionTip = false;

Vue.use(VuetifyConfirm, {
  vuetify,
  buttonTrueText: 'OK',
  buttonFalseText: 'CANCEL'
});

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore()
// db.settings({timestampsInSnapshots: true});

Vue.$db = db

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
  created() {
    let vm = this
    firebase.auth().onAuthStateChanged(function(user) {
      vm.$store.dispatch("state_change", user);
    });
  }
}).$mount("#app");
