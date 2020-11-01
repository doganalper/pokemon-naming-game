import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  let isGameStarted = store.getters.isGameStarted;
  let routeName = to.name;
  if(!isGameStarted && routeName !== "MainScreen" && routeName !== "NotFound") {
    return next({path: '/'})
  }
  return next()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
