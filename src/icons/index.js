import SvgIcon from "@/components/SvgIcon/index.vue"; // Svg Component
import "virtual:svg-icons-register"; //  Vite 插件 vite-plugin-icons 的虚拟导入来注册 SVG 图标

/** svg文件在iconfont下载*/
/** 导出并且注册全局的 SvgIcon 组件*/
export function loadSvg(app) {
  app.component("SvgIcon", SvgIcon);
}
