<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light"  data-toggle="collapse" data-target=".nav-collapse.in">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">    
        <ul class="nav nav-pills pull-right">
            <router-link tag="li" exact  @click="closeNav()" class="nav-item nav-link" active-class="active"  to="/"><span @click="closeNav()">Home</span></router-link>
            <router-link tag="li" exact class="nav-item nav-link" active-class="active"    to="/usuarios"><span @click="closeNav()">Usuarios</span></router-link>
            <router-link tag="li" exact class="nav-item nav-link" active-class="active"    to="/tareas"><span @click="closeNav()">Tareas</span></router-link>
        </ul>
  </div>
</nav>
</template>

<script>
export default {
    methods:{
        closeNav(){
            $('.navbar-toggler').click(); //bootstrap 4.x
        }
    }
}

$('.nav li').on('click', function(){
    $('.navbar-toggler').click(); //bootstrap 4.x
});
</script>

<style scoped>

</style>

