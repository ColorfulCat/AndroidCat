<template>
	<div id="app">
		<app-bar></app-bar>
		<keep-alive>
			<transition name="fade" mode="out-in">
				<router-view></router-view>
			</transition>
		</keep-alive>
		<mu-float-button icon="add" secondary class="float-button" @click="fabClick" />
		<mu-drawer :open="open" :docked="docked" @close="toggle()">

			<mu-list @itemClick="docked ? '' : toggle()">
				<h1 class="drawer-menu-header" @click="toggle(false, 'home')"> AndroidCat </h1>
				<mu-divider />
				<mu-list-item class="drawer-menu-item" @click="toggle(false, 'home')" title="书签导航">
					<mu-icon slot="left" value="grade" />
				</mu-list-item>
				<mu-list-item class="drawer-menu-item" @click="toggle(false, 'hello')" title="开源大全">
					<mu-icon slot="left" value="send" />
				</mu-list-item>
				<mu-list-item class="drawer-menu-item" @click="toggle(false, 'todo')" title="关于我们">
					<mu-icon slot="left" value="drafts" />
				</mu-list-item>
				<!--<mu-list-item v-if="docked" @click.native="open = false" title="Close" />-->
			</mu-list>
		</mu-drawer>
		<mu-toast v-if="toast" :message="toastText" @close="hideToast" />
	</div>
</template>

<script>
	import Bus from './bus'
	import AppBar from 'components/AppBar'
	import AppDrawer from 'components/AppDrawer'
	export default {
		name: 'app',
		data() {
			return {
				open: false,
				docked: true,
				toast: false,
				toastText: "╮(╯▽╰)╭ 功能正在开发中……"
			}
		},
		created() {
			Bus.$on('openDrawer', target => {
				this.toggle(true)
				console.log("openDrawer " + target);
			});
			// 当created函数时监测路由信息,防止页面刷新tab高亮错误
			var tmpArr = this.$route.path.split('/')
			if(tmpArr[1]) {
				this.handleMenuSelect(tmpArr[1])
				console.log("tmpArr[1] " + tmpArr[1]);
			}
		},
		components: {
			AppBar,
			AppDrawer
		},
		methods: {
			toggle(flag, index) {
				this.open = !this.open
				this.docked = !flag
				if(index) {
					this.handleMenuSelect(index)
				}
			},
			fabClick() {
				this.showToast()
			},
			showToast() {
				this.toast = true
				if(this.toastTimer) clearTimeout(this.toastTimer)
				this.toastTimer = setTimeout(() => {
					this.toast = false
				}, 2000)
			},
			hideToast() {
				this.toast = false
				if(this.toastTimer) clearTimeout(this.toastTimer)
			},
			handleMenuSelect(val) {
				this.activeTab = val
				this.$router.replace({
					path: '/' + val
				})
			}
		},
		// watch函数监测路由的变化,保持tab面板的高亮位置正确
		watch: {
			//			'$route' (to, from) {
			//				const path = to.path
			//				var tmpArr = path.split('/')
			//				if(tmpArr[1] === 'index') {
			//					this.handleMenuSelect(tmpArr[2])
			//				}
			//			}
		}
	}
</script>

<style>
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: left;
		color: lightBlue500;
		margin-top: 0px;
	}
	
	.drawer-menu-header {
		color: #03a9f4;
		text-align: center;
		cursor: pointer;
	}
	
	.drawer-menu-item {
		text-align: left;
	} 
	
	.float-button {
		position: fixed !important;
		/* 手机平板上距离屏幕右下角 16px */
		right: 16px;
		bottom: 16px;
	}
</style>