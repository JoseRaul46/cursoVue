<template>
    <div>
        <ul class="list-group">
            <li class="list-group-item" v-for="(tarea,indice) in objeto.tareas" :class="{terminada : tarea.terminada}">
                    {{tarea.texto}}
                <span class="float-right">
                    <button type="button" class="btn btn-danger btn-sm glyphicon-remove"
                    @click="deleteElement(indice)" >
                        <i class="far fa-trash-alt"></i>
                    </button>
                    <button type="button" class="btn btn-success btn-sm" 
                    @click="modifyCss(indice)">
                        <i class="fas fa-check"></i>
                    </button>
                </span>	
            </li>
        </ul>
    </div>
</template>


<script>
import {bus} from './../main.js';
export default ({
    props:['objeto'],
    methods:{
        modifyCss(indice){
            let terminada = this.objeto.tareas[indice].terminada = !this.objeto.tareas[indice].terminada;
            let id = this.objeto.tareas[indice].id;
            
            this.$http.patch('tareas/'+ id +'.json',{
                terminada : terminada
            }).then(response => console.log(response));
            
		},
		deleteElement(indice){
            let id = this.objeto.tareas[indice].id;
            this.$http.delete('tareas/'+ id +'.json')
            .then(response => console.log(response));
            this.objeto.tareas.splice(indice,1);
            bus.restarContador(this.objeto.tareas.length)
		}
    }, 
    created(){
        bus.restarContador(this.objeto.tareas.length)
    }
})
</script>
<style>
.terminada{
  color:grey;
  text-decoration: line-through !important;
}
</style>
