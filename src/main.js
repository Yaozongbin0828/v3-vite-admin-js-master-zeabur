import { createApp } from "vue";
import App from "./App.vue";
import router from "@/router/index";
import "@/router/permission";

//css
import "@/styles/index.scss";
import "element-plus/dist/index.css";
import "element-plus/theme-chalk/dark/css-vars.css";
import "virtual:uno.css";

import store from "@/store";

/** Plugins */
import { loadPlugins } from "@/plugins";
import { loadSvg } from "@/icons";

const app = createApp(App);
loadPlugins(app);
loadSvg(app);
app.use(store);
app.use(router);
app.mount("#app");
