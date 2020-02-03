import Dashboard from './pages/dashboard'
import EegUsers from './pages/eeg/users'
import EegCategory from './pages/eeg/category'
import PADList from './pages/questionnaire/pad'

const routes = [
    {
        path: '/dashboard',
        component: Dashboard,
        exact: true
    },
    {
        path: '/eeg',
        component: EegUsers,
        routes: [
            {
                path: '/eeg/users',
                component: EegUsers
            },
            {
                path: '/eeg/category',
                component: EegCategory
            }
        ]
    },
    {
        path: '/questionnaire',
        component: PADList,
        routes: [
            {
                path: '/questionnaire/pad',
                component: PADList
            }
        ]
    }
];

export default routes;