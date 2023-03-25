export interface ChartDefineStoreOptions {
  SDKAppID: number;
}

export interface TIMCoreLoginParams {
  // 用户id
  userID: string;
  // 密码
  userSig: string;
}

export interface ITextPayload {
  text: string;
}

export interface ITextMessageEvent {
  name: string;
  data: TextMessage[];
}

export interface TextMessage {
  payload: ITextPayload;
  flow: "in" | "out";
  conversationID: string;
}
