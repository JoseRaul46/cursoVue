<template>
    <div>
        <h2>{{titulo}}</h2>
        <h3>{{subtitulo}}: {{numTareas}}</h3>
    </div>
</template>



<script>
import {bus} from './main.js';

export default ({
    props:['titulo', 'subtitulo'] ,
    data(){
        return {
            numTareas:0
        }
    },
    created(){
        bus.$on('actualizarContador', (numTareas)=>{
            this.numTareas = numTareas;
        })
        bus.$on('restarContador', (numTareas)=>{
            this.numTareas = numTareas;
        })
    }
})
</script>
