import Col from '@ele/col';
import { shallowMount } from '@vue/test-utils';

describe('Col.vue', () => {
  it('create', () => {
    const wrapper = shallowMount(Col); // 挂载
    const col = wrapper.vm.$el;
    expect(col.classList).toContain('el-col');
  });
});
