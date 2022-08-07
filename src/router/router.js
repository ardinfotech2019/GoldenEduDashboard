import { getAuth, onAuthStateChanged } from "firebase/auth";
import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/home.vue";
import Subjects from "../pages/subjects.vue";
import Courses from "../pages/courses.vue";
import Result from "../pages/result.vue";
import Login from "../pages/login.vue";
import Students from "../pages/students.vue";
import Studentview from "../pages/studentview.vue";
import Studentedit from "../pages/studentedit.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    children: [
      {
        path: "/d/courses",
        name: "Courses",
        component: () => Courses,
      },
      {
        path: "/",
        name: "Subjects",
        component: () => Subjects,
      },
      {
        path: "/d/result",
        name: "Result",
        component: () => Result,
      },
      {
        path: "/d/students",
        name: "Students",
        component: () => Students,
      },
      {
        path: "/d/student/:id",
        name: "Studentview",
        component: () => Studentview,
      },
      {
        path: "/d/student/edit/:id",
        name: "Studentedit",
        component: () => Studentedit,
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
    component: () => Login,
  },
  {
    path: "/forgot",
    name: "Forgot",
    component: () => import("../pages/forgot.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "home",
    component: Home,
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
