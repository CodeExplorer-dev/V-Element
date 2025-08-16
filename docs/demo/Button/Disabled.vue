<template>
  <div class="button_box">
    <Button disabled>Default</Button>
    <Button type="primary" disabled>Primary</Button>
    <Button type="success" disabled>Success</Button>
    <Button type="info" disabled>Info</Button>
    <Button type="warning" disabled>Warning</Button>
    <Button type="danger" disabled>Danger</Button>
  </div>

  <div class="button_box">
    <Button plain disabled>Default</Button>
    <Button type="primary" plain disabled>Primary</Button>
    <Button type="success" plain disabled>Success</Button>
    <Button type="info" plain disabled>Info</Button>
    <Button type="warning" plain disabled>Warning</Button>
    <Button type="danger" plain disabled>Danger</Button>
  </div>
</template>

<script setup>
import Button from '@/components/Button/Button.vue'
</script>