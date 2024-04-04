import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'
import Detail from '@/views/Detail.vue'
import Home from '@/views/Home.vue'
import Article from '@/views/Layout/Article.vue'
import Collect from '@/views/Layout/Collect.vue'
import Like from '@/views/Layout/Like.vue'
import User from '@/views/Layout/User.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/detail/:id', component: Detail },
  {
    path: '/',
    redirect: '/article',
    component: Home,
    children: [
      { path: 'article', component: Article },
      { path: 'collect', component: Collect },
      { path: 'like', component: Like },
      { path: 'user', component: User }
    ]
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (!localStorage.getItem('mobile-token') && to.path !== '/login' && to.path !== '/register') {
    next('/login')
    return
  }
  next()
})

export default router
