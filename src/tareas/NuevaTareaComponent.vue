<template>
    <div class="input-group mb-3">
        <input type="text"
                placeholder="Escribe una nueva tarea"
                v-model="nuevaTarea"
                class="form-control"
                v-on:keyup.enter="agregarTarea">
        <div class="input-group-append">
            <button type="button"
                    v-on:click="agregarTarea"
                    class="btn btn-primary">
                    Agregar
            </button>
        </div>   
    </div>

</template>


<script>
import {bus} from './../main.js';
export default ({
    data(){
        return{
            nuevaTarea:''
        }
    },
    props:['objeto'],
    methods:{
        agregarTarea(){
            var texto = this.nuevaTarea.trim();
            if(texto){
                this.objeto.tareas.push({
                    texto:texto,
                    terminada:false
                })
                bus.actualizarContador(this.objeto.tareas.length);
                
                this.$http.post('tareas.json',{
                texto:texto,
                terminada:false
            }).then(response => console.log(response));
            }
            this.nuevaTarea = '';
            
        }
    }, 
    created(){
        bus.actualizarContador(this.objeto.tareas.length);
    }
})
</script>
