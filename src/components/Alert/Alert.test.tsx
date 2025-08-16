import {  test, describe, expect, vi, beforeAll } from 'vitest'
import { h } from 'vue'
import { mount } from '@vue/test-utils'
import type { VueWrapper, DOMWrapper } from '@vue/test-utils'
import Alert  from './Alert.vue'

describe('Alert.vue', () => {
  test('basic' , async () => {
    const wrapper = mount(() => 
      <>
        <Alert title="success" type="success" closable />
        <Alert title="primary" type="primary" />
        <Alert title="success" type="success" effect="dark" closable />
      </>,
      {
        global: {
          stubs: ['Icon']
        },
        attachTo: document.body
      }
    )
    const alerts = wrapper.findAll('.wl-alert')
    console.log(alerts)
    expect(alerts).toHaveLength(3)
    const alert1 = alerts[0]
    const alert2 = alerts[1]
    const alert3 = alerts[2]
    expect(alert1.classes()).toContain('wl-alert--success')
    expect(alert1.find('.wl-alert__closebtn').exists()).toBeTruthy()
    expect(alert2.find('.wl-alert__closebtn').exists()).toBeFalsy()
    expect(alert3.find('.wl-alert__closebtn').exists()).toBeTruthy()
    expect(alert1.isVisible()).toBeTruthy()

    const alert1_closeBtn = alert1.find('.wl-alert__closebtn')
    await alert1_closeBtn.trigger('click')
    expect(alert1.isVisible()).toBeFalsy()
  })
})