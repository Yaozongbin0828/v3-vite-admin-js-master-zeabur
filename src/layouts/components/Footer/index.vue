<template>
  <footer class="layout-footer">
    <a href="https://github.com/yaozongbin/v3-vite-admin-js-master">
      MIT © 2023-PRESENT @yaozongbin
    </a>
  </footer>
</template>

<script setup>
const VITE_APP_TITLE = import.meta.env.VITE_APP_TITLE;
console.log(" MIT © 2023-PRESENT @yaozongbin" + " " + VITE_APP_TITLE);
</script>
<style scoped lang="scss">
.layout-footer {
  width: 100%;
  height: var(--v3-footer-height);
  min-height: var(--v3-footer-height);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #a1a4ab;
  background-color: var(--v3-footer-background-color);
  box-shadow: 2px -2px 3px 0 rgba(0, 0, 0, 0.062745098),
    0 0 3px 0 rgba(0, 0, 0, 0.062745098);
  a {
    font-size: 14px;
  }

  a:hover {
    color: rgba(0, 0, 0, 0.8);
    transition: all 0.5s;
  }
}
</style>
