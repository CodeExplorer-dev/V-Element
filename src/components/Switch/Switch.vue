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
    <div class="wl-switch__core-inner">
      <span v-if="activeText || inactiveText" class="wl-switch__core-inner-text">
        {{ checked ? activeText : inactiveText }}
      </span>
    </div>
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

const props = withDefaults(defineProps<SwitchProps>(), {
  activeValue: true,
  inactiveValue: false,
})

const emit = defineEmits<SwitchEmits>()

const innerValue = ref(props.modelValue)
const input = ref<HTMLInputElement>()

const checked = computed(() => innerValue.value === props.activeValue);

const switchValue = () => {
  if (props.disabled) return;
  const newValue = checked.value ? props.inactiveValue : props.activeValue;
  innerValue.value = newValue;
  emit('update:modelValue', newValue);
  emit('change', newValue);
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