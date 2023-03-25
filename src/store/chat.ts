import { defineStore } from "pinia";
import { Conversation, Profile } from "tim-js-sdk";
import { ITextMessageEvent, TextMessage } from "./plugins/TIM-plugin/type";

export const useTIMStore = defineStore("chat", {
  state() {
    return {
      conversationList: [] as Partial<Conversation>[],
      selectedKeys: [] as string[],
      historyMessage: [] as TextMessage[],
    };
  },
  TIMOptions() {
    return {
      SDKAppID: 1400800292,
    };
  },
  actions: {
    /**
     * 订阅接收功能
     * @param event
     */
    subscribeMessage(event: ITextMessageEvent) {},
    /**
     * 获取会话列表
     */
    async getSessionList() {
      const {
        data: { conversationList },
      } = await this.timCore.tim?.getConversationList();
      this.conversationList = conversationList;

      // 它没有回话，并且他不是客服
      if (conversationList.length === 0 && this.timCore.userID !== "admin") {
        this.conversationList.push({
          lastMessage: {},
          userProfile: {
            userID: "admin",
          } as Profile,
        });
      }
      const userId = this.conversationList[0]?.userProfile?.userID;
      if (userId) {
        this.selectedKeys = [userId];
      }
    },
    async getMessageHistoryList(userId: string) {
      const data = await this.timCore.tim?.getMessageList({
        conversationID: `C2C${userId}`,
      });
      this.historyMessage = data.data.messageList;
      console.log(data, "我是历史记录");
    },
  },
});
