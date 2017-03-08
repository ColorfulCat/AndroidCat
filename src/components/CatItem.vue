<template>
  <mu-list-item class="cat-item">
    <mu-row gutter>
      <mu-col class="col" width="20" tablet="20" desktop="20">
        <img class="avatar" src="http://androidcat.com/img/cat_icon.png"/>
      </mu-col>
      <mu-col id="menuLayout" width="80" tablet="80" desktop="80">
        <h4 class="cat-item-button" v-on:click="onClickMe">{{cat_item_title}}</h4>
        <h5 class="cat-item-button" v-on:click="onClickMe">{{cat_item_title}}</h5>
      </mu-col>
    </mu-row>


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
  * {
    margin:0;
  }
  .cat-item {
    /*padding:10px;*/
    margin:0;
    background: #fff;
  }
  .col {
    margin:0;
    padding:0;
    text-align: left;
  }

  .cat-item-button {
    width: 100%;
    height:auto;
    margin:0px;
  }

  .cat-item {
    width: 100%;
    height: 100%;
    background-color: white;
    color: black;
    margin: 6px;
    border-radius: 1px;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 1px 2px 0px;
    cursor: pointer;
    overflow: hidden;white-space: nowrap;text-overflow: ellipsis;
  }

  .cat-item:hover{
    box-shadow: rgba(0, 0, 0, 0.4) 0px 3px 6px 0px;
  }
  .avatar {
    width:48px;
    height:48px;
    background: grey;
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
