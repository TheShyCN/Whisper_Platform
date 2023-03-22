import { PiniaPluginContext } from "pinia";

/**
 * 插件方法,有几个模块执行几次
 * @param context
 */

export function persistedstate(context: PiniaPluginContext) {
  /**
   * 每次state发生变化时,将其保存在localStorage里
   * $subscribe会监听state变化触发回调
   * 两个参数:
   * 第一个是当前修改store的上下文
   * 第二个是当前修改的状态
   * context.store.$id --- 当前模块名
   * context.store.$patch --- 填充state
   */
  const currentState =
    JSON.parse(localStorage.getItem(context.store.$id) || "") || "{}";

  context.store.$patch(currentState);
  context.store.$subscribe(
    (_store, state) => {
      localStorage.setItem(_store.storeId, JSON.stringify(state));
    },
    {
      // 组件卸载依赖还在
      detached: true,
    }
  );
}
