import { RouteConfig } from 'react-router-config'


import LayoutContainer from '../layout/LayoutContainer'



import Module from "../views/Module";

const routes: RouteConfig[] = [
    {
        path: '/main',
        component: LayoutContainer,
        routes: [
            {
                path: '/main/module',
                component: Module,
            }
        ],
    }
]

export default routes
