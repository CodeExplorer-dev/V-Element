<template>
<i 
  class="wl-icon"
  :style="customStyles"
  v-bind="$attrs"
>
  <font-awesome-icon v-bind="filteredProps" />
</i>
</template>

<script setup lang="ts">
import { omit } from 'lodash-es';
import type { IconProps } from './types'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { computed } from 'vue';

defineOptions({
  name: 'wl-icon',
  inheritAttrs: false,
})

const props = defineProps<IconProps>()
const filteredProps = computed(() => omit(props, ['color']))
const customStyles = computed(() => {
  return props.color ? { color: props.color } : {};
})
</script>