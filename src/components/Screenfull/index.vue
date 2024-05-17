<script setup>
import { ref, onUnmounted, onBeforeUnmount, onMounted } from "vue";
import { ElMessage } from "element-plus";
import screenfull from "screenfull"; //不支持iPhone机型
import { useFullscreen } from "@vueuse/core";

const props = defineProps({
  /** 全屏的元素，默认是 html */
  element: {
    type: String,
    default: "html",
  },
  /** 打开全屏提示语 */
  openTips: {
    type: String,
    default: "全屏",
  },
  /** 关闭全屏提示语 */
  exitTips: {
    type: String,
    default: "退出全屏",
  },
});

/** 创建一个响应式的tips变量，初始值为props.openTips*/
const tips = ref(props.openTips);
/**  创建一个响应式的isFullscreen变量，初始值为false*/
const isFullScreen = ref(false);
/** @vueuse/core */
// const { isFullscreen, enter, exit } = useFullscreen();

////////////////////////////////////////////////////////////
const clickFullscreen = () => {
  /** 根据props.element的值来选择相应的元素，如果找到匹配的元素，则将其赋值给dom变量，否则将dom设置为undefined*/
  const dom = document.querySelector(props.element) || undefined;
  if (!screenfull.isEnabled) {
    ElMessage.warning("您的浏览器无法工作");
    return;
  }
  /** 调用screenfull库的toggle方法配合dom来切换全屏状态*/
  screenfull.toggle(dom);
};

/** 定义了一个change函数，用于在全屏状态发生变化时更新isFullscreen和tips的值*/
const change = () => {
  isFullscreen.value = screenfull.isFullscreen;
  tips.value = screenfull.isFullscreen ? props.exitTips : props.openTips;
};

/** 使用screenfull库的on方法来监听全屏状态的变化，并在变化时调用change函数。*/
screenfull.on("change", change);

/** 在组件卸载时，使用onUnmounted钩子来清除全屏状态的监听*/
onUnmounted(() => {
  if (screenfull.isEnabled) {
    screenfull.off("change", change);
  }
});

/** 原生JS API实现*/
// const toggleScreenFull = () => {
//   let elem = document.documentElement;
//   if (elem.requestFullscreen) {
//     elem.requestFullscreen(); // 全屏请求
//   } else if (elem.mozRequestFullScreen) {
//     elem.mozRequestFullScreen(); // Firefox
//   } else if (elem.webkitRequestFullscreen) {
//     elem.webkitRequestFullscreen(); // Chrome, Safari and Opera
//   } else if (elem.msRequestFullscreen) {
//     elem.msRequestFullscreen(); // IE/Edge
//   }
// };

// const requestFullScreen = () => {
//   const elem = document.documentElement;
//   if (elem.requestFullscreen) {
//     elem.requestFullscreen();
//   } else if (elem.mozRequestFullScreen) {
//     elem.mozRequestFullScreen();
//   } else if (elem.webkitRequestFullscreen) {
//     elem.webkitRequestFullscreen();
//   } else if (elem.msRequestFullscreen) {
//     elem.msRequestFullscreen();
//   }
// };

// const exitFullScreen = () => {
//   if (document.exitFullscreen) {
//     document.exitFullscreen();
//   } else if (document.mozCancelFullScreen) {
//     document.mozCancelFullScreen();
//   } else if (document.webkitExitFullscreen) {
//     document.webkitExitFullscreen();
//   } else if (document.msExitFullscreen) {
//     document.msExitFullscreen();
//   }
// };

// const handleFullScreenChange = () => {
//   isFullScreen.value =
//     document.fullscreenElement ||
//     document.webkitFullscreenElement ||
//     document.mozFullScreenElement ||
//     document.msFullscreenElement;
// };

// onMounted(() => {
//   document.addEventListener("fullscreenchange", handleFullScreenChange);
//   document.addEventListener("webkitfullscreenchange", handleFullScreenChange);
//   document.addEventListener("mozfullscreenchange", handleFullScreenChange);
//   document.addEventListener("MSFullscreenChange", handleFullScreenChange);
//   requestFullScreen(), exitFullScreen();
// });

// onBeforeMount(() => {
//   document.removeEventListener("fullscreenchange", handleFullScreenChange);
//   document.removeEventListener(
//     "webkitfullscreenchange",
//     handleFullScreenChange
//   );
//   document.removeEventListener("mozfullscreenchange", handleFullScreenChange);
//   document.removeEventListener("MSFullscreenChange", handleFullScreenChange);
// });
</script>

<template>
  <!-- 依赖screenfull.js实现 (不支持iPhone机型的Safari浏览器)-->
  <div @click="clickFullscreen">
    <el-tooltip effect="dark" :content="tips" placement="bottom">
      <svg-icon :name="isFullScreen ? 'fullscreen-exit' : 'fullscreen'" />
    </el-tooltip>
  </div>

  <!-- @vueuse/core -->
  <!-- <div @click="toggleFullScreen">
    <el-tooltip effect="dark" :content="tips" placement="bottom">
      <svg-icon :name="isFullScreen ? 'fullscreen-exit' : 'fullscreen'" />
    </el-tooltip>
  </div> -->

  <!-- 原生JS API实现 (直接操作dom 不符合Vue规则)-->
  <!-- <div @click="toggleScreenFull">
    <el-tooltip effect="dark" :content="tips" placement="bottom">
      <svg-icon :name="isFullScreen ? 'fullscreen-exit' : 'fullscreen'" />
    </el-tooltip>
  </div> -->
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
