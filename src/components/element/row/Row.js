export default {
  name: 'ElRow',
  props: {
    tag: {
      type: String,
      default: 'div',
    },
    gutter: {
      type: Number,
      default: 0,
    },
    type: {
      type: String,
      default: 'default',
    },
    justify: {
      type: String,
      default: 'start',
      validator: (val) => ['start', 'center', 'space-between', 'space-around', 'start', 'end'].includes(val),
    },
  },
  computed: {
    style() {
      const marginPixel = this.gutter === 0 ? null : `-${this.gutter / 2}px `;
      const justifyContent = this.type === 'flex' ? this.justify : null;
      return {
        marginLeft: marginPixel,
        marginRight: marginPixel,
        justifyContent,
      };
    },
  },
  render(h) {
    return h(this.tag, {
      class: [
        'el-row',
        { 'el-row--flex': this.type === 'flex' },
      ],
      style: this.style,
    }, this.$slots.default);
  },
};
