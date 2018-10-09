<template>
  <div>

   <my-title :title="titulo"></my-title>

   <input type="text" placeholder="Digite para filtrar" v-model="filtro">

   <p>{{filtro}}</p>

    <ul class="lista-fotos">
      <li class="lista-fotos-item" v-for="photo of fotosComFilter" :key="photo.id">
       <meu-painel :titulo="photo.titulo">
          <img-responsive :url="photo.url" :alt="photo.titulo"></img-responsive>
          <my-btn
          :tipo="button ? button : 'button'"
          :rotulo="remover ? remover : 'remover'"
          @botaoAtivado="Remover(photo)"
          :estilo="perigo ? perigo : 'padrao'"/>

        </meu-painel>
      </li>
    </ul>

  </div>
</template>

<script>
// @click native, passa o evento click para o button componente filho
// @botaativado dispara a acação que esta no componente button
import Painel from '../shared/painel/Painel';
import Menu from '../shared/menu/Title';
import Imagem from '../shared/img/ImgResponsive';
import Button from '../shared/Button/Button';
export default {

  components:{ // importando um componente externo
    'meu-painel' : Painel,
    'my-title': Menu,
    'img-responsive': Imagem,
    'my-btn':Button
  },
  name: 'app',
  data () {
    return {
      titulo:'Alura pic',
      photos:[],
      filtro:'',
    }
  },

 computed:{
   fotosComFilter(){
     if(this.photos){
       let reg = new RegExp(this.filtro.trim(), 'i');
       return this.photos.filter(photo =>reg.test(photo.titulo))
     } else {
        return this.photos;
     }

   }
 },

 methods:{
   Remover(photo){
     alert('Remover essa foto ?' + photo.titulo);
   }
 },
  created(){
    this.$http.get('http://localhost:3000/v1/fotos')
        .then(res => res.json())
        .then(fotos => this.photos = fotos, err => console.log(err));
    }
  }


</script>

<style scoped>

.centralizado {
    text-align: center;
  }

  .corpo {
    font-family: Helvetica, sans-serif;
    margin: 0 auto;
    width: 96%;
  }

  .lista-fotos {
    list-style: none;
  }

  .lista-fotos .lista-fotos-item {
    display: inline-block;
  }

  /* estilo do painel */

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
  input{
    width: 100%;
  }
</style>
