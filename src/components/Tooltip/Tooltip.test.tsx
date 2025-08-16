import { describe, test, vi, expect, beforeEach } from "vitest";
import Tooltip from "./Tooltip.vue";
import { mount } from "@vue/test-utils";

vi.mock('@popperjs/core')
const onVisibleChange = vi.fn();
describe("Tooltip.vue", () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })
  test('basic tooltip', async () => {
    const wrapper = mount(() => 
      <div>
        <div id="outside"></div>
        <Tooltip content="Hello world" trigger="click" onVisible-change={onVisibleChange}>
          <button id="trigger">trigger</button>
        </Tooltip>
      </div>, 
      {
        attachTo: document.body
      }
    )

    
    const triggerArea = wrapper.find("#trigger")
    expect(triggerArea.exists()).toBeTruthy()
    expect(wrapper.find('.wl-tooltip__popper').exists()).toBeFalsy()
    console.log('before: ', wrapper.html())

    // 点击显示
    triggerArea.trigger('click')
    await vi.runAllTimers()
    expect(wrapper.find('.wl-tooltip__popper').exists()).toBeTruthy()
    console.log('after: ', wrapper.html())

    expect(wrapper.get('.wl-tooltip__popper').text()).toBe('Hello world')
    expect(onVisibleChange).toHaveBeenCalledWith(true)

    // 点击隐藏
    // triggerArea.trigger('click')
    // await vi.runAllTimers()
    // expect(wrapper.find('.wl-tooltip__popper').exists()).toBeFalsy()
    // expect(onVisibleChange).toHaveBeenLastCalledWith(false)

    // 点击外部隐藏
    const outsideArea = wrapper.get("#outside")
    outsideArea.trigger('click')
    await vi.runAllTimers()
    expect(wrapper.find('.wl-tooltip__popper').exists()).toBeFalsy()
    expect(onVisibleChange).toHaveBeenLastCalledWith(false)
  })
})