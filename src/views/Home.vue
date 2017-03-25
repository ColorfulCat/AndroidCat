<template>
  <div class="home">
    <div class="contentLayout">
      <mu-row gutter>

        <mu-col id="leftSide" width="20" tablet="20" desktop="20">
          <!--<mu-paper class="demo-menu">-->
            <!--<mu-menu>-->
              <!--<mu-menu-item v-for="menu in menus" :title="menu"/>-->
            <!--</mu-menu>-->
          <!--</mu-paper>-->

          <!--<mu-list id="markMenuLayout">-->
          <mu-list>
            <mu-list-item v-for="menu in menus" :title="menu">
              <mu-icon slot="left" value="inbox"/>
            </mu-list-item>
          </mu-list>
          <!--<CatMenuItem v-for="menu in menus" :cat_menu_item_title="menu"></CatMenuItem>-->
          <!--</mu-list>-->
        </mu-col>
        <mu-col class="leftSideArea" width="20" tablet="20" desktop="20">
        </mu-col>
        <mu-col id="menuLayout" width="80" tablet="80" desktop="80">
          <mu-row gutter id="markListLayout">
            <mu-col v-for="item in items" width="100" tablet="100" desktop="50">
              <CatItem :cat_item_title="item" :cat_item_desc="item"></CatItem>
            </mu-col>
          </mu-row>
        </mu-col>
      </mu-row>
    </div>
  </div>
</template>

<script>
  import CatMenuItem from 'components/CatMenuItem'
  import CatItem from 'components/CatItem'
  export default {
    name: 'home',
    data() {
      return {
        menus: [
          "精品推荐",
          "技术社区",
          "开源大全",
          "文档资料",
          "前沿资讯",
          "服务集成",
          "技术社区",
          "服务集成"
        ],
        items: [
          "稀土掘金", "Gank", "云栖社区", "Android中文网", "23code", "LeanCloud", "Nexus中文网", "Gank", "云栖社区", "Android中文网", "23code", "LeanCloud", "Nexus中文网"
        ]
      }
    },
    components: {
      CatItem, CatMenuItem
    }
  }
</script>
<style scoped>
  .demo-menu {
    display: inline-block;
    /*margin: 16px 32px 16px 0;*/
  }
  * {
    margin: 0;
    padding: 0;
  }

  .home {
    height: 100%;
  }

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

  .contentLayout {
    text-align: center;
  }

  #leftSide {
    position: fixed;
    height: 100%;
    max-width: 200px;
    min-width: 80px;
    background-color: #ffffff;
    -webkit-box-shadow: 2px 2px 5px #888888;
    -moz-box-shadow: 2px 2px 5px #888888;
    box-shadow: 2px 2px 5px #888888;
    overflow: auto;
    /*height:100%;*/
    /*position: absolute;*/
  }

  .leftSideArea {
    max-width: 200px;
  }

  #markMenuLayout {

  }

  #markListLayout {
    margin-top: 16px;
    margin-bottom: 10px;
    margin-left: 0px;
    margin-right: 24px;
  }


</style>
