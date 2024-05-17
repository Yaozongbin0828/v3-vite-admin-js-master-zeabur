<script setup>
import { computed, ref, watch, nextTick } from "vue";
// import { useRoute } from "vue";
// import { ELScrollbar } from "element-plus";
// import { ArrowLeft, ArrowRight } from "@element-plus/icons-vue";
import { useSettingsStore } from "@/store/modules/settings";
import Screenfull from "@/components/Screenfull/index.vue";

const props = defineProps({
  tagRefs: {
    type: Object,
    required: true,
  },
});

const scrollbarRef = ref();
const scrollbarContentRef = ref();

// const route = useRoute();
const settingsStore = useSettingsStore();

const showScreenfull = computed(() => {
  return settingsStore.showScreenfull;
});
</script>
<template>
  <div class="scroll-container">
    <!-- 标签页 -->
    <div ref="scrollbarContentRef" class="scrollbar-content">
      <slot />
    </div>

    <Screenfull
      v-if="showScreenfull"
      element=".app-main"
      class="screenfull"
      openTips="内容区域全屏"
    />
  </div>
</template>

<style lang="scss" scoped>
.scroll-container {
  height: 100%;
  user-select: none;
  display: flex;
  justify-content: space-between;

  .scrollbar-content {
    display: inline-block;
  }

  .screenfull {
    width: 40px;
    vertical-align: middle;
    position: fixed;
    top: 55px;
    right: 0;
    vertical-align: middle;
    cursor: pointer;
  }
}
</style>
