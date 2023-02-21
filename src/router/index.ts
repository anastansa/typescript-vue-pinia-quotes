import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
		{
			path: "/",
			name: "all",
			component: () => import("../pages/AllQuotes.vue"),
		},
    {
      path: "/search",
      name: "search",
			component: () => import("../pages/SearchQuotes.vue"),
    },
		{
			path: "/random",
			name: "random",
			component: () => import("../pages/RandomQuote.vue"),
		},
  ],
});

export default router;
