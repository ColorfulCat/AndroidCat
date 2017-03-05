<template>
  <mu-list-item class="cat-item">
    <h5 class="cat-item-button" v-on:click="onClickMe">{{cat_item_title}}</h5>
  </mu-list-item>
</template>

<script>
  import Bus from '../bus'
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
        Bus.$emit('showSnackbar', "");
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

  .cat-item {
    width: 100%;
    height: 100%;
    background-color: white;
    color: black;
    margin: 6px;
    border-radius: 3px;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 1px 2px 0px;
    cursor: pointer;
    overflow: hidden;white-space: nowrap;text-overflow: ellipsis;
  }

  .cat-item:hover{
    box-shadow: rgba(0, 0, 0, 0.4) 0px 3px 6px 0px;
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
