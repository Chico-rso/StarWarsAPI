import Vue from "vue";
import App from "./App.vue";
import VueGoodTablePlugin from "vue-good-table";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.config.productionTip = false;

Vue.use(VueAxios, axios);
Vue.use(VueGoodTablePlugin);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
