<template>
  <div class="login-box">
    <a-card title="请登录" style="width: 300px">
      <a-form
        :model="formState"
        name="basic"
        :label-col="{ span: 8 }"
        :wrapper-col="{ span: 16 }"
        autocomplete="off"
        @finish="login"
      >
        <a-form-item label="Username" name="username">
          <a-input v-model:value="formState.username" />
        </a-form-item>

        <a-form-item label="Password" name="password">
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
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import router from "../router";

const formState = reactive({
  username: "",
  password: "",
});

const login = () => {
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
