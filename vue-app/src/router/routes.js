const routes = [
    {
        path: "/",
        name: 'Home',
        component: () => import('../views/Home.vue'),
        children: [
            { 
                path: "/money",
                component: () => import('../views/Money.vue'),
                // children :[
                //     { path: "/bonus", component: () => import('../views/Bonus.vue')},
                // ]
            },
            { path: "/bonus", component: () => import('../views/Bonus.vue')},
            { path: "/test", component: () => import('../views/Test.vue')},
        ]
    },
    // {
    //     path: "/register",
    //     name: 'Register',
    //     component: () => import('../views/Register.vue'),
    // },
    {
        path: "/login",
        name: 'Login',
        component: () => import('../views/Login.vue'),
    },
    // {
    //     path: '/:catchAll(.*)',
    //     name: '404',
    //     component: () => import('../views/404.vue')
    // }
]

export default routes