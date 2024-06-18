/** 统一处理 localStorage */
/** 保存用户偏好设置*/
import CacheKey from "@/constants/cacheKey";

/** 布局配置*/

/** 侧边栏状态*/
export const getSidebarStatus = () => {
  return localStorage.getItem(CacheKey.SIDEBAR_STATUS);
};

export const setSidebarStatus = (sidebarStatus) => {
  localStorage.setItem(CacheKey.SIDEBAR_STATUS, sidebarStatus);
};

/** 侧边栏end*/

//#region 正在应用的主题名称
export const getActiveThemeName = () => {
  return localStorage.getItem(CacheKey.ACTIVE_THEME_NAME || null);
};

export const setActiveThemeName = (themeName) => {
  localStorage.setItem(CacheKey.ACTIVE_THEME_NAME, themeName);
};

//#endregion
