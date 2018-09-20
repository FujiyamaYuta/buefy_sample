import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import Header from './components/common/Header.vue';
import Content from './components/pages/Content.vue';
import Footer from './components/common/Footer.vue';
import { routes } from './routes';
import store from './store/store';
import { sync } from 'vuex-router-sync'

Vue.use(VueRouter);
Vue.use(Buefy);

const router = new VueRouter({
  mode: 'history',
  routes
});

sync(store, router);

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

new Vue({
  el: '#header',
  router,
  store,
  render: h => h(Header)
})

new Vue({
  el: '#footer',
  router,
  store,
  render: h => h(Footer)
})

new Vue({
  el: '#content',
  router,
  store,
  render: h => h(Content)
})