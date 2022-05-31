import { getAuth, onAuthStateChanged } from "firebase/auth";
import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/home.vue";
import subjects from "../pages/subjects.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    children: [
      {
        path: "/d/courses",
        name: "Courses",
        component: () => import("../pages/courses.vue"),
      },
      {
        path: "/d/subjects",
        name: "Subjects",
        component: () => import("../pages/subjects.vue"),
      },
      {
        path: "/d/result",
        name: "Result",
        component: () => import("../pages/result.vue"),
      },
      {
        path: "/d/settings",
        name: "Settings",
        component: () => import("../pages/settings.vue"),
      },
    ],
    meta: {
      requiredAuth: true,
    },
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../pages/login.vue"),
  },
  {
    path: "/forgot",
    name: "Forgot",
    component: () => import("../pages/forgot.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkExactActiveClass: "list-active",
  scrollBehavior(to, from, savedPosition) {
    return {
      x: 0,
      y: 0,
    };
  },
});

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeListener();
        resolve(user);
      },
      reject
    );
  });
};

router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requiredAuth)) {
    if (await getCurrentUser()) {
      next();
    } else {
      next({
        name: "Login",
      });
    }
  } else {
    next();
  }
});

export default router;
