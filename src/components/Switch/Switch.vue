<template>
<div
  class="wl-switch"
  :class="{
    [`wl-switch--${size}`]: size,
    'is-disabled': disabled,
    'is-checked': checked
  }"

  @click="switchValue"
>
  <input
    ref="input"
    class="wl-switch__input"
    type="checkbox"
    role="switch"
    :name="name"
    :disabled="disabled"
    @keydown.enter="switchValue"
  >
  <div class="wl-switch__core">
    <div class="wl-switch__core-action"></div>
  </div>
</div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue';
import type { SwitchProps, SwitchEmits } from './types';

defineOptions({
  name: 'WLSwitch',
  inheritAttrs: false,
})

const props = defineProps<SwitchProps>()

const emit = defineEmits<SwitchEmits>()

const innerValue = ref(props.modelValue)
const input = ref<HTMLInputElement>()

const checked = computed(() => innerValue.value)

const switchValue = () => {
  if (props.disabled) return;
  innerValue.value = !checked.value;
  emit('update:modelValue', innerValue.value);
  emit('change', innerValue.value);
}

onMounted(() => {
  input.value!.checked = checked.value;
})

watch(checked, (val) => {
  input.value!.checked = val;
})

watch(() => props.modelValue, (newValue) => {
  innerValue.value = newValue;
})
</script>