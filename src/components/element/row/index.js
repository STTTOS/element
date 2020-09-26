import Row from './Row';

// 注册install 方法 -> 注册全局组件
Row.install = (Vue) => {
  Vue.component(Row.name, Row);
};
export default Row;
