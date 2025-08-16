<template>
<Collapse v-model="openedValue">
    <CollapseItem v-for="item in datas" :key="item.name" :name="item.name" :title="item.title">
      {{ item.content }}
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