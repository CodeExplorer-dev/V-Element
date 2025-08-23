<template>
<Button @click="showMessage">
  Show Message
</Button>
</template>

<script setup>
import { createMessage } from '@/components/Message/methods.ts'
import Button from '@/components/Button/Button.vue'

const showMessage = () => {
  createMessage({ message: 'Hello World'})
}
</script>