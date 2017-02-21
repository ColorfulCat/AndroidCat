<template>
  <div class="cat-menu-item">
    <mu-flat-button class="cat-item-button" v-on:click="onClickMe">{{cat_menu_item_title}}</mu-flat-button>
  </div>
</template>

<script>
  export default {
    name: 'cat-menu-item',
    data () {
      return {
        msg: 'Hello'
      }
    },
    props: ["cat_menu_item_title"],
    methods: {
      onClickMe: function () {
        console.log("onClickMe " + this.cat_menu_item_title || "")
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .cat-menu-item {
    padding:0;
    margin:0;
  }

  .cat-item-button {
    width: 100%;
    height:100%;
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
