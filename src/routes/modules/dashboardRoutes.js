import Dashboard from '@/components/layout/Dashboard.vue';
import Checklist from '@/components/pages/Login.vue';

export default [
    {
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard,
        hidden: true,
        children: [
            {
              path: '/checklist',
              name: 'checklist',
              component: Checklist,
              hidden: true,
            },
          ]
    },
];
