<template>
  <div class="login-container">
    <!-- ThemeSwitch组件 -->
    <div class="login-card">
      <div class="title">
        <img src="@/assets/layout/logo-text-2.png" alt="" />
      </div>
      <!-- 表单 -->
      <div class="content">
        <el-form
          ref="loginFormRef"
          :model="loginForm"
          :rules="loginFormRules"
          @keyup.enter="handleLogin"
        >
          <!-- 用户名 -->
          <el-form-item prop="username">
            <el-input
              v-model.trim="loginForm.username"
              placeholder="用户名"
              type="text"
              tabindex="1"
              :prefix-icon="User"
              size="large"
            />
          </el-form-item>
          <!-- 密码 -->
          <el-form-item prop="password">
            <el-input
              v-model.trim="loginForm.password"
              placeholder="密码"
              type="password"
              tabindex="2"
              :prefix-icon="Lock"
              size="large"
              show-password
            />
          </el-form-item>
          <!-- ?验证码 -->
          <el-button
            :loading="loading"
            type="primary"
            size="large"
            @click.prevent="handleLogin"
          >
            登 录
          </el-button>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import { useRouter } from "vue-router";
import { useUserStore } from "@/store/modules/user";
import { User, Lock } from "@element-plus/icons-vue";

const router = useRouter();
const loginFormRef = ref(null);
/** 登录按钮 Loading */
const loading = ref(false);

/** 定义登录表单数据*/
const loginForm = reactive({
  username: "admin",
  password: "123456",
});

/** 登录表单校验规则 */
const loginFormRules = {
  username: [{ required: true, message: "请输入用户名", trigger: "blur" }],
  password: [
    { required: true, message: "请输入密码", trigger: "blur" },
    { min: 6, max: 16, message: "长度在 8 到 16 个字符", trigger: "blur" },
  ],
  code: [{ required: true, message: "请输入验证码", trigger: "blur" }],
};

/** 登录逻辑*/
const handleLogin = () => {
  /** 判断value值是否存在 validate验证表单的有效性 */
  loginFormRef.value?.validate((valid) => {
    if (valid) {
      /** 登录成功 加载loading*/
      loading.value = true;
      /** 配合Pinia 操作登录*/
      useUserStore()
        .login({
          username: loginForm.username,
          password: loginForm.password,
        })
        .then(() => {
          /** 跳转重定向路由*/
          console.log(loading.value);
          router.push({ path: "/" });
        })
        .catch(() => {
          /** 处理登录失败的情况，将密码字段清空*/
          loginForm.password = "";
        })
        .finally(() => {
          /**  loading 的值设置为 false，隐藏加载状态*/
          loading.value = false;
        });
    } else {
      return false;
    }
  });
};
</script>
<style scoped lang="scss">
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100%;
  margin-top: 10%;

  /** ThemeSwitch*/

  .login-card {
    width: 480px;
    border-radius: 20px;
    box-shadow: 0 0 10px #dcdfe6;
    background-color: #fff;
    overflow: hidden;

    .title {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 150px;

      img {
        height: 100%;
      }
    }

    .content {
      padding: 20px 50px 50px 50px;

      /** 深度选择器*/
      :deep(.el-input-group__append) {
        padding: 0;
        overflow: hidden;

        .el-image {
          width: 100px;
          height: 40px;
          border-left: 0px;
          user-select: none;
          cursor: pointer;
          text-align: center;
        }
      }

      .el-button {
        width: 100%;
        margin-top: 10px;
      }
    }
  }
}
</style>
