import { createRouter, createWebHistory } from 'vue-router'
import PrimeiraPagina from '../views/PrimeiraPagina.vue'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/PrimeiraPagina',
      name: 'PrimeiraPagina',
      //quando se usa o component , deve-se importar o component para depois clararar a rota 
      component: PrimeiraPagina
    },
    {
      path: '/SegundaPagina',
      name: 'SegundaPagina',
      //import dinamico , desta forma não  é preciso importar o componente vue
      component: () => import('../views/SegundaPagina.vue')
    }, 
    {
      path: '/' , 
      name: 'Home' , 
      component: Home
    }
  ]
})

export default router
