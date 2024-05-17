/** 统一处理 localStorage */
/** 保存用户偏好设置*/

import CacheKey from "@/constants/cacheKey";

/** 侧边栏状态*/
export const getSidebarStatus = () => {
  return localStorage.getItem(CacheKey.SIDEBAR_STATUS);
};

export const setSidebarStatus = (sidebarStatus) => {
  localStorage.setItem(CacheKey.SIDEBAR_STATUS, sidebarStatus);
};
