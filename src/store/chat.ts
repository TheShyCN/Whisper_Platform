import { defineStore } from "pinia";
import { ITextMessageEvent } from "./plugins/TIM-plugin/type";

export const useTIMStore = defineStore("chat", {
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
  },
});
