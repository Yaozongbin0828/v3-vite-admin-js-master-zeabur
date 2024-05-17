import { ref } from "vue";
import { defineStore } from "pinia";

export const useTagsViewStore = defineStore("tags-view", () => {
  /** 加载Views*/
  const visitedViews = ref([]);
  /** 缓存Views*/
  const cachedViews = ref([]);

  //#region add
  const addVisitedView = (view) => {
    if (
      visitedViews.value.some((v, index) => {
        if (v.path === view.path) {
          if (v.fullPath !== view.fullPath) {
            // 防止 query 参数丢失
            visitedViews.value[index] = Object.assign({}, view);
          }
          return true;
        }
      })
    ) {
      return;
    }
    visitedViews.value.push(Object.assign({}, view));
  };

  const addCachedView = (view) => {
    if (typeof view.name !== "string") return;
    if (cachedViews.value.includes(view.name)) return;
    if (view.meta?.keepAlive) {
      cachedViews.value.push(view.name);
    }
  };
  //#endregion

  return {
    visitedViews,
    cachedViews,
    addVisitedView,
    addCachedView,
  };
});
