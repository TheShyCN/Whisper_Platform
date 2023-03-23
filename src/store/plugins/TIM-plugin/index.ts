/**
 * IM SDK的初始化
 * 插件拥有登录功能
 * 插件拥有收发功能
 * 注册一个tim的实例
 */

import { PiniaPluginContext } from "pinia";
// 插件核心功能
import TIMCore from "./Tim-core";

export default (context: PiniaPluginContext) => {
  if (context.options.TIMOptions) {
    const timCore = new TIMCore(context.options.TIMOptions());
    context.store.timeCore = timCore;
  }
};
