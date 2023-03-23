import { defineStore } from "pinia";

export const useTIMStore = defineStore("chat", {
  TIMOptions() {
    return {
      SDKAppID: 1400800292,
    };
  },
});
