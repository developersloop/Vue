<template>

    <button @click="dispatch()" class="botao" :class="verifyStyle" :type="tipo">{{rotulo ? rotulo : 'Remover'}}</button>

</template>
<script>
export default {

// validando props
   props:{
      tipo: {
        required:true,
        type:String
      },

      rotulo: {
         required:true,
         type:String
      },
      estilo : {
        required:true,
        type:String
      }

   },

   methods: {
      dispatch() {
         if(confirm('Confirmar Operacao')){
           this.$emit('botaoAtivado'); // emite o evento que esta no compoente pai
         }
      }
   },

   computed: {
        verifyStyle() {
           if(this.estilo == 'padrao'){
             return 'botao-padrao';
           }
           if(this.estilo == 'perigo'){
             return 'botao-perigo';
           } else {
             return 'botao-exception';
           }
        }
   }
}
</script>

<style scoped>
    .botao {
        display: inline-block;
        padding: 10px;
        border-radius: 3px;
        margin: 10px;
        font-size: 1.2em;
    }

    .botao-perigo {
        background: firebrick;
        color: white;
    }

    .botao-padrao {
        background: darkcyan;
        color: white;
    }
     .botao-exception {
        background: darkblue;
        color: white;
    }

</style>
