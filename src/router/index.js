import { createRouter, createWebHashHistory } from "vue-router"; // cài vue-router: npm install vue-router@next --save

const routes = [
  {
    path: '/',
    component: () => import('../components/Client/TrangChu/index.vue'),
    meta: { layout: "client" },
  },
  {
    path: '/san-pham',
    component: () => import('../components/Client/SanPham/index.vue'),
    meta: { layout: "client" },
  },
  {
    path: '/dich-vu',
    component: () => import('../components/Client/DichVu/index.vue'),
    meta: { layout: "client" },
  },
  {
    path: '/lien-he',
    component: () => import('../components/Client/LienHe/index.vue'),
    meta: { layout: "client" },
  },
  
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  },
});

export default router