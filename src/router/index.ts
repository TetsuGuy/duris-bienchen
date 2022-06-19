import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "HomeView",
    component: () =>
      import(/* webpackChunkName: "home" */ "../views/HomeView.vue"),
  },
  {
    path: "/contact",
    name: "ContactView",
    component: () =>
      import(/* webpackChunkName: "contact" */ "../views/ContactView.vue"),
  },
  {
    path: "/gallery",
    name: "GalleryView",
    component: () =>
      import(/* webpackChunkName: "gallery" */ "../views/GalleryView.vue"),
  },
  {
    path: "/news",
    name: "NewsView",
    component: () =>
      import(/* webpackChunkName: "news" */ "../views/NewsView.vue"),
  },
  {
    path: "/donate",
    name: "DonateView",
    component: () =>
      import(/* webpackChunkName: "donate" */ "../views/DonateView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to) => {
  const iframes = document.querySelectorAll("iframe");
  iframes.forEach((iframe) => {
    iframe.style.display = to.name === "NewsView" ? "block" : "none";
  });
});

export default router;
