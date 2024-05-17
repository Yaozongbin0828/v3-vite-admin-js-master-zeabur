<script setup>
import { isExternal } from "@/utils/validate";

const props = defineProps({
  to: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <a
    v-if="isExternal(props.to)"
    :href="props.to"
    target="_blank"
    rel="noopener"
  >
    <!-- rel="noopener" 
    当rel属性的值设置为noopener时,
    它告诉浏览器在打开链接时要创建一个新的浏览上下文,
    并确保新打开的页面不会访问打开它的页面的window对象。
    -->
    <slot />
  </a>
  <router-link v-else :to="props.to">
    <slot />
  </router-link>
</template>
