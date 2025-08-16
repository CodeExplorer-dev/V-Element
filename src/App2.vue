<template>
  <div class="father"> 
    <h1>这是父组件</h1>
    <Child1 :msg="msg" @handleChange="handleChangeFromFather"></Child1>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Child1 from './components/ChildrenTest/Child1.vue'

const msg = ref('Hello World!')
const handleChangeFromFather = (value: string) => {
  msg.value = value
}
</script>

<style scoped>
.father{
  padding: 15px;
  border: 1px solid red;
}
</style>