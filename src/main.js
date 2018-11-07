import Vue from 'vue'
import App from './App.vue'
import { METHODS } from 'http';

export var bus = new Vue({
   methods:{
    actualizarContador(numTareas){
      this.$emit('actualizarContador', numTareas);
    },
    restarContador(numTareas){
      this.$emit('restarContador', numTareas);
    }
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
