<script setup>
import { useUserStore } from "@/store/modules/user";

const userStore = useUserStore();

/** api/v1 */
console.log(import.meta.env.VITE_BASE_API);
</script>
<template>
  <div class="dashaboard-container">
    <el-card class="m-0">
      <div class="avatar-box">
        <div>
          <el-avatar :size="72" src="https://yaozongbin.pages.dev/head.jpg" />
        </div>
        <div class="ml-10">
          <h3>🇨🇳&nbsp;Hello,I'm&nbsp;{{ userStore.username }}😎</h3>
          <p>今天又是充满活力的一天!</p>
        </div>
      </div>
    </el-card>

    <div class="dashaboard-container-item">
      <el-card class="card_left mt-15 mr-5">
        <template #header>🎓 项目简介 🎓</template>
        <p>
          🔥 基于 Vue3 + Vite + Pinia + Sass + Echarts + ElmentPlus UI + Axios
          的轻量级后台管理模板 🔥
        </p>
      </el-card>
      <el-card class="card_right mt-15" header="⚡ 项目地址 ⚡">
        <p>
          <el-button type="primary">
            <a
              class="primary"
              href="https://github.com/yaozongbin/v3-vite-admin-js-master"
              huo
              >项目源码
            </a>
          </el-button>
          <el-button type="primary" plain>
            <a
              class="primary-plain"
              href="https://yaozongbin.pages.dev/categories/Vue/1/"
              >教程文档
            </a>
          </el-button>
        </p>
      </el-card>
    </div>

    <el-card class="screenshot mt-4">
      <template #header>页面截图</template>
      <img
        src="@/assets/screenshot/screenshot.jpeg"
        style="width: 100%"
      />
    </el-card>
  </div>
</template>

<style lang="scss">
.dashaboard-container {
  min-height: 100%;
  padding: 20px;
  .screenshot{
    padding: 20px;
  }

  .avatar-box {
    padding: 20px;
    width: 100%;
    display: flex;
    align-items: center;
  }

  .dashaboard-container-item {
    display: flex;
    justify-content: space-around;
    align-items: center;

    .card_left {
      flex: 2;
      padding: 20px;
    }

    .card_right {
      flex: 1;
      padding: 20px;
      .el-card__body {
        padding: 14.5px !important;
      }
    }

    .m-0 {
      margin: 0;
    }

    .mt-15 {
      margin-top: 15px;
    }

    .mr-5 {
      margin-right: 5px;
    }
  }

  @media screen and (max-width: 1200px) {
    .dashaboard-container-item {
      display: block;
    }
  }
}
</style>
