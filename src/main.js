import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import ClearOnDisable from './wrapper';
Vue.use(ClearOnDisable);

new Vue({
  render: h => h(App),
}).$mount('#app')
