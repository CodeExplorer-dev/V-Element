<template>
<Alert>
  <template #title>
    <p>自定义内容</p>
  </template>
</Alert>

<Alert type="success" effect="dark" closable>
  <template #title>
    <strong>自定义内容</strong>
  </template>
</Alert>
</template>

<script setup>
import Alert from '@/components/Alert/Alert.vue'
</script>