<template>
  <a-layout id="#components-layout-demo-custom-trigger" class="layout-box">
    <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
      <div class="logo">轻语客服平台</div>
      <a-menu
        @click="linkPage"
        v-model:selectedKeys="selectedKeys"
        theme="dark"
        mode="inline"
      >
        <a-menu-item key="/home">
          <user-outlined />
          <span>首页</span>
        </a-menu-item>
        <a-menu-item key="/customer-service">
          <video-camera-outlined />
          <span>客服</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header class="layout-header">
        <menu-unfold-outlined
          v-if="collapsed"
          class="trigger"
          @click="() => (collapsed = !collapsed)"
        />
        <menu-fold-outlined
          v-else
          class="trigger"
          @click="() => (collapsed = !collapsed)"
        />
        <a-button type="link" @click="loginOut">退出登录</a-button>
      </a-layout-header>
      <a-layout-content
        :style="{
          margin: '24px 16px',
          padding: '24px',
          background: '#fff',
          minHeight: '280px',
        }"
      >
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script lang="ts">
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons-vue";
import { defineComponent, ref } from "vue";

import { useRouter } from "vue-router";
import { useTIMStore } from "../store/chat";
export default defineComponent({
  components: {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
  },
  setup() {
    const TIMStore = useTIMStore();
    // 订阅sdk 接收功能
    TIMStore.timCore.messageReceived = (event) => {
      TIMStore.subscribeMessage(event);
    };
    const router = useRouter();
    const loginOut = () => {
      TIMStore.timCore.timLogout();
      router.push("login");
    };
    const linkPage = ({ key }: { key: string }) => {
      router.push(key);
    };

    return {
      selectedKeys: ref<string[]>(["1"]),
      collapsed: ref<boolean>(false),
      loginOut,
      linkPage,
    };
  },
});
</script>
<style scoped>
.layout-box {
  height: 100vh;
}
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

.logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.3);
  margin: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 16px;
  font-weight: bolder;
}
.layout-header {
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
