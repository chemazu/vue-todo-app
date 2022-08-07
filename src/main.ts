import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import "./main.css";
import Home from "./components/Home.vue";
import About from "./components/About/About.vue";
import VueRouter from "vue-router";

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
];

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = VueRouter.createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: VueRouter.createWebHashHistory(),
  routes, // short for `routes: routes`
});

createApp(App).use(store).mount("#app");
createApp(App).use(router);
