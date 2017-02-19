import Vue from 'vue'
import Router from 'vue-router'
import Todo from 'components/Todo'
import Hello from 'components/Hello'
import Home from 'views/Home'

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
		path: '*',
		redirect: '/home'
	}]
})