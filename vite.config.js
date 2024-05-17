import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
//引入node.js内置模块path
/** Vite3.0版本以下写法*/
// const path = require('path');
/**  Vite3.0版本以上ES6写法*/
import path from "path";
/** 引入vite-plugin-svg-icons插件*/
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
/** 引入vite-svg-loader插件*/
import svgLoader from "vite-svg-loader";
/** 引入unocss*/
import UnoCss from "unocss/vite";

// https://vitejs.dev/config/
export default defineConfig({
  /** 设置打包路径部署到Github Page和Zeabur上*/
  base: "./",
  // base: "/v3-vite-admin-js-master/",
  // base: VITE_PUBLIC_PATH,
  build: {
    /** 单个 chunk 文件的大小超过 2048KB 时发出警告 */
    chunkSizeWarningLimit: 2048,
    /** 禁用 gzip 压缩大小报告 */
    reportCompressedSize: false,
    /** 设置打包名称docs*/
    outDir: "docs",
  },
  server: {
    /** 设置host:true 才可以使用Network的形式，以IP访问项目*/
    host: true, // host:"0.0.0.0"
    /** 端口号*/
    port: 8888,
    /** 是否自动打开浏览器*/
    open: false,
    /** 跨域设置允许 */
    cors: true,
    /** 端口被占用时，是否直接退出*/
    strictPort: false,
    /** 接口代理*/
    proxy: {
      "/api/v1": {
        target: "https://mock.mengxuegu.com/mock/63218b5fb4c53348ed2bc212",
        ws: true,
        /** 是否允许跨域*/
        changeOrigin: true,
      },
    },
    /** 预热常用文件，提高初始页面加载速度 */
    warmup: {
      clientFiles: ["./src/layouts/**/*.vue"],
    },
  },
  plugins: [
    vue(),
    /** Unocss*/
    UnoCss(),
    /** 将 SVG 静态图转化为 Vue 组件 */
    svgLoader({ defaultImport: "url" }),
    /** SVG */
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), "src/icons/svg")],
      symbolId: "icon-[dir]-[name]",
    }),
  ],
  resolve: {
    //配置路径别名@
    alias: {
      "~": path.resolve(__dirname, "./"),
      "@": path.resolve(__dirname, "./src"),
    },
    //自动补全的文件扩展名列表
    extensions: [".js", ".ts", ".jsx", ".tsx", ".json", ".vue"],
  },
});
