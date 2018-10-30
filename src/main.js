import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
const fb = require("./firebaseConfig");
Vue.config.productionTip = false;

fb.auth.onAuthStateChanged(function(user) {
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount("#app");
});
