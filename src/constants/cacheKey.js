const SYSTEM_NAME = "v3-vite-admin";

/** 缓存用户使用数据时的用到的key*/
/** 用于定义系统中缓存数据时所使用的键名，通过将键名统一定义在一个类中，可以方便地管理和维护这些键名。*/

class CacheKey {
  //token
  static TOKEN = `${SYSTEM_NAME}-token-key`;
  //侧边栏
  static SIDEBAR_STATUS = `${SYSTEM_NAME}-sidebar-status-key`;
  //主题
  static ACTIVE_THEME_NAME = `${SYSTEM_NAME}-active-theme-name-key`;
  //布局
  static CONFIG_LAYOUT = `${SYSTEM_NAME}-config-layout-key`;
}

export default CacheKey;
