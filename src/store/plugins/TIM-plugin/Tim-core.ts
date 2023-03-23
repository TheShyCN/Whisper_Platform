/**
 * IM的核心功能
 */
import TIM, { ChatSDK } from "tim-js-sdk";
import TIMUploadPlugin from "tim-upload-plugin";
import { ChartDefineStoreOptions, TIMCoreLoginParams } from "./type";

export default class TIMCore {
  public tim: ChatSDK | undefined;
  public userID = "";

  constructor(props: ChartDefineStoreOptions) {
    this.initTimSDK(props.SDKAppID);
  }
  private initTimSDK = (SDKAppID: number) => {
    let options = {
      SDKAppID, // 接入时需要将0替换为您的即时通信 IM 应用的 SDKAppID
    };
    // 创建 SDK 实例，`TIM.create()`方法对于同一个 `SDKAppID` 只会返回同一份实例
    this.tim = TIM.create(options); // SDK 实例通常用 tim 表示

    // 设置 SDK 日志输出级别，详细分级请参见 setLogLevel https://web.sdk.qcloud.com/im/doc/zh-cn/SDK.html#setLogLevel 接口的说明</a>
    // tim.setLogLevel(0); // 普通级别，日志量较多，接入时建议使用
    this.tim.setLogLevel(0); // release 级别，SDK 输出关键信息，生产环境时建议使用

    // 注册腾讯云即时通信 IM 上传插件
    this.tim.registerPlugin({ "tim-upload-plugin": TIMUploadPlugin });
  };
  /**
   * 登录功能
   * @param options
   */
  public timLogin = async (options: TIMCoreLoginParams) => {
    // 第一步,登录SDK
    await this.tim?.login(options);
    this.userID = options.userID;
  };
}
