import { computed } from "vue";
import { useSettingsStore } from "@/store/modules/settings";
import { LayoutModeType } from "@/constants/app-key";

const settingsStore = useSettingsStore();
const isLeft = computed(() => settingsStore.layoutMode === LayoutModeType.Left);
const isTop = computed(() => settingsStore.layoutMode === LayoutModeType.Top);
const isLeftTop = computed(
  () => settingsStore.layoutMode === LayoutModeType.LeftTop
);

const setLayoutMode = (mode) => {
  settingsStore.setLayoutMode(mode);
};


export function useLayoutMode() {
  return {
    isLeft,
    isTop,
    isLeftTop,
    setLayoutMode,
  };
}
