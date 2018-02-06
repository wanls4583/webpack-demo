import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Index from "./submit.vue";
import Suc from "./suc.vue";

// 路由注册
const router = new VueRouter({
    // mode: 'history',
    routes: [{
        path: '/',
        component: Index,
        meta: {keepAlive: true}
    },{
        path: '/suc',
        component: Suc
    }]
});

export default router;
