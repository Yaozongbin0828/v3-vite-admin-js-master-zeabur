<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
// import { useTagsViewStore } from "@/store/modules/tags-view"

const route = useRoute();
// const tagsViewStore = useTagsViewStore()

const key = computed(() => {
  return route.path;
});
</script>

<template>
  <section class="app-main">
    <div class="app-scrollabr">
      <!-- key 采用 route.path 和 route.fullPath 有着不同的效果，大多数时候 path 更通用 -->
      <router-view v-slot="{ Component }">
        <transition name="fade-transform" mode="out-in">
          <keep-alive>
            <component :is="Component" :key="key" class="app-container-grow" />
          </keep-alive>
        </transition>
      </router-view>
    </div>
    <!-- 返回顶部 -->
    <el-backtop :right="50" :bottom="50" />
  </section>
</template>

<style lang="scss" scoped>
@import "@/styles/mixins.scss";

.fixed-header + .app-main {
  padding-top: var(--v3-header-height);
  margin-bottom: var(--v3-footer-height);
  height: 100vh;
  overflow: auto;
}

.app-main {
  min-height: calc(100vh - var(--v3-navigationbar-height));
  width: 100%;
  position: relative;
  overflow: auto;
  background-color: var(--v3-body-bg-color);
  .app-scrollabr {
    flex-grow: 1 !important;
    overflow: auto;
    display: flex;
    flex-direction: column;
    height: 100%;

    .app-container-grow {
      flex-grow: 1;
    }
  }
}
</style>
