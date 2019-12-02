import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import CardPage from "./pages/CardPage.vue";
import ContactPage from "./pages/ContactPage.vue";
import GrassPage from "./pages/GrassPage.vue";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.config.productionTip = false;

const router = new VueRouter({
  routes: [
    {
      path: "/",
      name: "home",
      component: CardPage
    },
    {
      path: "/contact",
      name: "contact",
      component: ContactPage
    },
    {
      path: "/grass",
      name: "grass",
      component: GrassPage
    }
  ]
});

new Vue({
  render: h => h(App),
  router
}).$mount("#app");
