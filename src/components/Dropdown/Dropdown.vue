<template>
<div 
  class="wl-dropdown"
>
  <Tooltip
    :trigger="trigger"
    :placement="placement"
    :popper-options="popperOptions"
    :open-delay="openDelay"
    :close-delay="closeDelay"
    @visible-change="visibleChange"
    ref="tooltipRef"
  >
    <slot></slot>
    <template #content>
      <ul class="wl-dropdown__menu">
        <template v-for="item in menuOptions" :key="item.key">
          <li 
            v-if="item.divided"
            role="separator"
            class="divided-placeholder"
          ></li>
          <li
            class="wl-dropdown__item" 
            @click="itemClick(item)"
            :class="{
              'is-disabled': item.disabled,
              'is-divided': item.divided
            }"
            :id="`dropdown-item-${item.key}`"
          >
            <RenderVNode :vNode="item.label" />
          </li>
        </template>
      </ul>
    </template>
  </Tooltip>
</div>
</template>

<script setup lang="ts">
import { ref, type Ref } from 'vue';
import Tooltip from '../Tooltip/Tooltip.vue';
import type { DropdownProps, DropdownEmits, DropdownInstance, MenuOption } from './types';
import type { TooltipInstance } from '../Tooltip/types';
import RenderVNode from '../Common/RenderVnode'

defineOptions({
  name: 'wl-dropdown'
})

const props = withDefaults(defineProps<DropdownProps>(), {
  hideAfterClick: true,
  transition: 'fade-down'
})

const emits = defineEmits<DropdownEmits>()

const tooltipRef = ref() as Ref<TooltipInstance>

const visibleChange = (e: boolean) => {
  emits('visible-change', e)
}

const itemClick = (e: MenuOption) => {
  if (e.disabled) return
  emits('select', e)
  if (props.hideAfterClick) {
    tooltipRef.value?.hide()
  }
}

defineExpose({
  show: () => tooltipRef.value?.show(),
  hide: () => tooltipRef.value?.hide()
})
</script>

<style scoped>
</style>