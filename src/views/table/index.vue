<script setup>
import { ElTable } from "element-plus";

const tableData = [
  {
    date: "2024-12-03",
    name: "王小虎",
    text: "上海市普陀区金沙江路 1518 弄",
  },
  {
    date: "2024-12-03",
    name: "王小虎",
    text: "上海市普陀区金沙江路 1517 弄",
  },
  {
    date: "2024-12-03",
    name: "王小虎",
    text: "上海市普陀区金沙江路 1517 弄",
  },
  {
    date: "2024-12-03",
    name: "王小虎",
    text: "上海市普陀区金沙江路 1517 弄",
  },
];
</script>
<template>
  <div class="app-container">
    <el-card v-loading="loading" shadow="never" class="search-wrapper">
      <el-form ref="searchFormRef" :inline="true">
        <el-form-item prop="username" label="用户名">
          <el-input placeholder="请输入" />
        </el-form-item>
        <el-form-item prop="phone" label="手机号">
          <el-input placeholder="请输入" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" :icon="Search" @click="handleSearch"
            >查询</el-button
          >
          <el-button :icon="Refresh" @click="resetSearch">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>
    <el-card v-loading="loading" shadow="never">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column type="selection" width="55" />
        <el-table-column label="创表时间" width="120">
          <template #default="scope">{{ scope.row.date }}</template>
        </el-table-column>
        <el-table-column property="name" label="用户名" width="120" />
        <el-table-column
          property="text"
          label="Element-plus Table Text"
          width="240"
          show-overflow-tooltip
        />
        <el-table-column property="text" label="info" />
      </el-table>
    </el-card>
  </div>
</template>

<style scoped>
.search-wrapper {
  margin-bottom: 20px;
  :deep(.el-card__body) {
    padding-bottom: 2px;
  }
}

.toolbar-wrapper {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.table-wrapper {
  margin-bottom: 20px;
}

.pager-wrapper {
  display: flex;
  justify-content: flex-end;
}
</style>
