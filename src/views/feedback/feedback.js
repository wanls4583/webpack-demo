import Vue from 'vue';
import router from './router';
import Main from '../components/alive_frame/main.vue';

new Vue({
    router,
    render: h => h(Main)
}).$mount('#app');