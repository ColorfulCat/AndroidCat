import Vue from 'vue'
import Router from 'vue-router'
import Todo from 'components/Todo'
import Hello from 'components/Hello'
import Home from 'views/Home'
import About from 'views/About'
import MarkDown from 'views/MarkDown'

Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({
    y: 0
  }),
  routes: [{
    path: '/home',
    name: 'Home',
    component: Home
  }, {
    path: '/hello',
    name: 'Hello',
    component: Hello
  }, {
    path: '/todo',
    name: 'Todo',
    component: Todo
  }, {
    path: '/about',
    name: 'About',
    component: About
  }, {
    path: '/markdown',
    name: 'MarkDown',
    component: MarkDown
  }, {
    path: '*',
    redirect: '/home'
  }]
})
