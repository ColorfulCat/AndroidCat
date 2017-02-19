<!-- 页面标题栏 -->
<template>
	<div class="appbar">
		<mu-appbar v-bind:title="appBarTitle">
			<!--title	String	 标题, 显示在中间
titleClass	String,Object,Array	 标题样式，同 class 绑定方式一致
zDepth	Number	 1 阴影等级,设置为 0就没有阴影效果-->
			<mu-icon-button icon='menu' slot="left" @click="leftMenuClick" />
			<mu-icon-menu icon="more_vert" slot="right" @click="rightMenuClick" :anchorOrigin="leftTop" :targetOrigin="leftTop">
				<mu-menu-item title="Menu1" />
				<mu-menu-item title="Menu2" />
				<mu-menu-item title="Menu3" />
				<mu-menu-item title="Menu4" />
				<mu-menu-item title="Menu5" />
			</mu-icon-menu>
		</mu-appbar>
	</div>
</template>

<script>
	import Bus from '../bus'
	export default {
		name: 'appbar',
		data() {
			return {
				appBarTitle: 'AndroidCat',
				leftTop: {
					horizontal: 'left',
					vertical: 'top'
				}
			}
		},
		methods: {
			leftMenuClick: function() {
				console.log("leftMenuClick")
				Bus.$emit('openDrawer', true);   
			},
			rightMenuClick: function() {
				console.log("rightMenuClick")
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>