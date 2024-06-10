<script setup>
import { ref } from "vue";
import { useSettingsStore } from "@/store/modules/settings";
import Screenfull from "@/components/Screenfull/index.vue";

const props = defineProps({
  tagRefs: {
    type: Object,
    required: true,
  },
});

const scrollbarContentRef = ref();
const settingsStore = useSettingsStore();
</script>
<template>
  <div class="scroll-container">
    <!-- 标签页 -->
    <div ref="scrollbarContentRef" class="scrollbar-content">
      <slot />
    </div>
    <div class="largeBtn">
      <Screenfull v-if="settingsStore.showScreenfull" :content="true" />
    </div>
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

  .largeBtn {
    width: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
}
</style>
