<template>
  <div h-full uno-padding-20>
    <div h-full text-center flex select-none all:transition-400>
      <div ma>
        <div
          text-5xl
          fw100
          animate-bounce-alt
          animate-count-infinite
          animate-1s
        >
          UnoCSS
        </div>
        <div op30 dark:op60 text-lg fw300 m1>
          该页面是一个 UnoCSS 的使用案例，其他页面依旧采用 Scss
        </div>
        <div
          m2
          flex
          justify-center
          text-lg
          op30
          dark:op60
          hover="op80"
          dark:hover="op80"
        >
          <a
            href="https://antfu.me/posts/reimagine-atomic-css-zh"
            target="_blank"
            >推荐阅读：重新构想原子化 CSS
            <el-icon :size="20" class="icon" style="vertical-align: middle">
              <Position /> </el-icon
          ></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Position } from "@element-plus/icons-vue";
</script>
<style scoped></style>
