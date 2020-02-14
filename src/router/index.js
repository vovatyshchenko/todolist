import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Todo from '../views/Todo.vue'
import SingIn from '../views/SingIn.vue'
import SingUp from '../views/SingUp.vue'
import Support from '../views/Support.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/todo',
    name: 'todo',
    component: Todo
  },
  {
    path: '/singin',
    name: 'singin',
    component: SingIn
  },
  {
    path: '/registration',
    name: 'registration',
    component: SingUp
  },
  {
    path: '/support',
    name: 'support',
    component: Support
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
