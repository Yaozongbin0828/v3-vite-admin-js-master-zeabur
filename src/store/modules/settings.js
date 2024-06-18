import { ref } from "vue";
import { defineStore } from "pinia";
import layoutSettings from "@/config/layout";

export const useSettingsStore = defineStore("settings", () => {
  const layoutMode = ref(layoutSettings.layoutMode);
  const fixedHeader = ref(layoutSettings.fixedHeader);
  const fixedFooter = ref(layoutSettings.fixedFooter);
  const showSettings = ref(layoutSettings.showSettings);
  const showTagsView = ref(layoutSettings.showTagsView);
  const showSidebarLogo = ref(layoutSettings.showSidebarLogo);
  const showNotify = ref(layoutSettings.showNotify);
  const showThemeSwitch = ref(layoutSettings.showThemeSwitch);
  const showScreenfull = ref(layoutSettings.showScreenfull);
  const showGreyMode = ref(layoutSettings.showGreyMode);
  const showColorWeakness = ref(layoutSettings.showColorWeakness);

  const setLayoutMode = (newLayoutMode) => {
    layoutMode.value = newLayoutMode;
    console.log(newLayoutMode);
  };

  return {
    setLayoutMode,
    layoutMode,
    fixedHeader,
    fixedFooter,
    showSettings,
    showTagsView,
    showSidebarLogo,
    showNotify,
    showThemeSwitch,
    showScreenfull,
    showGreyMode,
    showColorWeakness,
  };
});
