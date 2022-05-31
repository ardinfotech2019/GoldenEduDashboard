import { createApp } from "vue";
import App from "./App.vue";
import router from "../src/router/router";
import store from "../src/store/store";
import "../src/assets/css/Style.css";

createApp(App).use(store).use(router).mount("#app");
