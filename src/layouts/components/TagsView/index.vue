<script setup>
import { getCurrentInstance, onMounted, ref, watch } from "vue";
import { RouterLink, useRoute, useRouter } from "vue-router";
import { useTagsViewStore } from "@/store/modules/tags-view";
import { usePermissionStore } from "@/store/modules/permission";
import { Close } from "@element-plus/icons-vue";

import ScrollPane from "./ScrollPane.vue";
import path from "path-browserify";

const route = useRoute();
const router = useRouter();
const tagsViewStore = useTagsViewStore();
const permissionStore = usePermissionStore();
const instance = getCurrentInstance();

/** tag初始值为空*/
const tagRefs = ref([]);

/** 固定标签tag*/
let affixTags = [];

/** 获取tag.path*/
const isActive = (tag) => {
  return tag.path === route.path;
};

/** 固定标签*/
const filterAffixTags = (routes, basePath = "/") => {
  let tags = [];
  routes.forEach((route) => {
    if (route.meta?.affix) {
      const tagPath = path.resolve(basePath, route.path);
      tags.push({
        fullPath: tagPath,
        path: tagPath,
        name: route.name,
        meta: { ...route.meta },
      });
    }
  });
  return tags;
};

/** 初始化tag*/
const initTags = () => {
  affixTags = filterAffixTags(permissionStore.routes);
  for (const tag of affixTags) {
    // 必须含有 name 属性
    if (tag.name) {
      tagsViewStore.addVisitedView(tag);
    }
  }
};

/** 关闭当前正在右键操作的标签页 */
const closeSelectedTag = (view) => {
  tagsViewStore.delVisitedView(view);
  tagsViewStore.delCachedView(view);
};

const addTags = () => {
  if (route.name) {
    tagsViewStore.addVisitedView(route);
    tagsViewStore.addCachedView(route);
  }
};

const isAffix = (tag) => {
  return tag.meta?.affix;
};

watch(
  route,
  () => {
    addTags();
  },
  {
    deep: true,
  }
);

onMounted(() => {
  initTags();
  addTags();
});
</script>
<template>
  <div class="tags-view-container">
    <ScrollPane class="tags-view-wrapper" :tagRefs="tagRefs">
      <router-link
        ref="tagRefs"
        v-for="tag in tagsViewStore.visitedViews"
        :key="tag.path"
        :class="isActive(tag) ? 'active' : ''"
        :to="{ path: tag.path, query: tag.query }"
        @click.middle="!isAffix(tag) && closeSelectedTag(tag)"
        class="tags-view-item"
      >
        {{ tag.meta?.title }}

        <el-icon
          v-if="!isAffix(tag)"
          :size="12"
          @click.prevent.stop="closeSelectedTag(tag)"
        >
          <Close class="close" />
        </el-icon>
      </router-link>
    </ScrollPane>
  </div>
</template>

<style lang="scss" scoped>
.tags-view-container {
  height: var(--v3-tagsview-height);
  width: 100%;
  background-color: #fff;
  border-bottom: 1px solid #d8dce5;
  box-shadow: 0 1px 3px 0 #00000010, 0 0 3px 0 #00000010;

  .tags-view-wrapper {
    .tags-view-item {
      display: inline-block;
      position: relative;
      cursor: pointer;
      height: 26px;
      line-height: 26px;
      border: 1px solid var(--v3-tagsview-tag-border-color);
      border-radius: var(--v3-tagsview-tag-border-radius);
      color: var(--v3-tagsview-tag-text-color);
      background-color: var(--v3-tagsview-tag-bg-color);
      padding: 0 8px;
      font-size: 12px;
      margin-left: 5px;
      margin-top: 4px;

      .close {
        vertical-align: middle;
        position: absolute;
        top: 2px;
      }

      &:first-of-type {
        margin-left: 7px;
      }

      &:last-of-type {
        margin-right: 7px;
      }

      &.active {
        background-color: var(--v3-tagsview-tag-active-bg-color);
        color: var(--v3-tagsview-tag-active-text-color);
        border-color: var(--v3-tagsview-tag-active-border-color);
      }
    }
  }
}
</style>
