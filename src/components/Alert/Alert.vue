<template>
<Transition name="fade">
  <div
    class="wl-alert"
    :class="{
      [`wl-alert--${type}`]: type,
      [`wl-alert--${effect}`]: effect
    }"
    v-if="visible"
  >
    <div>
      <slot name="title">{{ title }}</slot>
    </div>
    <div v-if="closable" @click="handleClose" class="wl-alert__closebtn">
      <Icon icon="close" />
    </div>
  </div>  
</Transition>
</template>

<script lang="ts" setup>
import type { AlertProps, AlertEmits } from './types';
import Icon from '../Icon/Icon.vue';
import { ref } from 'vue';

defineOptions({
  name: 'wl-alert',
});

withDefaults(defineProps<AlertProps>(), {
  type: 'info',
  effect: 'light',
  closable: true
})

const visible = ref(true)
const emits = defineEmits<AlertEmits>()

const handleClose = () => {
  visible.value = false;
  // emits('close')
}

</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>