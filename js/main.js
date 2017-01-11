//var header = new mdui.Headroom('#header');
//var mTab = new mdui.Tab('#tab');

var currentSelection = 0;
var lastId = -1;
var idOffset = 0;
var catMenusDiv = $("#bookmarkMenuLayout");

var mCats = [];

// all start here 
$(document).ready(function() {
	log("document.ready");
	
	initSideMenu();
	
});


function initSideMenu(){
	catMenusDiv.html("");
	catMenusDiv.append(createBookmarkMenu("精品推荐", "recommend"));
	catMenusDiv.append(createBookmarkMenu("技术社区", "community"));
	catMenusDiv.append(createBookmarkMenu("学习教程", "guide"));
	catMenusDiv.append(createBookmarkMenu("开源代码", "openSource"));
	catMenusDiv.append(createBookmarkMenu("知名博客", "blog"));
	catMenusDiv.append(createBookmarkMenu("实用工具", "tool"));
	catMenusDiv.append(createBookmarkMenu("资源文档", "resource"));
	catMenusDiv.append(createBookmarkMenu("开发框架", "framework"));
	catMenusDiv.append(createBookmarkMenu("前沿资讯", "news"));
	catMenusDiv.append(createBookmarkMenu("服务集成", "service"));
	catMenusDiv.append(createBookmarkMenu("设计资源", "image"));
	catMenusDiv.append(createBookmarkMenu("求职招聘", "job"));
	catMenusDiv.append(createBookmarkMenu("私活兼职", "money"));
	catMenusDiv.append(createBookmarkMenu("平台市场", "channel"));
	catMenusDiv.append(createBookmarkMenu("广告服务", "ad"));
	
	var homepageMenu = $("#homepageMenu");
	var aboutMenu = $("#aboutMenu");
	
	homepageMenu.click(function() {
			updateMenus(-1);
	});
	aboutMenu.click(function() {
			updateMenus(-2);
	});
	
}


function createBookmarkMenu(title, tag) {
	var currentId = idOffset;
	var parentLi = $('<div class="mdui-list-item mdui-ripple">' + title + '</div>');
	parentLi.attr("id","menuId"+currentId);
	parentLi.click(function() {
		log("idOffset = " +currentId);
		log("lastId = " +lastId);
		if(currentId != lastId){
//			queryCats(title, tag);
			updateMenus(currentId);
		}else{
			//返回滚动到顶部
			$(document.body).animate({'scrollTop':0},500);
		}
	});
	idOffset = idOffset +1;

	return parentLi;
}


function updateMenus(id) {
	if(id >= 0){
		$("#menuId"+id).addClass("mdui-list-item-active"); //添加样式
		$("#menuId"+lastId).removeClass("mdui-list-item-active"); //移除样式
		$("#aboutMenu").removeClass("mdui-list-item-active"); //移除样式
		$("#homepageMenu").removeClass("mdui-list-item-active"); //移除样式
	}else{
		if(id == -1){ // 首页
			$("#homepageMenu").addClass("mdui-list-item-active"); //添加样式
			$("#aboutMenu").removeClass("mdui-list-item-active"); //移除样式
		}else if(id == -2){//关于
			$("#aboutMenu").addClass("mdui-list-item-active"); //添加样式
			$("#homepageMenu").removeClass("mdui-list-item-active"); //移除样式
		}
		$("#menuId"+lastId).removeClass("mdui-list-item-active"); //移除样式
	}
	lastId = id;
}