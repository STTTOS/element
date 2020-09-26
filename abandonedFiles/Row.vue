<template>
    <div
        :class="[
          'el-row',
          {'el-row--flex': this.type === 'flex'}
        ]"
        :style="style"
    >
        <slot></slot>
    </div>
</template>

<script>
export default {
  name: 'row',
  props: {
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
};
</script>

<style scoped lang='scss'>
// .el-row::after{

// }
// .el-row--flex::after{

// }
.el-row{
    border: 1px solid;
    &::after {
      content: '';
      display: block;
    }
    &::after {
      clear: both;
    }
    &--flex{
      display: flex;
      &::after{
       display: none;
       content: '';
      }
    }
}
</style>
