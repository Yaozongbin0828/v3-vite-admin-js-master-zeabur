<template>
  <el-breadcrumb class="app-breadcrumb">
    <el-breadcrumb-item v-for="(item, index) in breadcrumbs" :key="item.path">
      <span
        v-if="
          item.redirect === 'noredirect' || index === breadcrumbs.length - 1
        "
        class="no-redirect"
      >
        {{ item.meta.title }}
      </span>
      <a v-else @click.prevent="handleLink(item)" href="">
        {{ item.meta.title }}
      </a>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup>
import { ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { compile } from "path-to-regexp";

const route = useRoute();
const router = useRouter();

const breadcrumbs = ref([]);

/** 根据路由信息来过滤出面包屑导航需要显示的内容*/
const getBreadcrumbs = () => {
  breadcrumbs.value = route.matched.filter((item) => {
    return item.meta && item.meta.title && item.meta.breadcrumb !== false;
  });
};

// const getBreadcrumbs = () => {
//     const { matched } = route;
//     const validItems = matched.filter(({ meta }) => meta?.title && meta?.breadcrumb !== false);
//     breadcrumbs.value = validItems;
// }

/** 将路径模板编译成实际路径*/
const pathCompile = (path) => {
  const { params } = route;
  const toPath = compile(path);
  return toPath(params);
};

/** 定义一个函数接收item*/
const handleLink = (item) => {
  const { redirect, path } = item;
  /** 是否重定向*/
  if (redirect) {
    router.push(redirect);
    return;
  }
  router.push(pathCompile(path));
};

/** 监听路由变化，更新面包屑导航信息 */
watch(
  () => route.path,
  (path) => {
    if (path.startsWith("/redirect/")) {
      return;
    }
    getBreadcrumbs();
  }
);

getBreadcrumbs();
</script>
<style scoped lang="scss">
.el-breadcrumb__inner,
.el-breadcrumb__inner a {
  font-weight: 400 !important;
}

.app-breadcrumb.el-breadcrumb {
  display: inline-block;
  font-size: 14px;
  line-height: var(--v3-navigationbar-height);
  margin-left: 8px;

  .no-redirect {
    color: #97a8be;
    cursor: text;
  }
}
</style>
