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
export default ({
    data(){
        return{
            nuevaTarea:''
        }
    },
    props:['tareas'],
    methods:{
        agregarTarea(){
            var texto = this.nuevaTarea.trim();
            if(texto){
                this.tareas.push({
                    texto:texto,
                    terminada:false
                })
                this.$emit('incrementarContador', 1);
            }
            this.nuevaTarea = '';
            
        }
    }
})
</script>
