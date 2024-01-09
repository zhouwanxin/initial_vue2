import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import '@/styles/index.scss'
// 导入 ElementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import moment from "moment";

Vue.config.productionTip = false;

// 使用 ElementUI
Vue.use(ElementUI);

Vue.prototype.$moment = moment;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
