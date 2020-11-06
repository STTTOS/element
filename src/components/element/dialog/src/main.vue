<template>
    <div class="el-dialog" v-if="visible" :style="style">
        <div class="el-dialog-inner">
            <div class="close" v-if="close" @click="closeWindow">x</div>
            <slot/>
       </div>
    </div>
</template>

<script>
export default {
  name: 'ElDialog',
  props: {
    visible: {
      type: Boolean,
      required: true,
      default: false,
    },
    close: {
      type: Boolean,
      default: true,
    },
    num: {
      type: Number,
    },
  },
  data() {
    return {
      zIndex: 2000,
      mask: null,
    };
  },
  methods: {
    closeWindow() {
      // 后续操作
      this.zIndex += 1;
      this.$emit('update:visible', false);
    },
    createMask() {
      if (this.mask) return;
      this.mask = document.createElement('div');
      const style = `z-index: ${this.zIndex - 1};`; // 设置index
      this.mask.style = style;
      this.mask.classList.add('el-modal');
      document.body.appendChild(this.mask);
    },
    removeMask() {
      if (this.mask) {
        document.body.removeChild(this.mask);
        this.mask = null;
      }
    },
  },
  computed: {
    style() {
      return {
        zIndex: this.zIndex,
      };
    },
  },
  watch: {
    visible() {
      if (this.visible) { // 弹出dialog
        this.createMask();
      } else {
        this.removeMask();
      }
    },
  },
  mounted() {
    return this.visible ? this.createMask() : null;
  },

};
</script>
