<template>
    <div>
        <h2>{{objeto.titulo}}</h2>
        <h3>{{objeto.subtitulo}}:{{objeto.tareas.length}}</h3>
    </div>
</template>



<script>
import {bus} from './../main.js';

export default ({
    props:['objeto'] ,
    data(){
        return {
            numTareas:this.objeto.tareas.length
        }
    },
    created(){
        bus.$on('actualizarContador', (numTareas)=>{
            this.numTareas = numTareas;
        })
        bus.$on('restarContador', (numTareas)=>{
            this.numTareas = numTareas;
        })
       bus.getContador(this.objeto.tareas.length);
    }
    
})

</script>
