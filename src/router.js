import Vue from "vue";
import Router from "vue-router";
import Login from "./components/Login.vue";
import Home from "./components/Home.vue";
import SchoolMap from "./components/School/SchoolMap.vue";
import ParentMap from "./components/Parent/ParentMap.vue";
import DriverMap from "./components/Driver/DriverMap.vue";
import DriverAssistance from "./components/Driver/DriverAssistance.vue";
import ParentAdvice from "./components/Parent/ParentAdvice.vue";
import ParentAssistance from "./components/Parent/ParentAssistance.vue";
import SchoolAssistance from "./components/School/SchoolAssistance.vue";
import SchoolRegister from "./components/School/SchoolRegister.vue";
Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "*",
      redirect: "/login"
    },
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/school-map",
      name: "school-map",
      component: SchoolMap,
      meta: {
        authentication: true
      }
    },
    {
      path: "/school-assistance",
      name: "school-assistance",
      component: SchoolAssistance,
      meta: {
        authentication: true
      }
    },
    {
      path: "/school-register",
      name: "school-register",
      component: SchoolRegister,
      meta: {
        authentication: true
      }
    },
    {
      path: "/parent-map",
      name: "parent-map",
      component: ParentMap,
      meta: {
        authentication: true
      }
    },
    {
      path: "/parent-advice",
      name: "parent-advice",
      component: ParentAdvice,
      meta: {
        authentication: true
      }
    },
    {
      path: "/parent-assistance",
      name: "parent-assistance",
      component: ParentAssistance,
      meta: {
        authentication: true
      }
    },
    {
      path: "/driver-map",
      name: "driver-map",
      component: DriverMap,
      meta: {
        authentication: true
      }
    },
    {
      path: "/driver-assistance",
      name: "driver-assistance",
      component: DriverAssistance,
      meta: {
        authentication: true
      }
    }
  ]
});

router.beforeEach((to, from, next) => {
  const fb = require("./firebaseConfig.js");
  let user = fb.auth.currentUser;

  let authentication = to.matched.some(record => record.meta.authentication);
  if (authentication && !user) {
    next("login");
  } else if (!authentication && user) {
    next("school-map");
  } else {
    next();
  }
});

export default router;
