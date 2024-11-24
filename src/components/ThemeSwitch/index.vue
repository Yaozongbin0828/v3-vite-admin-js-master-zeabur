<script setup>
import { onMounted } from "vue";
import { useTheme } from "@/hooks/useTheme";
import { Sunny } from "@element-plus/icons-vue";

const { themeList, activeThemeName, setTheme, initTheme } = useTheme();

const handleChangeTheme = (event, themeName) => {
  const clientX = event.clientX;
  const clientY = event.clientY;
  const maxRadius = Math.hypot(
    Math.max(clientX, window.innerWidth - clientX),
    Math.max(clientY, window.innerHeight - clientY)
  );

  const style = document.documentElement.style;
  style.setProperty("--v3-theme-x", `${clientX}px`);
  style.setProperty("--v3-theme-y", `${clientY}px`);
  style.setProperty("--v3-theme-r", `${maxRadius}px`);

  const handler = () => {
    document.body.classList.add("theme-transition");
    setTimeout(() => {
      setTheme(themeName);
      document.body.classList.remove("theme-transition");
    }, 500);
  };

  document.startViewTransition
    ? document.startViewTransition(handler)
    : handler();
};

// 初始化主题
onMounted(() => {
  initTheme();
});
</script>

<template>
  <div>
    <el-dropdown trigger="click">
      <div>
        <el-tooltip effect="dark" content="主题模式" placement="bottom">
          <el-icon :size="20">
            <Sunny />
          </el-icon>
        </el-tooltip>
      </div>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item
            v-for="(theme, index) in themeList"
            :key="index"
            :disabled="activeThemeName === theme.name"
            @click="handleChangeTheme($event, theme.name)"
          >
            <span>{{ theme.title }}</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>
