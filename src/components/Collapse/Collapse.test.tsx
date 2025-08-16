import {  test, describe, expect, vi, beforeAll } from 'vitest'
import { h } from 'vue'
import { mount } from '@vue/test-utils'
import type { VueWrapper, DOMWrapper } from '@vue/test-utils'
import Collapse  from './Collapse.vue'
import CollapseItem from './CollapseItem.vue'

let wrapper: VueWrapper
let headers: DOMWrapper<Element>[], contents: DOMWrapper<Element>[]
let firstHeader: DOMWrapper<Element>, secondHeader: DOMWrapper<Element>, disabledHeader: DOMWrapper<Element>, 
    firstContent: DOMWrapper<Element>, secondContent: DOMWrapper<Element>, disabledContent: DOMWrapper<Element>
const onChange = vi.fn()

describe('Collapse.vue', () => {
  beforeAll(() => {
    wrapper = mount(() => 
      <Collapse modelValue={['a']} onChange={onChange}>
        <CollapseItem name='a' title='title a'>content a</CollapseItem>
        <CollapseItem name='b' title='title b'>content b</CollapseItem>
        <CollapseItem name='c' title='title c' disabled>content c</CollapseItem>
      </Collapse>, 
      {
        global: {
          stubs: ['Icon']
        },
        attachTo: document.body
      }
    )

    headers = wrapper.findAll('.wl-collapse-item__header')
    contents = wrapper.findAll('.wl-collapse-item__wrapper')

    firstHeader = headers[0]
    secondHeader = headers[1]
    disabledHeader = headers[2]
    firstContent = contents[0]
    secondContent = contents[1]
    disabledContent = contents[2]

  })
  test('测试基础结构和对应文本', () => {
    expect(headers.length).toBe(3)
    expect(contents.length).toBe(3)

    expect(firstHeader.text()).toBe('title a')

    expect(firstContent.isVisible()).toBeTruthy()
    expect(secondContent.isVisible()).toBeFalsy()
    expect(firstContent.text()).toBe('content a')

  })

  test('点击标题展开/关闭内容', async () => {
    // 行为
    await firstHeader.trigger('click')
    expect(firstContent.isVisible()).toBeFalsy()

    await secondHeader.trigger('click')
    expect(secondContent.isVisible()).toBeTruthy()
  })

  test('发送正确事件', () => {
    expect(onChange).toHaveBeenCalledTimes(2)
    expect(onChange).toHaveBeenCalledWith([])
    expect(onChange).toHaveBeenLastCalledWith(['b'])
  })

  test.skip('disabled 的内容应该没有反应', async () => {
    onChange.mockClear()
    expect( disabledHeader.classes()).toContain('is-disabled')
    await disabledHeader.trigger('click')
    expect(disabledContent.isVisible()).toBeFalsy()
    expect(onChange).not.toHaveBeenCalled()
  })
})

// describe('Collapse.vue', () => {
//   test('basic collapse2', async () => {
//     const wrapper = mount(Collapse,  {
//       props: {
//         modelValue: ['a']
//       },
//       slots: {
//         default: (
//           <>
//             <CollapseItem name='a' title='title a'>content a</CollapseItem>
//             <CollapseItem name='b' title='title b'>content b</CollapseItem>
//             <CollapseItem name='c' title='title c' disabled>content c</CollapseItem>
//           </>
//         )
//       },
//       global: {
//         stubs: ['Icon']
//       },
//       attachTo: document.body
//     }
//   )

//     const headers = wrapper.findAll('.wl-collapse-item__header')
//     const contents = wrapper.findAll('.wl-collapse-item__wrapper')

//     // 长度
//     expect(headers.length).toBe(3)
//     expect(contents.length).toBe(3)

//     // 标题
//     const firstHeader = headers[0]
//     const secondHeader = headers[1]
//     expect(firstHeader.text()).toBe('title a')

//     // 内容
//     const firstContent = contents[0]
//     const secondContent = contents[1]
//     const disabledContent = contents[2]
//     expect(firstContent.isVisible()).toBeTruthy()
//     expect(secondContent.isVisible()).toBeFalsy()
//     expect(firstContent.text()).toBe('content a')

//     // 行为
//     await firstHeader.trigger('click')
//     expect(firstContent.isVisible()).toBeFalsy()

//     await secondHeader.trigger('click')
//     expect(secondContent.isVisible()).toBeTruthy()

//     expect(wrapper.emitted()).toHaveProperty('change')
//     const changeEvents = wrapper.emitted('change') as any[]

//     console.table(changeEvents)
//     expect(changeEvents).toHaveLength(2)
//     expect(changeEvents[0]).toEqual([[]])
//     expect(changeEvents[1]).toEqual([['b']])

//     // disabled
//     const disabledHeader = headers[2]
//     expect( disabledHeader.classes()).toContain('is-disabled')
//     await disabledHeader.trigger('click')
//     expect(disabledContent.isVisible()).toBeFalsy()
//   })
// })