import ElementPlus from "element-plus";

export function loadElementPlus(app) {
  /** Element Plus 组件完整引入 */
  app.config.globalProperties.$notify = ElementPlus.ElNotification;
  app.use(ElementPlus);
}
