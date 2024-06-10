<script setup>
import { ref } from "vue";
import { TurnOff } from "@element-plus/icons-vue";

const props = defineProps({
  panelContent: {
    type: String,
    default: "主题配置",
  },
});

const isShow = ref(false);
</script>
<template>
  <div class="handle-button" @click="isShow = true">
    <el-tooltip :content="panelContent" placement="top">
      <el-icon :size="24">
        <TurnOff />
      </el-icon>
    </el-tooltip>

    <el-drawer v-model="isShow" size="300px" :with-header="false">
      <slot />
    </el-drawer>
  </div>
</template>

<style lang="scss" scoped>
.handle-button {
  width: 20px;
  height: 20px;
  cursor: pointer;
  pointer-events: auto;
  color: #8a8a8a;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
}
</style>
