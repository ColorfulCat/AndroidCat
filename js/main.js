//var header = new mdui.Headroom('#header');
//var mTab = new mdui.Tab('#tab');

var currentSelection = 0;
var lastId = -1;
var idOffset = 0;
var containerLayout = $("");
var catMenusDiv = $("#bookmarkMenuLayout");
var listLayout = $("#listLayout");
var mCats = [];

var needRefresh = true;

// all start here 
$(document).ready(function() {
	log("document.ready");
	var lastRefreshTimeItem = localStorage.getItem("lastRefreshTime");
	var lastRefreshTime = 0;
	if(lastRefreshTimeItem != null) {
		lastRefreshTime = parseInt(lastRefreshTimeItem);
	}
	var timestamp = new Date().getTime();
	if(true){//(timestamp - lastRefreshTime) > 3600000) {
		localStorage.setItem("lastRefreshTime", timestamp);
		needRefresh = true;
	} else {
		needRefresh = false;
	}

	initSideMenu();
	queryCats("AndroidCat", "recommend");
	updateMenus(-1)
	initWeather();
});

function initWeather() {
	var city = localStorage.getItem("city");
	var weatherString = localStorage.getItem("weatherString");
	if(needRefresh) {
		$.getScript('http://int.dpool.sina.com.cn/iplookup/iplookup.php?format=js', function() {
			if(remote_ip_info != null) {
				log(remote_ip_info);
				localStorage.setItem("city", remote_ip_info.city);
				var url = "http://www.tuling123.com/openapi/api?key=b073898069f9d162bff92779730a32cb&info=" + remote_ip_info.city + "天气";
				$(function() {
					$.getJSON(url, function(data) {
						if(data != null && data.text != null) {
							var tempString = data.text;
							console.log("data =  " + tempString);
							var weatherStringTemp = remote_ip_info.city + "  " + tempString.substring(tempString.indexOf(',') + 1, tempString.indexOf('°') + 1);
							localStorage.setItem("weatherString", weatherStringTemp);
							$("#cityLabel").html(weatherStringTemp);
						}
					})
				});
			} else {
				console.log("remote_ip_info is null");
			}
		});
	} else {
		log("time is not enough to refresh weather");
		$("#cityLabel").html(weatherString);
	}
}

function initSideMenu() {
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
	//	catMenusDiv.append(createBookmarkMenu("求职招聘", "job"));
	//	catMenusDiv.append(createBookmarkMenu("私活兼职", "money"));
	//	catMenusDiv.append(createBookmarkMenu("平台市场", "channel"));
	//	catMenusDiv.append(createBookmarkMenu("广告服务", "ad"));

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
	var parentLi = $('<div class="mdui-list-item mdui-ripple myHover">' + title + '</div>');
	parentLi.attr("id", "menuId" + currentId);
	parentLi.click(function() {
		log("idOffset = " + currentId);
		log("lastId = " + lastId);
		if(currentId != lastId) {
			queryCats(title, tag);
			updateMenus(currentId);
		} else {
			//返回滚动到顶部
			$(document.body).animate({
				'scrollTop': 0
			}, 500);
		}
	});
	idOffset = idOffset + 1;

	return parentLi;
}

function updateMenus(id) {
	if(id >= 0) {
		$("#menuId" + id).addClass("mdui-list-item-active"); //添加样式
		$("#menuId" + lastId).removeClass("mdui-list-item-active"); //移除样式
		$("#aboutMenu").removeClass("mdui-list-item-active"); //移除样式
		$("#homepageMenu").removeClass("mdui-list-item-active"); //移除样式
	} else {
		if(id == -1) { // 首页
			$("#homepageMenu").addClass("mdui-list-item-active"); //添加样式
			$("#aboutMenu").removeClass("mdui-list-item-active"); //移除样式
		} else if(id == -2) { //关于
			$("#aboutMenu").addClass("mdui-list-item-active"); //添加样式
			$("#homepageMenu").removeClass("mdui-list-item-active"); //移除样式
		}
		$("#menuId" + lastId).removeClass("mdui-list-item-active"); //移除样式
	}
	lastId = id;
}

function createBookmarks(item) {
	var divP = $('<div class="mdui-col-sm-12 mdui-col-md-6 mdui-col-lg-4"></div>');
	var liP = $('<li class="mdui-list-item mdui-ripple bookMarkItem"></li>');
	var imgC = $('<img class="avatar" src="' + item.icon + '" />')
	var divC = $('<div class="content">' + item.title + '</div>')
	divP.append(liP);
	liP.append(imgC);
	liP.append(divC);
	liP.click(function() {
		setTimeout(function() {
			window.open(item.url, '', '');
		}, 300);
	});
	return divP;
}

function clearCatItem() {
	listLayout.fadeOut(300);
}

function queryCats(title, tag) {
	mCats = [];
	clearCatItem();

	$("#listTitle").text(title);
//	if(needRefresh) {
		queryResults(tag);
//	} else {
//		var dataTemp = localStorage.getItem("tag_" + tag);
//		var dataObj = null;
//		if(dataTemp != null){
//			dataObj = JSON.parse(dataTemp);
//		}
//		
//		if(dataObj != null) {
//			setResults(dataObj);
//		} else {
//			queryResults(tag);
//		}
//	}

}

function queryResults(tag) {
	var query = new AV.Query('Cat');
	if(tag == "recommend" || tag == "" || tag == "undefined") {
		query.limit(30);
	} else {
		query.equalTo('tag', tag);
	}
	query.addDescending('grade');
	query.find().then(function(results) {
		localStorage.setItem("tag_" + tag, JSON.stringify(results));
		setResults(results);
	}, function(error) {
		log('Error: ' + error.code + ' ' + error.message);
	});
}

function setResults(results) {
	if(results != null && results.length > 0) {
		log("cat size = " + results.length);
		listLayout.html("");
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
			listLayout.append(createBookmarks(catItem));
		}

		//返回顶部
		$(document.body).animate({
			'scrollTop': 0
		}, 500);
		//展示
		contentDiv.fadeIn(300);
	} else {
		log("000");
	}
}