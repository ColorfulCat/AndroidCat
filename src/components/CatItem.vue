<template>
  <div class="cat-item">
    <mu-flat-button class="cat-item-button" v-on:click="onClickMe">{{cat_item_title}}</mu-flat-button>
  </div>
</template>

<script>
  export default {
    name: 'cat-item',
    data () {
      return {
        msg: 'Hello'
      }
    },
    props: ["cat_item_title"],
    methods: {
      onClickMe: function () {
        console.log("onClickMe " + this.cat_item_title || "")
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .cat-item {
    /*padding:10px;*/
    margin:0;
    background: #fff;
  }

  .cat-item-button {
    width: 100%;
    height:100%;
    margin:3px;
  }

  h1, h2 {
    font-weight: normal;
    font-size: 1rem;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 0px;
  }

  a {
    color: #42b983;
  }
</style>
