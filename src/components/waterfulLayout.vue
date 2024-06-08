<template>
  <div class="waterfall pb-6 px-2 py-2">
    <div class="waterfall-column" v-for="(column, i) in columns" :key="i">
      <div class="waterfall-item" v-for="item in column" :key="item.id">
        <slot :item="item"></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import {computed } from 'vue';

// 定义 props
const props = defineProps({
  items: {
    type: Array,
    default: () => [],
  },
  columnsCount: {
    type: Number,
    default: 2,
  },
});

// 计算每列的 items
const columns = computed(() => {
  const cols = Array.from({ length: props.columnsCount }, () => []);
  props.items.forEach((item, i) => cols[i % props.columnsCount].push(item));
  return cols;
});

</script>

<style scoped lang="scss">
.waterfall {
  display: flex;
  justify-content: space-between;
}
.waterfall-column {
  width: calc(100% / 2 - 4px);
}
.waterfall-item {
  margin-bottom: 4px;
}
</style>