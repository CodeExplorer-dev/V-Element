<template>
<Input v-model="inputValue" type="text" placeholder="请输入" size="large"></Input>
<Input v-model="inputValue" type="text" placeholder="请输入" ></Input>
<Input v-model="inputValue" type="text" placeholder="请输入" size="small"></Input>
</template>

<script setup>
import Input from '@/components/Input/Input.vue'
import { ref } from 'vue';
const inputValue = ref('')
</script>