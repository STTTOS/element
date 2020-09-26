import Vue from 'vue';
import Col from './col';
import Row from './row';
import '@/assets/theme-chalk/index.scss';

const components = [
  Col,
  Row,
];
const install = () => {
  components.forEach((cmp) => {
    Vue.component(cmp.name, cmp);
  });
};
const name = 'myLayout';
export default {
  install,
  Col,
  Row,
};

export {
  Col,
  Row,
  name,
};
