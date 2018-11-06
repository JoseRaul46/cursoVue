<template>
  <div id="app" class="container">
    <div class="jumbotron">
      <titulo :titulo="titulo, subtitulo"></titulo>
      <nueva-Tarea :tareas="tareas" v-on:incrementarContador="numTareas+=$event"></nueva-Tarea>
      <lista-tareas :tareas="tareas" v-on:restarContador="numTareas-=$event"></lista-tareas>
      {{numTareas}}
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
      subtitulo:'subtitulo prueba',
      numTareas:3,
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
  }
}
</script>


<style>

</style>
