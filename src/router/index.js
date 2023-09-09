import { createRouter, createWebHistory } from "vue-router";
import Selectmenu from "../components/Selectmenu.vue";
import chosetable from "../components/chosetable.vue";
import TableC from "../components/TableC.vue";
import Showinform from "../components/Showinform.vue";
import Cr from "../components/cr.vue"
const routes = [
  {
    path: "/home", // Consider using '/home' for your home route
    name: "home", // Name the route
    component: Selectmenu,
  },
  {
    path: "/", // Consider using '/home' for your home route
    name: "h", // Name the route
    component: Selectmenu,
  },
  {
    path: "/table",
    name: "table",
    component: chosetable,
    props: (route) => ({ item: route.query.item }), // Pass 'item' as a prop
  },
  {
    path: "/tablez",
    name: "tablez",
    component: TableC,
  },
  {
    path: "/cr",
    name: "cr",
    component: Cr,
  },
  // {
  //   path: '/showinform',
  //   name: 'showinform',
  //   component: Showinform,

  {
    path: "/showinform",
    name: "ShowInform", // ตรงนี้ให้ตั้งชื่อเส้นทางตามที่คุณต้องการ
    component: Showinform,
    props: (route) => ({
      item: route.query.item,
      name: route.query.name,
      phoneNumber: route.query.phoneNumber,
      dateTime: route.query.dateTime,
    }),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
