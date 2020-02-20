import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Todo from '../views/Todo.vue'
import SingIn from '../views/SingIn.vue'
import SingUp from '../views/SingUp.vue'
import Store from '../store'

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
    component: Todo,
    beforeEnter: guard
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
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

function guard(from, to, next) {
  if (Store.getters.is_user_authenticated === true){
    next()
  }  
  else{
    next('/singin')
  }  
}

export default router
