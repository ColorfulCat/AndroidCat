<template>
	<div class="about">
		<div class="title">这是关于</div>
		<h5>{{msg}}</h5>
	</div>
</template>

<script>
	export default {
		name: 'about',
		data() {
			return {
				msg: '啦啦啦'
			}
		}
	}
</script>
<style scoped>
	h5 {
		text-align: center;
		font-size: 2rem;
	}
	
	.title {
		font-size: 3rem;
		margin: 16px;
		text-align: center;
	}
</style>