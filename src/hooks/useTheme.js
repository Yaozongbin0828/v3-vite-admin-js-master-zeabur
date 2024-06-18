import { ref, watchEffect } from "vue";
import {
  getActiveThemeName,
  setActiveThemeName,
} from "@/utils/cache/localStorage";

const DEFAULT_THEME_NAME = "normal";

const themeList = [
  {
    title: "默认",
    name: DEFAULT_THEME_NAME,
  },
  {
    title: "黑暗",
    name: "dark",
  },
  {
    title: "深蓝",
    name: "dark-blue",
  },
];

const activeThemeName = ref(getActiveThemeName() || DEFAULT_THEME_NAME);

const setTheme = (value) => {
  activeThemeName.value = value;
};

const setHtmlRootClassName = (value) => {
  document.documentElement.className = value;
};

const initTheme = () => {
  watchEffect(() => {
    const value = activeThemeName.value;
    setHtmlRootClassName(value);
    console.log(setHtmlRootClassName(value));
    setActiveThemeName(value);
  });
};

export function useTheme() {
  return { themeList, activeThemeName, initTheme, setTheme };
}
