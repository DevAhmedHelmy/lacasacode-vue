import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

 
import Register from '../components/auth/Register'
import Login from '../components/auth/Login'
import Center from '../components/Center';

 
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    name:'register',
    path:"/register",
    component:Register
},
{
    name:'login',
    path:"/login",
    component:Login
},
{
  name:'centers',
  path:'/centers',
  component:Center
}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
