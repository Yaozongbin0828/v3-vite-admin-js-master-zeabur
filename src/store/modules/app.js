import { reactive, ref } from "vue";
import { defineStore } from "pinia";
import { getSidebarStatus, setSidebarStatus } from "@/utils/cache/localStorage";

/** 定义移动设备和桌面设备*/
export const DeviceType = {
  Mobile: 0,
  Desktop: 1,
};

export const useAppStore = defineStore("app", () => {
  // 侧边栏的状态和是否需要动画
  const sidebar = reactive({
    opened: getSidebarStatus() !== "closed",
    withoutAnimation: false,
  });
  // 用于表示当前设备类型，默认为桌面设备
  const device = ref(DeviceType.Desktop);

  //用于切换侧边栏的状态，并根据状态设置相应的动画选项，并使用工具函数将侧边栏状态保存到本地缓存中
  const toggleSidebar = (withoutAnimation) => {
    sidebar.opened = !sidebar.opened;
    sidebar.withoutAnimation = withoutAnimation;
    if (sidebar.opened) {
      setSidebarStatus("opened");
    } else {
      setSidebarStatus("closed");
    }
  };

  //用于关闭侧边栏，并设置相应的动画选项，并使用工具函数将侧边栏状态保存到本地缓存中
  const closeSidebar = (withoutAnimation) => {
    sidebar.opened = false;
    sidebar.withoutAnimation = withoutAnimation;
    setSidebarStatus("closed");
  };

  //用于切换设备类型
  const toggleDevice = (value) => {
    device.value = value;
  };

  return { device, sidebar, toggleSidebar, toggleDevice, closeSidebar };
});
