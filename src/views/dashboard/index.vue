<script setup>
import { ref } from "vue";
import { useUserStore } from "@/store/modules/user";
import projectData from "@/assets/dashboard/list.json";
import svgPath from "@/assets/dashboard/Innovation.svg";
const userStore = useUserStore();
const projectUpdates = ref(projectData);
</script>
<template>
  <div class="dashaboard-container">
    <el-card class="m-0">
      <div class="avatar-box">
        <div>
          <el-avatar :size="72" src="https://yaozongbin.pages.dev/head.jpg" />
        </div>
        <div class="ml-5">
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
              href="https://github.com/Yaozongbin0828/v3-vite-admin-js-master-zeabur"
              huo
              >项目源码
            </a>
          </el-button>
          <el-button type="primary" plain>
            <a
              class="primary-plain"
              href="https://yaozongbin.pages.dev/blogs/category/Vue/v3AdminVite1.html"
              >教程文档
            </a>
          </el-button>
        </p>
      </el-card>
    </div>

    <div class="dashaboard-container-item">
      <el-card class="card_left mt-15 mr-5">
        <template #header>项目动态</template>
        <div
          v-for="(item, index) in projectUpdates"
          :key="index"
          class="update-item"
        >
          <div>
            <el-avatar :src="item.avatar" :size="50" class="avatar"></el-avatar>
          </div>
          <div class="content">
            <p>{{ item.content }}</p>
            <small class="timestamp">{{ item.timestamp }}</small>
          </div>
        </div>
      </el-card>
      <el-card
        class="card_right mt-15"
        header="创意"
        style="position: relative; height: 640px"
      >
        <div class="update-item-img">
          <img :src="svgPath" alt="" class="svg-full" />
        </div>
      </el-card>
    </div>

    <el-card class="screenshot mt-4">
      <template #header>页面截图</template>
      <img src="@/assets/screenshot/screenshot.png" style="width: 100%" />
      <img src="@/assets/screenshot/screenshot2.png" style="width: 100%" />
      <img src="@/assets/screenshot/screenshot3.png" style="width: 100%" />
    </el-card>
  </div>
</template>

<style lang="scss">
.dashaboard-container {
  min-height: 100%;
  padding: 2px 15px 20px 15px;
  .screenshot {
    padding: 20px;
  }

  .avatar-box {
    width: 100%;
    display: flex;
    align-items: center;
  }

  .dashaboard-container-item {
    display: flex;
    justify-content: space-around;
    align-items: center;

    .card_left {
      flex: 1;
      padding: 20px;

      .update-item {
        display: flex;
        align-items: center;
        margin-bottom: 25px;
        padding-bottom: 20px;
        border-bottom: 1px solid #e4e7ed;

        .content p {
          margin: 0;
          padding-bottom: 10px;
        }

        .avatar {
          margin-right: 20px;
        }

        .content {
          flex: 1;
        }

        .timestamp {
          color: gray;
          font-size: 12px;
        }
      }
    }

    .card_right {
      flex: 1;
      padding: 20px;
      .el-card__body {
        padding: 14.5px !important;
        overflow: hidden !important;
      }
      .update-item-img {
        text-align: center;
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        overflow: hidden;
        .svg-full {
          width: 100%;
          height: 100%;
        }
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
