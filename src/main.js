import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import HelloWorld from "./components/HelloWorld.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: "/cadastro",
      component: HelloWorld,
    },
  ],
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
