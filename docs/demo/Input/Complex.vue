<template>
<Input v-model="inputValue1" type="text" placeholder="请输入">
  <template #prepend>Http://</template>
</Input>
<Input v-model="inputValue2" type="text" placeholder="请输入">
  <template #append>.com</template>
</Input>
<Input v-model="inputValue3" type="text" placeholder="请输入">
  <template #prefix>
    <Icon icon="fa-user" />
  </template>
</Input>
<Input v-model="inputValue4" type="text" placeholder="请输入">
  <template #suffix>
    <Icon icon="search" />
  </template>
</Input>
</template>

<script setup>
import Input from '@/components/Input/Input.vue'
import Icon from '@/components/Icon/Icon.vue'
import { ref } from 'vue';

const inputValue1 = ref('')
const inputValue2 = ref('')
const inputValue3 = ref('')
const inputValue4 = ref('')
</script>