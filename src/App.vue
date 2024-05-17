<template>
  <div>
    <!-- 自定义命名空间 -->
    <ElConfigProvider :locale="locale">
      <Notification />
      <router-view />
    </ElConfigProvider>
  </div>
</template>

<script setup>
import zhCn from "element-plus/lib/locale/lang/zh-cn";
import Notification from "@/components/Notification/index.vue";
const locale = zhCn;
</script>

<style scoped></style>
