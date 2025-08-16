<template>
<Alert title="Info Alert" :closable="false" />
<Alert title="Primary Alert" type="primary" :closable="false"/>
<Alert title="Success Alert" type="success" :closable="false"/>
<Alert title="warning Alert" type="warning" :closable="false"/>
<Alert title="Danger Alert" type="danger" :closable="false"/>
</template>

<script setup>
import Alert from '@/components/Alert/Alert.vue'
</script>