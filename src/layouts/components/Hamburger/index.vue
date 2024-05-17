<template>
  <div @click="toggleClick">
    <el-icon :size="20" class="icon">
      <Fold v-if="props.isActive" />
      <Expand v-else />
    </el-icon>
  </div>
</template>

<script setup>
import { Expand, Fold } from "@element-plus/icons-vue";

/** 解构赋值来简化对 props 的访问*/
const props = defineProps({
  isActive: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["toggle-click"]);

/** */
const toggleClick = () => {
  emit("toggle-click");
};
</script>
<style scoped></style>
