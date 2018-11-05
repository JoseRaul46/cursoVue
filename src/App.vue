<template>
  <div id="app" class="container">
    <div class="jumbotron">
      <titulo :titulo="titulo"></titulo>
    </div>
  </div>
</template>

<script>
import Titulo from './TituloComponent.vue'
export default {
  components:{
    titulo: 'lista de tareas'
  }
}
</script>


<style>

</style>
