<template>
    <div id="tarea">
        <titulo :objeto="objeto"></titulo>
        <nueva-tarea :objeto="objeto"></nueva-tarea>
        <lista-tareas :objeto="objeto"></lista-tareas>
        </br>
        <button class="btn btn-primary" @click="volver"><i class="fa fa-chevron-left"></i> Inicio</button>
    </div>
    
</template>

<script>

import Titulo from './TituloComponent.vue'
import NuevaTarea from './NuevaTareaComponent.vue'
import ListaTareas from './ListaTareasComponent.vue'

export default {
  name:'#tarea',
  components:{
    titulo:Titulo,
    nuevaTarea:NuevaTarea,
    listaTareas:ListaTareas
  },
  data(){
    return{
      objeto:{
        titulo:'listas',
        subtitulo:'Nº de Tareas',
        tareas:[]
      },
      
    }
  },
  methods:{
    actualizarContador(){
      this.numTareas++;
    },
    restarContador(){
      this.numTareas--;
    },
    getContado(){
      this.numTareas;
    },
    volver(){
      this.$router.push('/');
    }
  }, created(){
    this.$http.get('tareas.json')
    .then(response => {
        return response.json();
      })
      .then(responseJson => {
        for(let id in responseJson){
          let tarea = {
            id:id,
            texto: responseJson[id].texto,
            terminada : responseJson[id].terminada
          }
          this.objeto.tareas.push(tarea);
        }
      });
  }
}
</script>


<style>
.titulo{
  margin-top: 7px;
}
</style>
