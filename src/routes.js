import Main from './components/Main.vue';
import A from './components/A.vue';
import B from './components/B.vue';
import C from './components/C.vue';

export const routes = [
  { path: '/', component: Main },
  { path: '/a', component: A },
  { path: '/b', component: B },
  { path: '/c', component: C },
];