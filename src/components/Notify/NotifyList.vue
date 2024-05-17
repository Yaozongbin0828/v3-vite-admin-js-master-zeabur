<script setup>
/** 定义了一个名为 list 的 prop，
 * 它的类型为 Object，
 * 并且被标记为必需的（required: true）。*/
const props = defineProps({
  list: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <!-- 在 props.list 的长度为 0 时渲染 el-empty 组件，以展示空列表时的占位内容或提示信息 -->
  <el-empty v-if="props.list.length === 0" />
  <el-card
    v-else
    v-for="(item, index) in props.list"
    :key="index"
    shadow="never"
    class="card-container"
  >
    <template #header>
      <div class="card-header">
        <div>
          <span>
            <span class="card-title">{{ item.title }}</span>
            <el-tag
              v-if="item.extra"
              :type="item.status"
              effect="plain"
              size="small"
            >
              {{ item.extra }}
            </el-tag>
          </span>
          <!--如果 item.datetime 不存在或为假值，那么整个 <div> 元素及其内容都不会被渲染，即不会显示时间。 -->
          <div class="card-time">{{ item.datetime }}</div>
        </div>
        <!-- 如果 item.avatar 不存在或为假值，那么整个 <div> 元素及其内容都不会被渲染，即不会显示头像卡片。 -->
        <div v-if="item.avatar" class="card-avatar">
          <img :src="item.avatar" width="34" alt="NotifyFreeIcon" />
        </div>
      </div>
    </template>
    <div class="card-body">
      <!-- 三元表达式，它会先判断 item.description 是否不为 null 和 undefined，如果是，则显示 item.description 的值，否则显示 "No Data" -->
      {{ item.description ?? "No Data" }}
      <!-- item.description ? item.description : "No Data" -->
    </div>
  </el-card>
</template>

<style lang="scss" scoped>
.card-container {
  margin-bottom: 10px;
  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .card-title {
      font-weight: bold;
      margin-right: 10px;
    }
    .card-time {
      font-size: 12px;
      color: grey;
    }
    .card-avatar {
      display: flex;
      align-items: center;
    }
  }
  .card-body {
    font-size: 12px;
  }
}
</style>
