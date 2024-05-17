<script setup>
import pkg from "~/package.json";
import { onMounted, ref } from "vue";

const dependencies = ref([]);

const transformVersionData = (tuple) => {
  const [name, version] = tuple;
  return { name, version };
};

onMounted(() => {
  // pkg 是从外部传入的 package.json 对象
  dependencies.value = Object.entries(pkg.dependencies).map((item) =>
    transformVersionData(item)
  );

  return {
    dependencies,
  };
});
</script>
<template>
  <div class="dependency-container">
    <el-card class="dependency-item" header="开发依赖">
      <div class="dependencies-table-wrrpper">
        <table class="descriptions-table">
          <tr
            v-for="dependency in dependencies"
            :key="dependency"
            class="descriptions-tr"
          >
            <td class="dependency-name">{{ dependency.name }}</td>
            <td class="dependency-version">{{ dependency.version }}</td>
          </tr>
        </table>
      </div>
    </el-card>
  </div>
</template>

<style lang="scss" scoped>
.dependency-container {
  margin: 30px 0 0 0;
  width: 100%;
  height: 100%;

  .dependency-item {
    border-top: 1px solid rgb(239, 239, 245);

    .dependencies-table-wrrpper {
      width: 100%;
      box-sizing: border-box;
      border-radius: 6px;
      overflow: hidden;
      background-color: #fff;
      border: 1px solid rgba(239, 239, 245, 1);
      transition: background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1),
        background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1);

      .descriptions-table {
        width: 100%;
        border-collapse: separate;
        border-spacing: 0;
        box-sizing: border-box;
        text-indent: 0;

        .descriptions-tr {
          .dependency-name {
            text-align: left;
            color: black;
            padding: 8px 12px;
            font-weight: 400;
            background-clip: padding-box;
            background-color: rgba(250, 250, 252, 1);
            border-bottom: 1px solid rgba(239, 239, 245, 1);
            border-right: 1px solid rgba(239, 239, 245, 1);
          }
          .dependency-version {
            text-align: left;
            color: black;
            padding: 8px 12px;
            font-weight: 400;
            background-clip: padding-box;
            border-bottom: 1px solid rgba(239, 239, 245, 1);
            border-right: 1px solid rgba(239, 239, 245, 1);
          }
        }
      }
    }
  }
}
</style>
