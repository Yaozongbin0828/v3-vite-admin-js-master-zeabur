<script setup>
import { useUserStore } from "@/store/modules/user";

const userStore = useUserStore();

/** api/v1 */
console.log(import.meta.env.VITE_BASE_API);
</script>
<template>
  <div class="dashaboard-container">
    <div class="dashaboard-container-item">
      <el-card class="card_left m-5 mr-5">
        <template #header
          >🇨🇳&nbsp;Hello,I'm&nbsp;{{ userStore.username }}😎</template
        >
        <p>
          🔥 基于 Vue3 + Vite + Pinia + Sass + Echarts + ElmentPlus UI
          的轻量级后台管理模板 🔥
        </p>
      </el-card>
      <el-card class="card_right m-5 mr-5" header="⚡ 项目地址 ⚡">
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
  </div>
</template>

<style lang="scss">
.dashaboard-container {
  min-height: 100%;
  padding: 20px;
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

    .m-5 {
      margin: 0 0 5px 0;
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

  .chart {
    width: 100%;
    height: 100%;
  }
}
</style>
