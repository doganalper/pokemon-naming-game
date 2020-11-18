import store from '../store/index';

const routes = [
    {
        path: '/score-board',
        component: () => import('../views/ScoreBoard.vue'),
        name: 'Score-Board',
        props: true
    },
    {
        path: '/game',
        component: () => import('../views/GameStart.vue'),
        name: 'Game',
        beforeEnter: (to, from, next) => {
            if (store.getters.isGameStarted) {
                next();
            } else {
                next({name: "Main"});
            }
        }
    },
    {
        path: '',
        component: () => import('../views/GameMain.vue'),
        name: 'Main'
    },
    {
        path: '*',
        redirect: { name: "Main" },
        name: '404'
    }
]

export default routes;