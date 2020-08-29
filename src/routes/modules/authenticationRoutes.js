import Login from '@/components/pages/Login.vue';
import Register from '@/components/pages/Register.vue';

export default [
    {
        path: '',
        name: 'login',
        component: Login,
        hidden: true,
    },
    {
        path: '/register',
        name: 'register',
        component: Register,
        hidden: true,
    },
];
