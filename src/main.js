import Vue from 'vue';
import App from './App.vue';
import router from './router';

new Vue({
    el: '#app',
    router,
    render: h => h(App) // h为Vue.js 里createElement函数用于生成VNode节点，render将节点返回给Vue.js的mount函数，渲染成真实DOM节点，并挂载到根节点上。
})