import Vue from 'vue';
import HelloWorld from './HelloWorld.vue';

const app = new Vue({
    render: (h) => h(HelloWorld),
}).$mount('#app');
