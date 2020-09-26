// 通过render函数实现自定义标签
export default {
  name: 'ElCol',
  props: {
    tag: {
      type: String,
      default: 'div',
    },
    span: {
      type: Number,
      default: 24,
    },
    offset: {
      type: Number,
      default: 0,
    },
    xs: [Number, Object],
    sm: [Number, Object],
    md: [Number, Object],
    lg: [Number, Object],
    xl: [Number, Object],
  },
  computed: {
    scopedSpan() {
      const cols = this.span < 1 ? 1 : this.span;
      return cols;
    },
    style() {
      //   找到父级的gutter
      let parent = this.$parent;
      while (parent.$options.name !== 'ElRow') { // 父组件
        parent = parent.$parent;
      }
      // 可通过attrs , 也可在父组件先注册gutter, 应该更健壮一些, 可进行检测
      const { gutter } = parent;
      const paddingPixel = `${gutter / 2}px`;
      const marginPixel = `${(this.offset / 24) * 100}%`;
      return {
        paddingLeft: paddingPixel,
        paddingRight: paddingPixel,
        marginLeft: marginPixel,
      };
    },
    classList() {
      const classList = [];
      ['xs', 'sm', 'md', 'lg', 'xl'].forEach((size) => {
        // el-col-xs-5
        classList.push(`el-col-${size}-${this[size]}`);
      });
      return classList;
    },
  },
  render(h) {
    const vNode = h(this.tag, {
      class: [
        'el-col',
        `el-col-${this.scopedSpan}`,
        this.classList,
      ],
      style: this.style,
    }, this.$slots.default);
    // console.log(this.$slots);// [vNode1, ...]
    return vNode;
  },
};
