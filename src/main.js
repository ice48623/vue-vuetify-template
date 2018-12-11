import Vue from 'vue'
import './plugins/axios'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'
import { store } from './store'

Vue.use(Vuetify, {
    iconfont: 'md',
});
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
