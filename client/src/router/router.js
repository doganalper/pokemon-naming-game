import VueRouter from 'vue-router';
import routes from './routes';
import store from '../store/index';
import Vue from 'vue';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  if (to.path !== '/' && !store.getters.isGameStarted) {
    next('/');
  } else {
    next();
  }
})

export default router;