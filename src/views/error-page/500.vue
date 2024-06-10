<script setup>
import ErrorPageLayout from "./components/ErrorPageLayout.vue";

import Svg500 from "@/assets/error-page/500.svg?component"; // vite-svg-loader 插件的功能
</script>
<template>
  <ErrorPageLayout>
    <Svg500 />
  </ErrorPageLayout>
</template>

<style scoped></style>
