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

  //#region del
  const delVisitedView = (view) => {
    for (const [i, v] of visitedViews.value.entries()) {
      if (v.path === view.path) {
        visitedViews.value.splice(i, 1);
        break;
      }
    }
  };
  const delCachedView = (view) => {
    if (typeof view.name !== "string") return;
    const index = cachedViews.value.indexOf(view.name);
    index > -1 && cachedViews.value.splice(index, 1);
  };
  //#endregion

  return {
    visitedViews,
    cachedViews,
    addVisitedView,
    addCachedView,
    delVisitedView,
    delCachedView,
  };
});
