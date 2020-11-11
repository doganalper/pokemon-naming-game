const routes = [
    {
        path: '/',
        component:() => import('../views/GameMain.vue')
    },
    {
        path: '/game',
        component:() => import('../views/GameStart.vue')
    }
]

export default routes;