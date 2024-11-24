<template>
  <div><!-- 全局挂载$notify --></div>
</template>

<script setup>
import { onMounted, getCurrentInstance } from "vue";

/** 等价于ElNotification组件*/
const showElNotification = () => {
  const { appContext } = getCurrentInstance();
  const { config } = appContext;
  /** 挂载到了全局属性$notify上*/
  config.globalProperties.$notify({
    title: "Yaozongbin's v3-vite-admin-js",
    type: "success",
    dangerouslyUseHTMLString: true,
    message:
      "<p>项目还在完善中,可以先看看以下作品!<a style='color: teal' target='_blank' href='https://yaozongbin.pages.dev/'>个人博客</a> <a style='color: teal' target='_blank' href='https://jquery.zeabur.app/'>数字记忆训练</a><br><a style='color: teal' target='_blank' href='https://iphone14-pro.zeabur.app/'>仿灵动岛动画</a> <a style='color: teal' target='_blank' href='https://react-todolist.zeabur.app/'>React-Todolist</a> </p>",
    duration: 5000,
    position: "bottom-right",
  });
};

/** 使用Vue中onMounted钩子函数来在组件加载完成后调用*/
onMounted(() => {
  showElNotification();
});
</script>
<style scoped></style>
