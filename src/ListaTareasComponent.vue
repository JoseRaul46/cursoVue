<template>
    <div>
        <ul class="list-group">
            <li class="list-group-item" v-for="(tarea,indice) in tareas" :class="{terminada : tarea.terminada}">
                    {{tarea.texto}}
                <span class="float-right">
                    <button type="button" class="btn btn-danger btn-sm glyphicon-remove"
                    @click="deleteElement(indice)" >
                        <i class="far fa-trash-alt"></i>
                    </button>
                    <button type="button" class="btn btn-success btn-sm" @click="modifyCss(indice)">
                        <i class="fas fa-check"></i>
                    </button>
                </span>	
            </li>
        </ul>
    </div>
</template>


<script>
export default ({
    props:['tareas'],
    methods:{
        modifyCss(indice){
			this.tareas[indice].terminada = !this.tareas[indice].terminada;
		},
		deleteElement(indice){
			this.tareas.splice(indice,1);
            this.$emit('restarContador', 1);
		}
    }
})
</script>
<style>
.terminada{
  color:grey;
  text-decoration: line-through !important;
}
</style>
