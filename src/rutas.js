import InicioComponent from './componentes/InicioComponent.vue'
import TareaComponent from './tareas/Tarea.vue'
import UsuariosComponent from './usuarios/usuariosComponent.vue'
import UsuariosDetalleComponent from './usuarios/usuariosDetalleComponent.vue'

export const rutas = [
    {
        path:'', component:InicioComponent
    },
    {
        path:'/tareas', component:TareaComponent
    },
    {
        path:'/usuarios', component:UsuariosComponent
    },
    {
        path:'/usuarios/:id', component:UsuariosDetalleComponent, name:'detalleUsuario'
    }
    
]