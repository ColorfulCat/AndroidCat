<template>
	<div class="todo">
		<h1>{{ msg }}</h1>
		<img src="../assets/logo.png" width="66px">
		<input v-model="newItem" v-on:keyup.enter="addNew()" />
		<div id="Con"></div>
		<con msgParent="啦啦啦" v-on:msgChild='listener'></con>
		<p>child say : {{childMsg}}</p>
		<ul>
			<li v-for="item in items" v-bind:class="{finished: item.isFinished}" v-on:click="toggleFinish(item)">
				{{item.label}}
			</li>
		</ul>
	</div>
</template>

<script>
	import Store from '../store'
	import Con from 'components/Con'

	export default {
		name: 'todo',
		components: {
			Con
		},
		data() {
			return {
				msg: '啦啦啦',
				items: Store.fetch(),
				newItem: '',
				childMsg: ''
			}
		},
		watch: {
			items: {
				handler: function(items) {
					Store.save(items)
				},
				deep: true
			}
		},
		events: {
			'listener': function(msg) {
				this.childMsg = msg
			}
		},
		methods: {
			toggleFinish: function(item) {
				console.log(item.isFinished = !item.isFinished)
			},
			addNew: function() {
				console.log('click ' + this.newItem)
				if(this.newItem.length > 0) {
					this.items.push({
						label: this.newItem,
						isFinished: false
					})
					this.newItem = ''
				}
			},
			listener: function(msg) {
				this.childMsg = msg
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.finished {
		text-decoration: underline;
	}
	
	h1,
	h2 {
		font-weight: normal;
	}
	
	ul {
		list-style-type: none;
		padding: 0;
	}
	
	li {
		display: inline-block;
		margin: 0 10px;
		cursor: pointer;
	}
	
	a {
		color: #42b983;
	}
</style>