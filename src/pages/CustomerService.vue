<template>
  <div class="chat-box">
    <a-card class="chat-card">
      <a-menu id="dddddd" mode="inline" class="contacts-list">
        <a-menu-item key="1">Option1</a-menu-item>
      </a-menu>
      <div class="chat-content">
        <div class="chat-message">
          <div
            class="chat-item"
            :class="{ 'chat-item-out': item.flow === 'out' }"
            v-for="(item, index) in chatLogs"
            :key="index"
          >
            <div class="chat-item-content">
              <div
                :class="{
                  triangle: item.flow === 'in',
                  triangle_tow: item.flow === 'in',
                }"
              ></div>
              <div
                :class="{
                  triangle: item.flow === 'in',
                  fill_tow: item.flow === 'in',
                }"
              ></div>
              <div>{{ item.text }}</div>
            </div>
          </div>
        </div>
        <a-textarea
          v-model:value="chatMsg"
          class="textarea"
          placeholder="回车发送消息"
          :auto-size="{ minRows: 2, maxRows: 5 }"
          @pressEnter="sendMsg"
        />
      </div>
    </a-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useTIMStore } from "../store/chat";
const chatMsg = ref("");
const TIMStore = useTIMStore();
const chatLogs = ref([
  { text: "text1", flow: "in" },
  { text: "text2", flow: "out" },
  { text: "text3", flow: "in" },
  { text: "text1", flow: "in" },
  { text: "text2", flow: "out" },
  { text: "text3", flow: "in" },
]);
const sendMsg = () => {
  console.log(chatMsg.value);
  TIMStore.timeCore.sendMessage("admin", { text: chatMsg.value });
};
</script>

<style scoped lang="scss">
.chat-item-out {
  justify-content: flex-end;
  .chat-item-content {
    margin-right: 10px;
  }
}
.chat-item-content {
  position: relative;
  padding: 10px 6px;
  margin-top: 10px;
  margin-left: 10px;
  border-radius: 5px;
  word-break: break-all;
  background: skyblue;
  color: white;
}
.chat-item {
  display: flex;
}
.chat-box {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  :deep(.ant-card-body) {
    height: 100%;
    display: flex;
    align-items: center;
  }
}
.chat-card {
  width: 100%;
  height: 100%;
}
.contacts-list {
  width: 300px;
  height: 100%;
  border: 1px solid #f0f0f0;
  margin-right: 20px;
}
.chat-content {
  display: flex;
  flex-direction: column;
  height: 100%;
  flex: 1;
  .chat-message {
    flex: 1;
    padding: 20px 0;
    overflow-y: scroll;
  }
  // 隐藏滚动条但依旧有滚动效果
  .chat-message::-webkit-scrollbar {
    display: none;
  }
  .textarea {
    border-radius: 5px;
  }
}

.triangle,
.triangle_two {
  position: absolute;
  top: 15px;
  border-width: 10px;
  border-style: solid;
}

.triangle {
  left: -20px;
  border-color: transparent skyblue transparent transparent;
}

.triangle_two {
  right: -20px;
  border-color: transparent transparent transparent skyblue;
}

.fill_two {
  position: absolute;
  top: 15px;
  border-width: 10px;
  border-style: solid;
}

.fill_two {
  right: -16px;
  border-color: transparent transparent transparent skyblue;
}
</style>
