<template>
<Button @click="open1">Primary</Button>
<Button @click="open2">Success</Button>
<Button @click="open3">Info</Button>
<Button @click="open4">Warning</Button>
<Button @click="open5">Danger</Button>
</template>

<script setup>
import { createMessage } from '@/components/Message/methods.ts'
import Button from '@/components/Button/Button.vue'

const open1 = () => { createMessage({ message: 'This is a primary message', type: 'primary' }) }
const open2 = () => { createMessage({ message: 'This is a success message', type: 'success' }) }
const open3 = () => { createMessage({ message: 'This is a info message', type: 'info' }) }
const open4 = () => { createMessage({ message: 'This is a warning message', type: 'warning' }) }
const open5 = () => { createMessage({ message: 'This is a danger message', type: 'danger' }) }
</script>