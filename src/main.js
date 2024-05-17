import { createApp } from "vue";
import App from "./App.vue";
/** 定义路由*/
import router from "@/router/index";
/** 路由守卫*/
import "@/router/permission";

//css
import "@/styles/index.scss";
import "element-plus/dist/index.css";
import "element-plus/theme-chalk/dark/css-vars.css";
import "virtual:uno.css";

/** 引入pinia */
import store from "@/store";

/** 插件 */
import { loadPlugins } from "@/plugins";
import { loadSvg } from "@/icons";

const app = createApp(App);
/** 加载插件 */
loadPlugins(app);
loadSvg(app);
/** 加载pinia*/
app.use(store);
/** 加载路由 */
app.use(router);
app.mount("#app");
