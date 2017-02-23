<!-- 页面标题栏 -->
<template>
  <div class="appbar">
    <mu-appbar>
      <!--title	String	 标题, 显示在中间
titleClass	String,Object,Array	 标题样式，同 class 绑定方式一致
zDepth	Number	 1 阴影等级,设置为 0就没有阴影效果-->
      <mu-icon-button icon='menu' slot="left" @click="leftMenuClick"/>
      <p class="title" slot="left">{{appBarTitle}}</p>
      <!--<form class="searchDiv" slot="right">-->
        <!--<mu-text-field hintText="提示文字"/>-->
        <!--<mu-raised-button id="searchButton" label="搜索" class="demo-raised-button" secondary/>-->
      <!--</form>-->
      <mu-icon-menu icon="more_vert" slot="right" @click="rightMenuClick" :anchorOrigin="leftTop"
                    :targetOrigin="leftTop">
        <mu-menu-item title="修改主题"/>
        <mu-menu-item title="系统设置"/>
        <mu-menu-item title="退出登录"/>
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
      leftMenuClick: function () {
        console.log("leftMenuClick")
        Bus.$emit('openDrawer', true);
      },
      rightMenuClick: function () {
        console.log("rightMenuClick")
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .appbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
  }
  .title{
    text-align: center;
    font-size: 2rem;
    padding-left: 10px;
  }

  .searchDiv{
    text-align: center;
    padding: 6px;
  }

  #searchButton {
    margin: 12px;
  }

  .left-icon-class {
    width: 18px;
    height: 18px;
  }

</style>
