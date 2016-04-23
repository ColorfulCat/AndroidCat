//书签网界面 

var mMenus = [];
var mCats = [];
var menuLinearLayout;
var contentLinearLayout;
var contentScrollView;

function CatFragment() {
	LinearLayout.apply(this);
	this.setOrientation(LinearLayout.HORIZONTAL);

	queryMenus();

	//	  var mPadding = R.dimen.padding;
	//	 var layoutParam1 = new LayoutParams(180,LayoutParams.FILL_PARENT);
	//	  var mWebView = new WebView();
	//	  mWebView.setPadding(0, 0, 0, R.dimen.paragraph_padding_top);
	//	  mWebView.loadUrl("androidcat/index.html");
	//	  this.addView(mWebView, layoutParam1);
	//  this.requestLayout();

	var mainContainer = new LinearLayout();
	mainContainer.setBackgroundColor(R.color.bg);
	mainContainer.setOrientation(LinearLayout.HORIZONTAL);
	mainContainer.onMeasure = function(wMS, hMS) {
		var w = MeasureSpec.getSize(wMS);
		var h = MeasureSpec.getSize(hMS);
		var cntW = Math.min(w, Manifest.maxWidth);
		var menuW = Math.min(cntW / 3, 180);
		menuScrollView.measure(menuW, h);
		contentScrollView.measure(cntW - menuW, h);
		this.setMeasuredDimension(w, h);
	};
	mainContainer.onLayout = function() {
		var x = 0;
		var y = 0;
		var x = (this.getMW() - menuScrollView.getMW() - contentScrollView.getMW()) / 2;
		menuScrollView.layout(x, 0);
		contentScrollView.layout(x + menuScrollView.getMW(), 0);
	};
	this.addView(mainContainer);

	var mPadding = R.dimen.padding;
	var menuScrollView = new ScrollView();
	mainContainer.addView(menuScrollView);

	menuLinearLayout = new LinearLayout();
	menuLinearLayout.setBackgroundColor(R.color.bg);
	menuLinearLayout.setOrientation(LinearLayout.VERTICAL);
	menuScrollView.addView(menuLinearLayout);

	var lp = new LP(LP.FP, LP.WC);
	lp.gravity = Gravity.CENTER;
	lp.setMargins(R.dimen.padding32);
	var progress = new MProgressBar();
	progress.setProgressColor(R.color.theme);
	progress.setStyle(MProgressBar.Small); //Small
	menuLinearLayout.addView(progress,lp); 


	contentScrollView = new ScrollView();
	mainContainer.addView(contentScrollView);

	contentLinearLayout = new LinearLayout();
	contentLinearLayout.setBackgroundColor(R.color.bg);
	contentLinearLayout.setOrientation(LinearLayout.VERTICAL);
	contentScrollView.addView(contentLinearLayout);

}

function queryMenus() {
	var query = new AV.Query('Sort');
	query.addAscending('order');
	query.find().then(function(results) {
		mMenus.clear();
		for (var i = 0; i < results.length; i++) {
			var catMenuItem = {};
			catMenuItem.index = i;
			catMenuItem.title = results[i].get("title");
			catMenuItem.tag = results[i].get("tag");
			if (i == 0) {
				catMenuItem.isSelected = true;
			} else {
				catMenuItem.isSelected = false;
			}
			mMenus.push(catMenuItem);
		}
		updateMenus();
		queryCats(mMenus[0]);
	}, function(error) {
		alert('Error: ' + error.code + ' ' + error.message);
	});
}
//更新视图
function updateMenus() {
	menuLinearLayout.removeAllViews();
	for (var i = 0; i < mMenus.length; i++) {
		var item = new CatMenuItem(mMenus[i]);
		menuLinearLayout.addView(item);
	}
}

function updateMenusSelection(index) {
	for (var j = 0; j < mMenus.length; j++) {
		if (index == j) {
			mMenus[j].isSelected = true;
		} else {
			mMenus[j].isSelected = false;
		}
	}
	updateMenusViews(index);
}

function updateMenusViews(index) {
	for (var i = 0; i < menuLinearLayout.getChildCount(); i++) {

		if (index == i) {
			menuLinearLayout.getChildAt(i).setBackgroundColor(R.color.bg);
			menuLinearLayout.getChildAt(i).getIcon().setImgSrc("img/cat_foot.png");
			menuLinearLayout.getChildAt(i).getTitle().setTextColor(R.color.theme);
		} else {
			menuLinearLayout.getChildAt(i).setBackgroundColor(R.color.card_bg);
			menuLinearLayout.getChildAt(i).getIcon().setImgSrc("img/cat_foot_gray.png");
			menuLinearLayout.getChildAt(i).getTitle().setTextColor(R.color.text);
		}
	}
}

function queryCats(catMenuItem) {
	//
	mCats.clear();
	contentLinearLayout.removeAllViews();
	
	var lp = new LP(LP.FP, LP.WC);
	lp.gravity = Gravity.CENTER;
	lp.setMargins(R.dimen.padding32);
	var progress = new MProgressBar();
	progress.setProgressColor(R.color.theme);
	progress.setStyle(MProgressBar.Small); //Small
	contentLinearLayout.addView(progress,lp); 
	
	var query = new AV.Query('Cat');
	if(catMenuItem.tag == "recommend" || catMenuItem.tag == "" || catMenuItem.tag == "undefined"){
		query.limit(30);
	}else{
		query.equalTo('tag', catMenuItem.tag);
	}
	query.addDescending('grade');
	query.find().then(function(results) {
		
		for (var i = 0; i < results.length; i++) {
			var catItem = {};
			catItem.index = i;
			catItem.id = results[i].get("objectId");
			catItem.createdAt = results[i].get("createdAt");
			catItem.updatedAt = results[i].get("updatedAt");
			catItem.icon = results[i].get("icon");
			catItem.title = results[i].get("title");
			catItem.tag = results[i].get("tag");
			catItem.hit = results[i].get("hit");
			catItem.url = results[i].get("url");
			catItem.desc = results[i].get("desc");

			mCats.push(catItem);
		}
		updateCats(catMenuItem);
	}, function(error) {
		alert('Error: ' + error.code + ' ' + error.message);
	});
}

function updateCats(catMenuItem) {
	contentLinearLayout.removeAllViews();
	var title = Theme.createCatTitle(catMenuItem.title);
	var lpTop = new LP(LP.FP, LP.WC);
	lpTop.topMargin = R.dimen.padding;
	lpTop.bottomMargin = R.dimen.padding;
	contentLinearLayout.addView(title, lpTop);

	var lp = new LP(LP.FP, LP.WC);
	lp.setMargins(R.dimen.half_padding);
	for (var i = 0; i < mCats.length; i++) {
		var item = new CatItem(mCats[i]);
		contentLinearLayout.addView(item, lp);
	}
	//返回顶部
	contentScrollView.scrollTo(0,0);
}