<template>
  <div class="login-box">
    <a-card title="轻语客服平台" style="width: 300px">
      <a-form
        :model="formState"
        name="basic"
        :label-col="{ span: 8 }"
        :wrapper-col="{ span: 16 }"
        autocomplete="off"
        @finish="login"
      >
        <a-form-item
          label="Username"
          name="username"
          :rules="[{ required: true, message: '请输入用户名!' }]"
        >
          <a-input v-model:value="formState.username" />
        </a-form-item>

        <a-form-item
          label="Password"
          name="password"
          :rules="[{ required: true, message: '请输入密码!' }]"
        >
          <a-input-password v-model:value="formState.password" />
        </a-form-item>

        <a-form-item :wrapper-col="{ offset: 9, span: 16 }">
          <a-button type="primary" html-type="submit">login</a-button>
        </a-form-item>
      </a-form>
    </a-card>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { useRouter } from "vue-router";
import { genTestUserSig } from "../../debug/index";
import { useTIMStore } from "../store/chat";

const router = useRouter();
const TIMStore = useTIMStore();

const formState = reactive({
  username: "",
  password: "",
});

const login = async () => {
  /**
   * 生成密钥
   */
  const data = genTestUserSig({
    SDKAppID: 1400800292,
    userID: formState.username,
    secretKey:
      "74d3bcbf2f1d9a2fcd57291057c8e386eb14af5a2eed3afd23dc68f4f7811065",
  });

  await TIMStore.timCore.timLogin({
    userSig: data.userSig,
    userID: formState.username,
  });
  console.log(TIMStore.timCore);

  router.push("home");
};
</script>

<style>
.login-box {
  background-color: #2f3447;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
