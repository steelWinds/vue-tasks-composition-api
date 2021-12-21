import { createRouter, createWebHistory } from 'vue-router';

import Home from '../views/Home.vue';
import TasksList from '../views/TasksList.vue';

let routes = [
    {
        path: '/',
        alias: '/home',
        name: 'home',
        component: Home,
    },

    {
        path: '/list',
        alias: '/tasks',
        name: 'list',
        component: TasksList
    }
];

const historyPath = import.meta.env.DEV ? '/' : '/vue-tasks-composition-api/';

const router = createRouter({
    routes,
    history: createWebHistory(historyPath),
    scrollBehavior() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve({
                    top: 1,
                    behavior: 'smooth'
                });
            }, 500);
        });
    }
});

export default router;
