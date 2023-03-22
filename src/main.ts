import { createApp } from "vue";
// import "./style.css";
import App from "./App.vue";
import pinia from "./store";
// import Shop from "./shop.vue";
import router from "./router";
//引入Antd
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";

createApp(App).use(router).use(pinia).use(Antd).mount("#app");
