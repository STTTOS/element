import Vue from 'vue';
import Col from './col';
import Row from './row';
import ElDialog from './dialog';

const components = [
  Col,
  Row,
  ElDialog,
];
const install = () => {
  components.forEach((cmp) => {
    Vue.use(cmp);
  });
};
const name = 'my-element-ui';
export default {
  install,
  Col,
  Row,
  ElDialog,
};

export {
  Col,
  Row,
  ElDialog,
  name,
};
