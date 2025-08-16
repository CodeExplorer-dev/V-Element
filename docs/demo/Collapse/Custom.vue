<template>
<Collapse v-model="openedValue">
    <CollapseItem name="1">
      <template #title>
        Custom Title1
      </template>
      <div>
        <p>This is a custom content area.</p>
        <p>You can put any HTML content here.</p>
      </div>
    </CollapseItem>
    <CollapseItem name="2">
      <template #title>
        Custom Title2
      </template>
      <div>
        <p>This is a custom content area.</p>
        <p>You can put any HTML content here.</p>
      </div>
    </CollapseItem>
    <CollapseItem name="3">
      <template #title>
        Custom Title3
      </template>
      <div>
        <p>This is a custom content area.</p>
        <p>You can put any HTML content here.</p>
      </div>
    </CollapseItem>
  </Collapse>
</template>

<script setup>
import Collapse from '@/components/Collapse/Collapse.vue'
import CollapseItem from '@/components/Collapse/CollapseItem.vue';
import { ref, reactive } from 'vue';

const openedValue = ref([]);

const datas = reactive([
  { name: 'a', title: 'titleA', content: 'content a' },
  { name: 'b', title: 'titleB', content: 'content b' },
  { name: 'c', title: 'titleC', content: 'content c' }
])
</script>