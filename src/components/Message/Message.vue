<template>
<Transition 
  :name="transitionName"
  @after-leave="destroyComponent"
  @enter="updateHeight"
>
<div
  ref="messageRef"
  class="wl-message"
  v-show="visible"
  :class="{
    [`wl-message--${type}`]: type,
    'is-close': showClose
  }"
  role="alert"
  :style="cssStyle"
  @mouseenter="clearTimer"
  @mouseleave="startTimer"
>
  <div class="wl-message__content">
    <slot>
      <RenderVNode :vNode="message" v-if="message" />
    </slot>
  </div>

  <div class="wl-message__close" v-if="showClose">
    <Icon @click.stop="visible = false" icon="xmark" />
  </div>
</div>
</Transition>
</template>

<script setup lang="ts">
import { computed, nextTick, onMounted, ref, watch } from 'vue'
import type { MessageProps } from './types'
import { getLastInstance, getLastBottomOffset } from './methods'
import RenderVNode from '../Common/RenderVnode'
import Icon from '../Icon/Icon.vue';
import useEventListener from '../../hooks/useEventListener'

const props = withDefaults(defineProps<MessageProps>(), {
  duration: 3000,
  showClose: false,
  type: 'info',
  offset: 20,
  transitionName: 'fade-up'
})

const visible = ref(false)

const messageRef = ref<HTMLDivElement>()

// 计算偏移高度
// 这个 div 的高度
const height = ref(0)

// 计算上一个实例的最下面的坐标， 第一个是 0
const lastOffset = computed(() => getLastBottomOffset(props.id))
// 当前实例应有的 top 值
const topOffset = computed(() => props.offset + lastOffset.value)
// 为下一个实例预留 offset
const bottomOffset = computed(() => topOffset.value + height.value)

const cssStyle = computed(() => ({
  top: topOffset.value + 'px',
  zIndex: props.zIndex
}))

let timer: any
const startTimer = () => {
  if(props.duration === 0) return
  timer = setTimeout(() => {
    visible.value = false
  }, props.duration)
}

const clearTimer = () => {
  clearTimeout(timer)
}

onMounted(async () => {
  visible.value = true
  startTimer()
  // await nextTick()
  // height.value = messageRef.value!.getBoundingClientRect().height
})

function keydown (e: Event) {
  const event = e as KeyboardEvent
  if (event.code === 'Escape') {
    visible.value = false
  }
}

useEventListener(document, 'keydown', keydown)

// watch(visible, (newVal) => {
//   if(!newVal) {
//     props.onDestroy?.()
//   }
// })

const destroyComponent = () => {
  props.onDestroy()
}
const updateHeight = () => {
  height.value = messageRef.value!.getBoundingClientRect().height
}

defineExpose({
  bottomOffset,
  visible
})
</script>