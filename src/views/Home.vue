<template>
  <div class="home">
    <div class="title">这是首页</div>
    <h5>Android  ╮(╯▽╰)╭  </h5>
    <div class="contentLayout">
      <mu-row gutter>
        <mu-col width="20" tablet="20" desktop="20">
          <div id="markMenuLayout">
            <CatMenuItem :cat_menu_item_title="menu"></CatMenuItem>
            <CatMenuItem :cat_menu_item_title="menu"></CatMenuItem>
            <CatMenuItem :cat_menu_item_title="menu"></CatMenuItem>
            <CatMenuItem :cat_menu_item_title="menu"></CatMenuItem>
            <CatMenuItem :cat_menu_item_title="menu"></CatMenuItem>
          </div>
        </mu-col>
        <mu-col width="80" tablet="80" desktop="80">
          <mu-row gutter id="markListLayout">
            <mu-col width="100" tablet="50" desktop="33">
              <CatItem :cat_item_title="item"></CatItem>
            </mu-col>
            <mu-col width="100" tablet="50" desktop="33">
              <CatItem :cat_item_title="item"></CatItem>
            </mu-col>
            <mu-col width="100" tablet="50" desktop="33">
              <CatItem :cat_item_title="item"></CatItem>
            </mu-col>
            <mu-col width="100" tablet="50" desktop="33">
              <CatItem :cat_item_title="item"></CatItem>
            </mu-col>
            <mu-col width="100" tablet="50" desktop="33">
              <CatItem :cat_item_title="item"></CatItem>
            </mu-col>
            <mu-col width="100" tablet="50" desktop="33">
              <CatItem :cat_item_title="item"></CatItem>
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
        menu: '精品推荐',
        item: '稀土掘金'
      }
    },
    components: {
      CatItem, CatMenuItem
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

  .contentLayout {
    text-align: center;
  }
</style>
