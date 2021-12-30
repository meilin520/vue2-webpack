import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        title: '首页',
        component: () => import('../views/Home.vue')
    },
    {
        path: '/content',
        name: 'Content',
        title: '内容',
        component: () => import('../views/Content.vue')
    }
]

const router = new VueRouter({
    routes
})

router.beforeEach((to, from, next) => {
    console.log('路由数据：',to, from, next);
    next()
})

export default router;