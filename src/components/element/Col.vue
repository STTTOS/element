<template>
    <div
        :class="[
        'el-col',
         `el-col-${scopedSpan}`,
         classList
         ]"
        ref="demo"
        :style="style"
    >
      <slot/>
    </div>
</template>

<script>
export default {
  props: {
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
      while (parent.$options.name !== 'row') { // 父组件
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
  mounted() {
    // method1
    // this.$refs.demo.classList.add(`el-col-${this.span}`);
  },
};
</script>

<style scoped lang='scss'>
.el-col {
    float: left;
    box-sizing: border-box;
}
@for $i from 1 through 24 {
    .el-col-#{$i} {
        width: $i / 24 * 100%;
    }
}
// xs < 768px
@media only screen and (max-width: 767px) {
  @for $i from 1 through 24 {
    .el-col-xs-#{$i} {
        width: $i / 24 * 100%;
    }
  }
}
// md [768px, 992px)
@media only screen and (min-width: 768px) {
  @for $i from 1 through 24 {
    .el-col-sm-#{$i} {
        width: $i / 24 * 100%;
    }
  }
}
@media only screen and (min-width: 992px) {
  @for $i from 1 through 24 {
    .el-col-md-#{$i} {
        width: $i / 24 * 100%;
    }
  }
}
@media only screen and (min-width: 1200px) {
  @for $i from 1 through 24 {
    .el-col-lg-#{$i} {
        width: $i / 24 * 100%;
    }
  }
}
@media only screen and (min-width: 1920px) {
  @for $i from 1 through 24 {
    .el-col-xl-#{$i} {
        width: $i / 24 * 100%;
    }
  }
}
</style>
