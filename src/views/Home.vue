<template>
	<div class="home">
    <mu-refresh-control :refreshing="refreshing" :trigger="trigger" @refresh="refresh"/>
		<div class="title">这是首页</div>
		<h5>{{msg}}</h5>
		<p>111111</p>
		<div>
			<mu-flexbox>
				<mu-flexbox-item class="flex-demo">

				</mu-flexbox-item>
				<mu-flexbox-item class="flex-demo">
					2
				</mu-flexbox-item>
				<mu-flexbox-item class="flex-demo">
					3
				</mu-flexbox-item>
			</mu-flexbox>
			<mu-flexbox class="mt8">
				<mu-flexbox-item class="flex-demo">
					4
				</mu-flexbox-item>
				<mu-flexbox-item class="flex-demo">
					5
				</mu-flexbox-item>
			</mu-flexbox>
			<mu-flexbox class="mt8">
				<mu-flexbox-item order="0" class="flex-demo">
					6
				</mu-flexbox-item>
				<mu-flexbox-item order="2" span="200" class="flex-demo">
					7
				</mu-flexbox-item>
				<mu-flexbox-item order="1" class="flex-demo">
					8
				</mu-flexbox-item>
			</mu-flexbox>
			<mu-flexbox class="mt8" orient="vertical">
				<mu-flexbox-item order="0" class="flex-demo">
          <CatItem :cat_item_title="msg"></CatItem>
				</mu-flexbox-item>
				<mu-flexbox-item order="2" class="flex-demo">
					10
				</mu-flexbox-item>
        <mu-flexbox-item order="2" class="flex-demo">
          10
        </mu-flexbox-item>
        <mu-flexbox-item order="2" class="flex-demo">
          10
        </mu-flexbox-item>
        <mu-flexbox-item order="2" class="flex-demo">
          10
        </mu-flexbox-item>
        <mu-flexbox-item order="2" class="flex-demo">
          10
        </mu-flexbox-item>
        <mu-flexbox-item order="2" class="flex-demo">
          10
        </mu-flexbox-item>
			</mu-flexbox>
		</div>

	</div>
</template>

<script>
  import CatItem from 'components/CatItem'
	export default {
		name: 'home',
		data() {
			return {
				msg: 'Welcome to Your Vue.js App',
        refreshing: false,
        trigger: null
			}
		},
    components: {
      CatItem
    },
    mounted () {
      this.trigger = this.$el
    },
    methods: {
      refresh () {
        this.refreshing = true
        setTimeout(() => {
          this.refreshing = false
        }, 2000)
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

	.mt8 {
		margin-top: 8px;
	}

	.flex-demo {
		height: 48px;
		background-color: #e0e0e0;
		text-align: center;
		line-height: 48px;
	}
</style>
