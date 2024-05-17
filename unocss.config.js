import { defineConfig, presetUno, presetAttributify, transformerDirectives } from "unocss";
// import presetRemToPx from "@unocss/preset-rem-to-px";

export default defineConfig({
  //自定义规则
  rules: [],
  //预设规则 有前两个预设可以满足95%以上的需求
  presets: [
    //默认预设，包括Tailwind CSS、Windi CSS、Bootstrap、Tachyons，可以使用以上任意规则
    presetUno(),
    //属性化模式 文档参考：https://unocss.nodejs.cn/presets/attributify
    presetAttributify(), 

    // 启用rem转px
    // presetRemToPx({
    //   //默认情况下（1单位 = 0.25rem）html默认字体是16，改为4，每单位就是1px
    //   baseFontSize: 4 
    // })
  ],
  //配置后可以使用 @apply、@screen等指令 参考地址：https://unocss.nodejs.cn/transformers/directives
  transformers: [transformerDirectives()],
  //以下可以按个人需求添加
  shortcuts: {
    "f-c-c": "flex justify-center items-center"
  },
  theme: {},
});

