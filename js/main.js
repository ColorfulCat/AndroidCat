//main
var contentDiv = $("#mainSection");
var catMenusUl = $("#catMenus");

var mCats = [];

var lastId = -1;
var idOffset = 0;

$(document).ready(function() {
	log("document.ready");
	initCatMenus();
	queryCats("AndroidCat","recommend");
	updateCatMenus(0);
	snackbar("欢迎光临~");
});

function initCatMenus() {
	catMenusUl.html("");
	catMenusUl.append(createCatMenu("精品推荐", "recommend"));
	catMenusUl.append(createCatMenu("技术社区", "community"));
	catMenusUl.append(createCatMenu("学习教程", "guide"));
	catMenusUl.append(createCatMenu("开源代码", "openSource"));
	catMenusUl.append(createCatMenu("知名博客", "blog"));
	catMenusUl.append(createCatMenu("实用工具", "tool"));
	catMenusUl.append(createCatMenu("资源文档", "resource"));
	catMenusUl.append(createCatMenu("开发框架", "framework"));
	catMenusUl.append(createCatMenu("前沿资讯", "news"));
	catMenusUl.append(createCatMenu("服务集成", "service"));
	catMenusUl.append(createCatMenu("设计资源", "image"));
	catMenusUl.append(createCatMenu("求职招聘", "job"));
	catMenusUl.append(createCatMenu("私活兼职", "money"));
	catMenusUl.append(createCatMenu("平台市场", "channel"));
	catMenusUl.append(createCatMenu("广告服务", "ad"));
}

function updateCatMenus(id) {
	$("#menuId"+id).addClass("active"); //添加样式
	$("#menuId"+lastId).removeClass("active"); //添加样式
	lastId = id;
}

function createCatMenu(title, tag) {
	var currentId = idOffset;
	var parentLi = $('<li></li>');
	var textA = $('<a class="waves-effect">' + title + '</a>');
	parentLi.attr("id","menuId"+currentId);
	parentLi.click(function() {
		log("idOffset = " +currentId);
		log("lastId = " +lastId);
		if(currentId != lastId){
			queryCats(title, tag);
			updateCatMenus(currentId);
		}
	});
	idOffset = idOffset +1;
	textA.appendTo(parentLi);

	return parentLi;
}

function createCatItem(item) {
	var parentDiv = $('<div class="itemLayout card item waves-effect"></div>');
	var childImage = $('<img class="itemLogo" alt="img" src="' + item.icon + '" />');
	childImage.appendTo(parentDiv); //将子div添加到父div中

	var childLayout = $('<div style="float: left;"></div>');
	var title = $('<p class="innerText itemTitle">' + item.title + '</p>');
	var desc = $('<p class="innerText itemDesc">' + item.desc + '</p>');
	title.appendTo(childLayout);
	desc.appendTo(childLayout);

	childLayout.appendTo(parentDiv);

	parentDiv.click(function() {
		setTimeout(function() {
			window.open(item.url, '', '');
		}, 300);

	});
	return parentDiv;
}

function clearCatItem() {
	contentDiv.fadeOut();
	
}

function queryCats(title, tag) {
	mCats = [];
	clearCatItem();
	
	$("#contentTitle").text(title);

	var query = new AV.Query('Cat');
	if(tag == "recommend" || tag == "" || tag == "undefined") {
		query.limit(30);
	} else {
		query.equalTo('tag', tag);
	}
	query.addDescending('grade');
	log("query.find()");
	query.find().then(function(results) {
		contentDiv.html("");
		log("callback");
		if(results != null && results.length > 0) {
			log("size = " + results.length);
			for(var i = 0; i < results.length; i++) {
				var catItem = {};
				catItem.index = i;
				catItem.id = results[i].id;
				catItem.createdAt = results[i].get("createdAt");
				catItem.updatedAt = results[i].get("updatedAt");
				catItem.icon = results[i].get("icon");
				if(catItem.icon == null || catItem.icon.length == 0) {
					catItem.icon = "images/cat_foot.png";
				}
				catItem.title = results[i].get("title");
				catItem.tag = results[i].get("tag");
				catItem.hit = results[i].get("hit");
				catItem.url = results[i].get("url");
				if(catItem.url == null || catItem.url.length == 0) {
					catItem.url = "www.androidcat.com?error=" + catItem.title;
				} else {
					if(catItem.url.indexOf("?") >= 0) {
						catItem.url = catItem.url + "&from=www_androidcat_com";
					} else {
						catItem.url = catItem.url + "?from=www_androidcat_com";
					}
				}
				catItem.desc = results[i].get("desc");
				mCats.push(catItem);
				contentDiv.append(createCatItem(catItem));
			}
			contentDiv.fadeIn();
		} else {
			log("000");
		}
	}, function(error) {
		log('Error: ' + error.code + ' ' + error.message);
	});
}