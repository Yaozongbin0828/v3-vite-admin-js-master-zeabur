<script setup>
import { useTheme } from "@/hooks/useTheme";
import { Sunny } from "@element-plus/icons-vue";

const { themeList, activeThemeName, setTheme } = useTheme();

const handleChangeTheme = (event, themeName) => {
  const clientX = event.clientX;
  const clientY = event.clientY;
  const maxRadius = Math.hypot(
    Math.max(clientX, window.innerWidth - clientX),
    Math.max(clientY, window.innerHeight - clientY)
  );

  const style = document.documentElement.style;
  console.log(style);
  style.setProperty("--v3-theme-x", clientX + "px");
  style.setProperty("--v3-theme-y", clientY + "px");
  style.setProperty("--v3-theme-r", maxRadius + "px");
  const handler = () => {
    setTheme(themeName);
    // console.log(themeName);
  };
  document.startViewTransition
    ? document.startViewTransition(handler)
    : handler();
};
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
            @click="($event) => handleChangeTheme($event, theme.name)"
          >
            <span>{{ theme.title }}</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<style scoped>
/* 如果需要添加样式，则在这里添加 */
</style>
