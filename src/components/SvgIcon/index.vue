<template>
  <!-- 封装svg icon组件 -->
  <svg class="svg-icon" aria-hidden="true">
    <use :href="symbolId" />
  </svg>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  prefix: {
    type: String,
    default: "icon",
  },
  name: {
    type: String,
    required: true,
  },
});

/** 定义义了一个计算属性 symbolId，它根据 props.prefix 和 props.name 的值动态计算出一个符号的ID*/
const symbolId = computed(() => `#${props.prefix}-${props.name}`);
</script>
<style scoped lang="scss">
.svg-icon {
  width: 1em;
  height: 1em;
  fill: currentColor;
  overflow: hidden;
}
</style>
