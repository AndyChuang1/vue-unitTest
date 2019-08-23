import { mount } from '@vue/test-utils';
import Counter from '@/views/Counter.vue';
import { isIterable } from 'core-js';



describe('Counter.vue', () => {
    const wrapper = mount(Counter);
    // console.log(wrapper.vm);
    it('renders the correct markup', () => {
        expect(wrapper.html()).toContain('<span class="count">0</span>')
    })
    it('button click should increment the count', () => {
        expect(wrapper.vm.count).toBe(0)
        const button = wrapper.find('.add-btn')
        button.trigger('click')
        expect(wrapper.vm.count).toBe(1)
    })
    it('button click should decrement the count', () => {
        expect(wrapper.vm.count).toBe(1)
        const button = wrapper.find('.sub-btn')
        button.trigger('click')
        expect(wrapper.vm.count).toBe(0)
    })

})
