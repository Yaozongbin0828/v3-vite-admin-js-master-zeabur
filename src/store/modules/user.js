import { ref } from "vue";
import store from "@/store";
import { defineStore } from "pinia";
import router, { resetRouter } from "@/router";
import { loginApi, getUserInfoApi } from "@/api/login";
import { getToken, removeToken, setToken } from "@/utils/cache/cookies";
import asyncRouteSettings from "@/config/async-route";

export const useUserStore = defineStore("user", () => {
  const token = ref(getToken() || "");
  /** 定义username*/
  const username = ref("");
  /** 定义角色数组为空*/
  const roles = ref([]);

  /** 设置角色数组*/
  const setRoles = (value) => {
    roles.value = value;
  };

  /** 登录 */
  const login = (loginDate) => {
    return new Promise((resolve, reject) => {
      /** loginApi*/
      loginApi({
        /** 设置用户名和密码*/
        username: loginDate.username,
        password: loginDate.password,
      })
        .then((res) => {
          /** 设置token*/
          setToken(res.token);
          token.value = res.token;
          console.log(res);
          resolve(true);
        })
        .catch((error) => {
          console.log(error);
          reject(error);
        });
    });
  };

  /** 获取用户详情*/
  const getInfo = () => {
    return new Promise((resolve, reject) => {
      getUserInfoApi()
        .then((res) => {
          /** 返回的数据赋值给 data 变量*/
          const data = res;
          /** 赋值username*/
          username.value = data.username;
          /** 验证返回的roles是否是个非空数组*/
          if (data.roles && data.roles.length > 0) {
            /** 获取用户信息并根据返回的信息设置用户名和用户角色*/
            roles.value = data.roles;
          } else {
            /** 塞入一个没有任何作用的默认角色，不然路由守卫逻辑会无限循环*/
            roles.value = asyncRouteSettings.defaultRoles;
            // roles.value = [0]
          }
          resolve(res);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  /** 登出*/
  const logout = () => {
    removeToken();
    /** 清空当前用户的身份验证 Token*/
    token.value = "";
    /** 清空当前用户的角色信息*/
    roles.value = [];
    /** 用户导航状态重置到初始状态*/
    resetRouter();
    /** 重置系统标签视图的状态*/
    console.log(token.value + roles.value);
  };

  /** 重置 Token */
  const resetToken = () => {
    removeToken();
    token.value = "";
    roles.value = [];
  };

  /** 重置 visited views 和 cached views */

  return {
    token,
    username,
    roles,
    setRoles,
    login,
    getInfo,
    logout,
    resetToken,
  };
});

/** 在 setup 外使用 */
/** 弊端是不能持久化*/
export function useUserStoreHook() {
  return useUserStore(store);
}
