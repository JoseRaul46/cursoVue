import Vue from 'vue'
import App from './App.vue'
import { METHODS } from 'http';
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import {rutas} from './rutas.js'

Vue.use(VueResource);
Vue.use(VueRouter);
Vue.http.options.root = 'https://tarea-221f2.firebaseio.com'

const enrutador = new VueRouter({
  routes:rutas,
  mode:'history'
})

export var bus = new Vue({
   methods:{
    actualizarContador(numTareas){
      this.$emit('actualizarContador', numTareas);
    },
    restarContador(numTareas){
      this.$emit('restarContador', numTareas);
    },
    getContador(numTareas){
      this.$emit('getContador', numTareas);
    }
  }
});

new Vue({
  el: '#app',
  router:enrutador,
  render: h => h(App)
})
