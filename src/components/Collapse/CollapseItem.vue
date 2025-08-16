<template>
<div 
  class="wl-collapse-item"
  :class="{
    'is-disabled': disabled
  }"
>
  <div 
    class="wl-collapse-item__header" 
    :class="{
      'is-active': isActive,
      'is-disabled': disabled
    }"
    :id="`item-header-${name}`" 
    @click="handleClick"
  >
    <slot name="title">
      <h1>{{ title }}</h1>
    </slot>
    <Icon icon="angle-right" class="header-angle" />
  </div>
  <Transition name="slide" v-on="transitionEvents">
    <div class="wl-collapse-item__wrapper" v-show="isActive">
      <div class="wl-collapse-item__content" :id="`item-content-${name}`">
        <slot></slot>
      </div>
    </div>
  </Transition> 
</div>
</template>

<script setup lang="ts">
import { inject, computed } from 'vue';
import { collapseContextKey, type CollapseItemProps } from './types';
import Icon from '../Icon/Icon.vue';

defineOptions({
  name: 'wl-collapse-item'
});

const props = defineProps<CollapseItemProps>()

const collapseContext = inject(collapseContextKey);

const isActive = computed(() => collapseContext?.activeNames.value.includes(props.name));
const handleClick = () => {
  if(props.disabled ) return;
  collapseContext?.handleItemClick(props.name);
}

const transitionEvents: Record<string, (el: HTMLElement) => void> = {
  beforeEnter(el) {
    el.style.height = '0px'
  },
  enter(el) {
    el.style.height = `${el.scrollHeight}px`
  },
  afterEnter(el) {
    el.style.height = ''
  },
  beforeLeave(el) {
    el.style.height = `${el.scrollHeight}px`
  },
  leave(el) {
    el.style.height = '0px'
  },
  afterLeave(el) {
    el.style.height = ''
  }
}
</script>

<style>
.wl-collapse-item__header{
  font-size: 30px;
}
</style>