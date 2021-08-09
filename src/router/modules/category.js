/**
 * module_name          category    类目中心
 * 
 * create_time          2021-08-10
 * 
 * author               SUNXY
 * 
 */

import Layout from '@/layout/index'

export default {
    path: '/category',
    name: 'category',
    redirect: "/category/attribute",
    component: Layout,
    children: [{
        path: 'attribute',
        name: 'Attribute',
        meta: {
            icon: 'icon-dashboard',
        },
        component: () => import( /* webpackChunkName: "sunxy" */ '@/views/category/Attribute.vue'),
    }]
}