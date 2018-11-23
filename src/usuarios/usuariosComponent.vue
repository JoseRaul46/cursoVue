<template>
    <div>
        <p>Lista de Usuarios</p>{{id}}
        <ul class="list-group">
            <router-link tag="li" :to="{name:'detalleUsuario', params:{id: usuario.id}}" class="list-group-item route" v-for="(usuario,key) in usuarios" >
                {{usuario.name}}
            </router-link>
        </ul>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    data(){
        return{
            id : this.$route.params.id,
            usuarios : {}
        }
    },
    created(){
        this.$http.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                return response.json()
            })
            .then(usuarios =>{
                this.usuarios = usuarios
            })
    }
}
</script>

<style>

</style>
