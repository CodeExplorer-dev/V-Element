<template>
<div class="wl-collapse">
  <slot></slot>
</div>
</template>

<script setup lang="ts">
import { provide, ref, watch } from 'vue';
import type { NameType, CollapseProps, CollapseEmits } from './types'
import { collapseContextKey } from './types';

defineOptions({
  name: 'wl-collapse'
});

const props = defineProps<CollapseProps>()
const emits = defineEmits<CollapseEmits>() 

const activeNames = ref<NameType[]>(props.modelValue)

watch(() => props.modelValue, () => {
  activeNames.value = props.modelValue;
})

if (props.accordion && activeNames.value.length > 1) {
  console.warn('Accordion mode only allows one item to be opened at a time.');
}

const handleItemClick = (itemName: NameType) => {
  let _activeNames = [ ...activeNames.value ]
  if (props.accordion) {
    _activeNames = [ activeNames.value[0] === itemName ? '' : itemName ]
    activeNames.value = _activeNames
  } else {
    const index = _activeNames.indexOf(itemName);
    if (index > -1) {
      _activeNames.splice(index, 1);
    } else {
      _activeNames.push(itemName);
    }
    activeNames.value = _activeNames
  }

  emits('update:modelValue', _activeNames)
  emits('change', _activeNames)
}

provide(collapseContextKey, {
  activeNames,
  handleItemClick
})
</script>

<style>

</style>