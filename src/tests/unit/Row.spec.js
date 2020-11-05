import Row from '@ele/row';
import { shallowMount } from '@vue/test-utils';

describe('Row.vue', () => {
  it('create', () => {
    const wrapper = shallowMount(Row); // 挂载
    const row = wrapper.vm.$el;
    expect(row.classList).toContain('el-row');
  });

  it('gutter', () => {
    const wrapper = shallowMount(Row); // 挂载
    const row = wrapper.vm.$el;
    wrapper.setProps({ gutter: 20 });
    expect(row.style.marginLeft).toBe('-10px');
    expect(row.style.marginRight).toBe('-10px');
  });
});
