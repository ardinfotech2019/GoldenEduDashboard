import { getAuth, onAuthStateChanged } from "firebase/auth";
import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/home.vue";

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
        path: "/",
        name: "Subjects",
        component: () => import("../pages/subjects.vue"),
      },
      {
        path: "/d/result",
        name: "Result",
        component: () => import("../pages/result.vue"),
      },
      {
        path: "/d/students",
        name: "Students",
        component: () => import("../pages/students.vue"),
      },
      {
        path: "/d/student/:id",
        name: "Studentview",
        component: () => import("../pages/studentview.vue"),
      },
      {
        path: "/d/student/edit/:id",
        name: "Studentedit",
        component: () => import("../pages/studentedit.vue"),
      },
      {
        path: "/d/location",
        name: "Location",
        component: () => import("../pages/location.vue"),
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
      next("/login");
    }
  } else {
    next();
  }
});

export default router;
