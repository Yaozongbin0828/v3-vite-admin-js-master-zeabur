<template>
  <div class="error-page">
    <div class="error-page-svg">
      <slot />
    </div>
    <router-link to="/">
      <el-button type="primary">回到首页</el-button>
    </router-link>
  </div>
</template>

<script setup></script>
<style scoped lang="scss">
/** 错误页面设置*/
.error-page {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 160px;

  &-svg {
    width: 400px;
    margin-bottom: 50px;
  }
}
</style>
