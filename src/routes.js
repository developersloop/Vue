
import Home from './components/Home/Home.vue';
import Cadastro from './components/shared/cadastro/cadastro.vue';

export const routes = [

  { path: '', component: Home, titulo: 'Home'  },
  { path: '/cadastro', component: Cadastro, titulo: 'Cadastro'}

];
