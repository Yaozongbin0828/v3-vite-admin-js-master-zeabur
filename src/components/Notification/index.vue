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
      "<p>项目还在完善中,可以先看看以下作品!<a style='color: teal' target='_blank' href='https://yaozongbin.pages.dev/'>个人博客</a> <a style='color: teal' target='_blank' href='https://yaozongbiniphone14pro.zeabur.app/'>灵动岛</a> </p>",
    duration: 0,
    position: "bottom-right",
  });
};

/** 使用Vue中onMounted钩子函数来在组件加载完成后调用*/
onMounted(() => {
  showElNotification();
});
</script>
<style scoped></style>
