<template>
  <div class="con">
    <h1>{{ msg }}</h1>
    <button v-on:click="onClickMe">Click!</button>
  </div>
</template>

<script>
export default {
  name: 'con',
  data () {
    return { 
      msg: 'Hello from component Con'
    }
  },
  props:["msgParent"],
  methods:{
  	onClickMe: function(){
  		console.log("onClickMe "+this.msgParent || "")
  		this.$emit('msgChild', "哈哈哈哈！")
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
