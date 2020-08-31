import Dashboard from '@/components/layout/Dashboard.vue';
import Index from '@/components/pages/Dashboard/Index.vue';
import Checklist from '@/components/pages/Dashboard/Checklist.vue';

export default [
    {
        path: '/dashboard',
        component: Dashboard,
        children: [
            {
              path: '',
              name: 'index',
              component: Index,
            },
            {
              path: 'checklist',
              name: 'checklist',
              component: Checklist,
            },
          ]
    },
];
