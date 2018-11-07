<template>
  <div id="app" class="container">
    <div class="jumbotron">
      <titulo :titulo="titulo" :subtitulo="subtitulo" ></titulo>
      <nueva-Tarea :tareas="tareas" :actualizarContador="actualizarContador"></nueva-Tarea>
      <lista-tareas :tareas="tareas" :restarContador="restarContador"></lista-tareas>
    </div>
  </div>
</template>

<script>
import Titulo from './TituloComponent.vue'
import NuevaTarea from './NuevaTareaComponent.vue'
import ListaTareas from './ListaTareasComponent.vue'

export default {
  components:{
    Titulo,
    NuevaTarea,
    ListaTareas
  },
  data(){
    return{
      titulo:'lista',
      subtitulo:'Nº de Tareas',
      tareas:[
        {
          texto:'Angular',
          terminada:false
        },
        {
          texto:'spring',
          terminada:false
        },
        {
          texto:'hibernate',
          terminada:false
        },
      ]
    }
  },
  methods:{
    actualizarContador(){
      this.numTareas++;
    },
    restarContador(){
      this.numTareas--;
    }
  }
}
</script>


<style>

</style>
