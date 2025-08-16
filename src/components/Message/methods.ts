import type { CreateMessageProps, MessageContext } from './types'
import MessageConstructor from './Message.vue'
import { h, render, shallowReactive, reactive } from 'vue'
import useZIndex from '../../hooks/useZIndex'

let seed = 1
const instances: MessageContext[] = shallowReactive([])

export const createMessage = (props: CreateMessageProps) => {
  const { nextZIndex } = useZIndex()
  const id = `message_${seed++}`
  const container = document.createElement('div') 
  const destory = () => {
    const idx = instances.findIndex((instance) => instance.id === id)
    if (idx === -1) return
    instances.splice(idx, 1)
    render(null, container)
  }

  // 手动调用删除
  const manualDestroy = () => {
    const instance = instances.find(instance => instance.id === id)
    if (instance) {
      instance.vm.exposed!.visible.value = false
    }
  }

  const newProps = {
    ...props,
    id,
    onDestroy: destory,
    zIndex: nextZIndex()
  }
  const vnode = h(MessageConstructor, newProps)
  render(vnode, container)

  document.body.appendChild(container.firstElementChild!) // 非空断言操作符
  const vm = vnode.component!
  const instance = {
    id,
    vnode,
    vm,
    props: newProps,
    destory: manualDestroy
  }
  instances.push(instance)
  return instance
}

export const getLastInstance = () => {
  return instances.at(-1)
}

export const getLastBottomOffset = (id: string) => {
  const idx = instances.findIndex((instance) => instance.id === id)
  console.log('idx', id, idx, instances.length)
  if (idx <= 0) {
    return 0
  } else {
    const prev = instances[idx - 1]
    return prev.vm.exposed!.bottomOffset.value
  }
}

export const closeAll = () => {
  instances.forEach(instancr => {
    instancr.destory()
  })
}