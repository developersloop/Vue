<template>
  <div class="corpo">

    <h1 class="painel-titulo" @dblclick="show = !show">{{ titulo }}</h1>
    <div v-show="show" >
       <slot class="painel-conteudo">
         <!-- slot é só usado qundo um componente filho é passado para esse componente-->
     </slot>
    </div>
  </div>
</template>

<script>
export default {
    props:['titulo'],

    data(){
      return{
         show:'true'
      }
    },


  }


</script>

<style scoped>
 /* código anterior omitido */

.painel-fade-enter, .painel-fade-leave-active {
  opacity: 0
}

.painel-fade-enter-active, .painel-fade-leave-active {
  transition: opacity .4s
}
.painel {
    padding: 0 auto;
    border: solid 2px grey;
    display: inline-block;
    margin: 5px;
    box-shadow: 5px 5px 10px grey;
    width: 200px;
    height: 100%;
    vertical-align: top;
    text-align: center;
  }

  .painel .painel-titulo {
    text-align: center;
    border: solid 2px;
    background: lightblue;
    margin: 0 0 15px 0;
    padding: 10px;
    text-transform: uppercase;
  }

  /* colocando todos os elementos do painel com box shadow */

  * {
    box-shadow: 5px 5px 5px;
  }
</style>
