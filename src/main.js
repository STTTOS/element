import Vue from 'vue';
import Layout, { Col, Row } from '@ele';
import App from './App.vue';

// Vue.use(Layout);
console.log(Layout);
Vue.use(Row);
Vue.use(Col);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
