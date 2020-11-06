import Dialog from './src/main.vue';
import '../lib/theme-chalk/dialog.scss';

Dialog.install = (Vue) => {
  Vue.component(Dialog.name, Dialog);
};
export default Dialog;
