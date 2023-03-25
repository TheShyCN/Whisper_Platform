import "pinia";
import TIMCore from "./store/plugins/TIM-plugin/Tim-core";
import { ChartDefineStoreOptions } from "./store/plugins/TIM-plugin/type";

declare module "pinia" {
  export interface DefineStoreOptionsBase<S, Store> {
    /**
     * TIM初始化的参数
     */
    TIMOptions?: () => ChartDefineStoreOptions;
  }
  export interface PiniaCustomStateProperties<S> {
    /**
     *tim核心功能
     */
    timCore: TIMCore;
  }
}
