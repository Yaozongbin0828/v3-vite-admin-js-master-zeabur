<script setup>
import { computed } from "vue";
import { useRouter } from "vue-router";
import { useAppStore } from "@/store/modules/app";
import { UserFilled } from "@element-plus/icons-vue";
import { useUserStore } from "@/store/modules/user";

import Breadcrumb from "../Breadcrumb/index.vue";
import Hamburger from "../Hamburger/index.vue";
import Screenfull from "@/components/Screenfull/index.vue";
import Notify from "@/components/Notify/index.vue";

/** vite-svg-loader 插件的功能 svg转化为组件形式*/
import Github from "@/icons/svg/github-nav.svg?component";
import Gitee from "@/icons/svg/gitee-nav.svg?component";
import Blog from "@/icons/svg/blog-nav.svg?component";
import Logout from "@/icons/svg/logout.svg?component";

const appStore = useAppStore();
const userStore = useUserStore();
const router = useRouter();

const sidebar = computed(() => {
  return appStore.sidebar;
});

/** Sidebar默认为false*/
const toggleSidebar = () => {
  appStore.toggleSidebar(false);
};

/** 退出登录返回到登录页面*/
const logout = () => {
  userStore.logout();
  router.push("/login");
};
</script>
<template>
  <div class="navigation-bar">
    <!-- 隐藏/显示按钮 -->
    <Hamburger
      :is-active="sidebar.opened"
      class="hamburger"
      @toggle-click="toggleSidebar"
    />
    <!-- 面包屑导航 -->
    <Breadcrumb class="breadcrumb" />
    <!-- 右边组件 -->
    <div class="right-menu">
      <!-- Screenfull 全屏-->
      <Screenfull />
      <!-- ThemeSwitch 主题切换 -->
      <!-- Notify 通知 -->
      <Notify />
      <el-dropdown class="right-menu-item">
        <!-- 用户名 头像 -->
        <div class="right-menu-avatar">
          <el-avatar :icon="UserFilled" :size="30" />
          <span>{{ userStore.username }}</span>
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <a target="_blank" href="https://yaozongbin.pages.dev/">
              <el-dropdown-item><Blog /> &nbsp;博客</el-dropdown-item>
            </a>
            <a target="_blank" href="https://github.com/yaozongbin">
              <el-dropdown-item><Github /> &nbsp;Github </el-dropdown-item>
            </a>
            <a target="_blank" href="https://gitee.com/yaozongbin">
              <el-dropdown-item><Gitee /> &nbsp;Gitee </el-dropdown-item>
            </a>
            <el-dropdown-item divided @click="logout">
              <span style="display: block">
                <Logout style="vertical-align: middle; margin: 0 0 3px 0" />
                退出登录
              </span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<style scoped lang="scss">
.navigation-bar {
  height: var(--v3-navigationbar-height);
  overflow: hidden;
  background: #fff;

  .hamburger {
    display: flex;
    align-items: center;
    height: 100%;
    float: left;
    padding: 0 15px;
    cursor: pointer;
  }

  .breadcrumb {
    float: left;

    /**参考 Bootstrap 的响应式设计 WIDTH = 576*/
    @media screen and (max-width: 576px) {
      display: none;
    }
  }

  /** 右上功能*/
  .right-menu {
    float: right;
    margin-right: 10px;
    height: 100%;
    display: flex;
    align-items: center;
    color: #606266;

    .right-menu-item {
      padding: 0 10px;
      cursor: pointer;

      .right-menu-avatar {
        display: flex;
        align-items: center;

        .svg-icon {
          font-size: 20px;
        }

        .el-avatar {
          margin-right: 10px;
        }

        span {
          font-size: 16px;
        }
      }
    }
  }
}
</style>
