<template>
  <div class="corpo">
    <nav>
      <ul>
          <li v-for="route in routes" :key="route.id">
            <Menu>
               <router-link :to="route.path ? route.path : '/'">{{route.titulo}}</router-link>
            </Menu>
          </li>
      </ul>
    </nav>
   <router-view></router-view>
  </div>
</template>

<script>

import { routes }  from './routes';
import Menu  from './components/shared/menu/Menu';
export default {
 components: {
   'menu':Menu
 },
  data() {

    return {

      routes
    }

  }

}
</script>

<style scoped>


  .corpo {
    font-family: Helvetica, sans-serif;
    margin: 0 auto;
    width: 96%;
  }


</style>
