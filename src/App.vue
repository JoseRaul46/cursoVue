<template>
  <div id="app" class="container">
    <encabezado></encabezado>
    <main class="jumbotron">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>

import Encabezado from './componentes/EncabezadoComponent.vue'

export default {
  components:{
    encabezado:Encabezado 
  },
  data(){
    return{
      usuarios:'usuarios'
    }
  }
  
}
 
</script>


<style>
.nav-item{
  cursor: pointer;
}
.route{
  cursor: pointer;
}
</style>
