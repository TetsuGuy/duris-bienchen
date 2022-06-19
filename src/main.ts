import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "bulma";
import Vue3TouchEvents from "vue3-touch-events";
import "./registerServiceWorker";

createApp(App).use(Vue3TouchEvents).use(router).mount("#app");
