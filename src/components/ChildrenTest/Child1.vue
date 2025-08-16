<template>
<div class="container">
  <h1>这是子组件</h1>
  <div>msg: {{ msg }}</div>
  <input type="text" v-model="inputValue" />
  <button @click="handleChange">发送</button>
</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const inputValue = ref('')

const props = defineProps({
  msg: String,
})

const emit = defineEmits(['handleChange'])

const handleChange = () => {
  emit('handleChange', inputValue.value)
}
</script>

<style scoped>
.container{
  padding: 10px;
  border: 1px solid #000;
}
</style>