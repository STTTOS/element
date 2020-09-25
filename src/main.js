import Vue from 'vue';
import App from './App.vue';
import '@/assets/theme-chalk/display.scss'; // hidden-point

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
