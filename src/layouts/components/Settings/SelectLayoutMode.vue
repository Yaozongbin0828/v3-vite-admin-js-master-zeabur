<script setup>
import { useLayoutMode } from "@/hooks/useLayoutMode";
import { LayoutModeType } from "@/constants/app-key";

const { isTop, setLayoutMode } = useLayoutMode();
</script>
<template>
  <div class="select-layout-mode">
    <el-tooltip content="顶部模式">
      <el-container
        class="layout-mode top"
        :class="{ active: isTop }"
        @click="setLayoutMode(LayoutModeType.Top)"
      >
        <el-header />
        <el-main />
      </el-container>
    </el-tooltip>
  </div>
</template>

<style lang="scss" scoped>
.select-layout-mode {
  display: flex;
  justify-content: space-between;
}

.layout-mode {
  width: 60px;
  flex-grow: 0;
  overflow: hidden;
  cursor: pointer;
  border-radius: 6px;
  border: 2px solid transparent;
  &:hover {
    border: 2px solid var(--el-color-primary);
  }
}

.active {
  border: 2px solid var(--el-color-primary);
}

.el-header {
  height: 12px;
}

.el-aside {
  width: 16px;
}

.left {
  .el-header {
    background-color: var(--el-fill-color-darker);
  }
  .el-aside {
    background-color: var(--el-color-primary);
  }
  .el-main {
    background-color: var(--el-fill-color-lighter);
  }
}

.top {
  .el-header {
    background-color: var(--el-color-primary);
  }
  .el-main {
    background-color: var(--el-fill-color-lighter);
  }
}

.left-top {
  .el-header {
    background-color: var(--el-fill-color-darker);
  }
  .el-aside {
    background-color: var(--el-color-primary);
  }
  .el-main {
    background-color: var(--el-fill-color-lighter);
  }
}
</style>
