<template>
    <div>
        <h2>Información del Usuario</h2>
        <div>
            <p><strong>Nombre : </strong> {{nombre}}</p>
            <p><strong>Email : </strong> {{email}}</p>
        </div>
        <router-link tag="button" to="/usuarios" class="btn btn-primary">Volver</router-link>
    </div>
</template>

<script>
export default {
    data(){
        return{
            nombre:'',
            email:''
        }
    },
    created(){
        console.log('hola');
        console.log(this.$route.params.id);
        let id = this.$route.params.id;
        this.$http.get('https://jsonplaceholder.typicode.com/users/'+id)
        .then(respuesta => {
            return respuesta.json()
        })
        .then(usuario => {
            this.nombre = usuario.name;
            this.email = usuario.email;
        })
    }
}
</script>

<style>

</style>
