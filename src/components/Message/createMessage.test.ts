import { describe, test, vi, expect } from 'vitest'
import { createMessage, closeAll } from './methods'
import { nextTick } from 'vue'

export const rAF = async () => {
  return new Promise((res) => {
    requestAnimationFrame(() => {
      requestAnimationFrame(async () => {
        res(null)
        await nextTick()
      })
    })
  })
}

const getTopValue = (element: Element) => {
  const styles = window.getComputedStyle(element)
  const topValue = styles.getPropertyValue('top')
  return Number.parseFloat(topValue)
}

describe('createMessage', () => {
  test('调用方法应该创建对应的 Message 组件', async () => {
    const instance = createMessage({
      message: 'Hello World',
      duration: 0
    })
    await rAF()
    expect(document.querySelector('.wl-message')).toBeTruthy()
    instance.destory()
    await rAF() 
    expect(document.querySelector('.wl-message')).toBeFalsy()
  })

  test('多次调用方法应该创建多个 Message 组件', async () => {
    createMessage({ message: 'Hello World', duration: 0 })
    createMessage({ message: 'Hello World 2', duration: 0 })
    await rAF()
    const messages = document.querySelectorAll('.wl-message')
    expect(messages.length).toBe(2)
    closeAll()
    await rAF()
    expect(document.querySelector('.wl-message')).toBeFalsy()
  })

  test('创建多个实例一个设置正确的 offset', async () => {
    createMessage({ message: 'Hello World', duration: 0, offset: 100 })
    createMessage({ message: 'Hello World 2', duration: 0, offset: 50 })
    await rAF()
    const messages = document.querySelectorAll('.wl-message')
    expect(messages.length).toBe(2)
    const firstTop = getTopValue(messages[0])
    const secondTop = getTopValue(messages[1])

    expect(firstTop).toBe(100)
    expect(secondTop).toBe(150)
  })
})
