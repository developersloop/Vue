import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import {routes} from './routes';
Vue.use(VueResource);
Vue.use(VueRouter);
// registrando o router


const router = new VueRouter({
  routes,
  mode:'history' // tirando o # da rota
});



new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
