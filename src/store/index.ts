import { createPinia } from "pinia";
// 持久化存储
// import { persistedstate } from "./plugins/persistedstate";
import TIMPlugin from "./plugins/TIM-plugin";

const pinia = createPinia();

// pinia.use(persistedstate);
pinia.use(TIMPlugin);

export default pinia;
