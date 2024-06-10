<script setup>
import { ref, computed, watchEffect } from "vue";
import { ElMessage } from "element-plus";
import screenfull from "screenfull";

const props = defineProps({
  element: {
    type: String,
    default: "html",
  },

  openTips: {
    type: String,
    default: "全屏",
  },

  exitTips: {
    type: String,
    default: "退出全屏",
  },

  contentOpenTips: {
    type: String,
    default: "内容页放大",
  },

  contentExitTips: {
    type: String,
    default: "内容页复原",
  },

  content: {
    type: Boolean,
    default: false,
  },
});

//#region 全屏
const isFullscreen = ref(false);

const fullscreenTips = computed(() => {
  return isFullscreen.value ? props.exitTips : props.openTips;
});

const fullscreenSvgName = computed(() => {
  return isFullscreen.value ? "fullscreen-exit" : "fullscreen";
});

const handleFullscreenClick = () => {
  const dom = document.querySelector(props.element) || undefined;
  screenfull.isEnabled
    ? screenfull.toggle(dom)
    : ElMessage.warning("您的浏览器无法工作");
};

const handleFullscreenChange = () => {
  isFullscreen.value = screenfull.isFullscreen;
  // 退出全屏时清除所有的 class
  isFullscreen.value || (document.body.className = "");
};

watchEffect((onCleanup) => {
  // 挂载组件时自动执行
  screenfull.isEnabled && screenfull.on("change", handleFullscreenChange);
  // 卸载组件时自动执行
  onCleanup(() => {
    screenfull.isEnabled && screenfull.off("change", handleFullscreenChange);
  });
});
//#regionend

//#region 内容区全屏
const isContentLarge = ref(false);
const ContentLargeTips = computed(() => {
  return isContentLarge.value ? props.contentExitTips : props.contentOpenTips;
});

const contentLargeSvgName = computed(() => {
  return isContentLarge.value ? "fullscreen-exit" : "fullscreen";
});

const handleContentLargeClick = () => {
  isContentLarge.value = !isContentLarge.value;
  // 内容区放大时，将不需要的组件隐藏
  document.body.className = isContentLarge.value ? "content-large" : "";
};

//#endregion
</script>

<template>
  <!-- 全屏 -->
  <el-tooltip
    v-if="!content"
    effect="dark"
    :content="fullscreenTips"
    placement="bottom"
  >
    <svg-icon :name="fullscreenSvgName" @click="handleFullscreenClick" />
  </el-tooltip>

  <!-- 内容区放大 -->
  <el-tooltip
    v-else
    effect="dark"
    :content="ContentLargeTips"
    placement="bottom"
  >
    <svg-icon :name="contentLargeSvgName" @click="handleContentLargeClick" />
  </el-tooltip>
</template>

<style lang="scss" scoped>
.svg-icon {
  font-size: 20px;
  cursor: pointer;
  vertical-align: middle;
  text-align: center;
  margin: 0 15px 0 0;
  &:focus {
    outline: none;
  }
}
</style>
