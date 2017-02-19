<!-- 页面抽屉菜单 -->
<template>
	<div class="appdrawer">
		<!--<mu-raised-button label="toggle drawer" @click="toggle()" />
		<mu-raised-button label="undocked drawer" @click="toggle(true)" />-->
		<mu-drawer :open="open" :docked="docked" @close="toggle()">
			<mu-list @itemClick="docked ? '' : toggle()">
				<h1 class="drawer-menu-header" > AndroidCat </h1>
				<mu-list-item title="书签导航" >
					<mu-icon slot="left" value="inbox"/>
				</mu-list-item>
				<mu-divider />
				<mu-list-item class="drawer-menu-item" title="开源大全" />
				<mu-list-item class="drawer-menu-item" title="关于我们" />
				<!--<mu-list-item v-if="docked" @click.native="open = false" title="Close" />-->
			</mu-list>
		</mu-drawer>
	</div>
</template>

<script>
	import Bus from '../bus'
	export default {
		name: 'appdrawer',
		data() {
			return {
				open: false,
				docked: true
			}
		},
		created() {
			Bus.$on('openDrawer', target => {
				console.log("openDrawer " + target);
				this.toggle(true)
			});
		},
		methods: {
			toggle(flag) {
				this.open = !this.open
				this.docked = !flag
			}
		}
	}
</script>

<style scoped>
	.drawer-menu-header {
		color: indigo;
		text-align: center;
		cursor: pointer;
	}
	.drawer-menu-item {
		text-align: center;
	}
</style>