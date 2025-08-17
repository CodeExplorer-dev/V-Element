import {  test, describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import Input from './Input.vue'

describe('Input.vue', () => {
  it('基本展示', () => {
    // 针对动态 classes
    // 针对 v-if
    // 针对 slots
    const wrapper = mount(Input, {
      props: {
        type: 'text',
        size: 'normal',
        modelValue: ''
      },
      slots: {
        prepend: 'prepend',
        prefix: 'prefix',
      }
    })
    console.log(wrapper.html())
    // classes
    expect(wrapper.classes()).toContain('wl-input--normal')
    expect(wrapper.classes()).toContain('is-prepend')

    expect(wrapper.find('input').exists()).toBeTruthy()
    expect(wrapper.get('input').attributes('type')).toBe('text')

    // slots
    expect(wrapper.find('.wl-input__prepend').exists()).toBeTruthy()
    expect(wrapper.find('.wl-input__prepend').text()).toBe('prepend')
    expect(wrapper.find('.wl-input__prefix').exists()).toBeTruthy()
    expect(wrapper.find('.wl-input__prefix').text()).toBe('prefix')

    const wrapper2 = mount(Input, {
      props: {
        type: 'textarea',
        modelValue: ''
      }
    })

    expect(wrapper2.find('textarea').exists()).toBeTruthy()
  })

  it.only('支持 v-model', async () => {
    const wrapper = mount(Input, {
      props: {
        type: 'text',
        modelValue: 'hello',
        'onUpdate:modelValue': (e: any) => wrapper.setProps({ modelValue: e })
      }
    })

    const input = wrapper.find('input')
    // 检查初始值
    expect(input.element.value).toBe('hello')
    // 更新值
    // setvalue 是组合事件会触发 input 和 change
    await input.setValue('update')
    expect(wrapper.props('modelValue')).toBe('update')
    expect(input.element.value).toBe('update')

    console.log('events', wrapper.emitted())
    expect(wrapper.emitted()).toHaveProperty('input')
    expect(wrapper.emitted()).toHaveProperty('change')

    const inputEvents = wrapper.emitted('input')
    const changeEvents = wrapper.emitted('change')
    expect(inputEvents![0]).toEqual(['update'])
    expect(changeEvents![0]).toEqual(['update'])

    // v-model 异步更新
    await wrapper.setProps({ modelValue: 'props update' })
    expect(input.element.value).toBe('props update')
  })

  it('支持点击清空字符串', async () => {
    const wrapper = mount(Input, {
      props: {
        type: 'text',
        modelValue: 'hello',
        clearable: true,
      },
      global:{
        stubs: ['Icon']
      }
    })

    // 不出现 Icon 区域
    expect(wrapper.find('.wl-input__clear').exists()).toBeFalsy()
    const input = wrapper.find('input')
    await input.trigger('focus')
    expect(wrapper.emitted()).toHaveProperty('focus')
    // 出现 Icon 区域
    expect(wrapper.find('.wl-input__clear').exists()).toBeTruthy()
    // 点击 Icon 清空
    await wrapper.get('.wl-input__clear').trigger('click')
    expect(input.element.value).toBe('')
    expect(wrapper.emitted()).toHaveProperty('clear')
    expect(wrapper.emitted()).toHaveProperty('input')
    expect(wrapper.emitted()).toHaveProperty('change')
    const inputEvents = wrapper.emitted('input')
    const changeEvents = wrapper.emitted('change')
    expect(inputEvents![0]).toEqual([''])
    expect(changeEvents![0]).toEqual([''])

    await input.trigger('blur')
    expect(wrapper.emitted()).toHaveProperty('blur')

  })

  it('支持切换密码显示', async () => {
    const wrapper = mount(Input, {
      props: {
        type: 'text',
        modelValue: '',
        showPassword: true,
      },
      global:{
        stubs: ['Icon']
      }
    })
    // 初始状态值为空，不出现 Icon 区域
    expect(wrapper.find('.wl-input__password').exists()).toBeFalsy()
    const input = wrapper.get('input')
    expect(input.element.type).toBe('password')
    // 出现 Icon 区域，并且出现特定的 Icon 图标
    await input.setValue('hello')
    const eyeIcon = wrapper.find('.wl-input__password')
    expect(eyeIcon.exists()).toBeTruthy()
    expect(eyeIcon.attributes('icon')).toBe('eye-slash')
    // 点击 Icon 切换
    await eyeIcon.trigger('click')
    expect(input.element.type).toBe('text')
    expect(wrapper.find('.wl-input__password').attributes('icon')).toBe('eye')
  })
})