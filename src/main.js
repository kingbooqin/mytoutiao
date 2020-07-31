import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "./common/myaxios"
import { Message } from "element-ui"


//a.2 在Vue的原型上添加 $axios
Vue.prototype.$axios = axios;
Vue.config.productionTip = false;
Vue.prototype.$message = Message;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
