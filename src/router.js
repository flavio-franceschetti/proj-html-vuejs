import { createRouter, createWebHistory } from "vue-router";
import CoursePortal from "./pages/CoursePortal.vue";
import Customer from "./pages/Customer.vue";
import StartHere from "./pages/StartHere.vue";
import NotFound from "./pages/NotFound.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "CoursePortal",
      component: CoursePortal,
    },
    {
      path: "/customer",
      name: "Customer",
      component: Customer,
    },
    {
      path: "/starthere",
      name: "StartHere",
      component: StartHere,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: NotFound,
    },
  ],
});
export { router };