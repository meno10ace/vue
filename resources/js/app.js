/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

import VueRouter from 'vue-router';
import HeaderComponent from './components/HeaderComponent.vue';
import TaskListComponent from './components/TaskListComponent.vue';
import TaskShowComponent from './components/TaskShowComponent.vue';
import TaskCreateComponent from './components/TaskCreateComponent.vue';
import TaskEditComponent from './components/TaskEditComponent.vue';

window.Vue = require('vue').default;

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component("header-component",HeaderComponent);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.use(VueRouter);
const router = new VueRouter({
    mode:'history',
    routes:[
        {
            path:'/tasks',
            name:'task.list',
            component:TaskListComponent
        },
        {
            path:'/tasks/create',
            name:'task.create',
            component:TaskCreateComponent,
        },
        {
            path:'/tasks/:taskId',
            name:'task.show',
            component:TaskShowComponent,
            props:true
        },
        
        {
            path: '/tasks/:taskId/edit',
            name: 'task.edit',
            component: TaskEditComponent,
            props: true
        },
    ]
})
const app = new Vue({
    el: '#app',
    router
});
