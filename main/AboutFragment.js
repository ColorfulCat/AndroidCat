function AboutFragment() {
	ScrollView.apply(this);

	var scrollCnt = new ViewGroup();
	scrollCnt.setBackgroundColor(R.color.card_bg);
	scrollCnt.onMeasure = function(wMS) {
		var w = MeasureSpec.getSize(wMS);
		var cntW = Math.min(w, Manifest.maxWidth);
		cnt.measure(cntW, 0);
		this.setMeasuredDimension(w, cnt.getMH());
	};
	scrollCnt.onLayout = function() {
		var x = (this.getMW() - cnt.getMW()) / 2;
		cnt.layout(x, 0);
	};
	this.addView(scrollCnt);

	var cnt = new LinearLayout();
	cnt.setPadding(0, 0, 0, R.dimen.content_padding_bottom);
	scrollCnt.addView(cnt);

	var lp = new LayoutParams(LayoutParams.FILL_PARENT, LayoutParams.WRAP_CONTENT);
	lp.setMargins(R.dimen.padding);

	var logoTitle = Theme.createThemeTitle(R.string.about);
	cnt.addView(logoTitle);

	var logoView = new LogoView();
	cnt.addView(logoView, lp);

	var descriptionView = new DescriptionView();
	cnt.addView(descriptionView, lp);
	
	var lpButton = new LP(LP.FP, 50);
	lpButton.setMargins(R.dimen.padding);
	var commentButton= new MButton();
	commentButton.setText("快来给我们留言评论一下吧~");
	commentButton.setBoxShadow(0, 1, 2, 0, R.color.shadow);
	commentButton.setTextColor(R.color.white);
	commentButton.setBackgroundColor(R.color.theme);
	commentButton.setOnClickListener(function() {
 		window.open('comment.html','','');
	});
	commentButton.setHoverEnterListener(function() {
        commentButton.setAlpha(0.8);
    });
    commentButton.setHoverExitListener(function() {
        commentButton.setAlpha(1);
    });
	cnt.addView(commentButton, lpButton);

	var cooperationTitle = Theme.createThemeTitle("大伙伴们~");
	cnt.addView(cooperationTitle);

	var cooperationView = new CooperationView();
	cnt.addView(cooperationView, lp);

	var commentTitle = Theme.createThemeTitle("小伙伴们~");
	cnt.addView(commentTitle);

	var commentView = new CommentView();
	cnt.addView(commentView, lp);
	
	var addCat = Theme.createThemeTitle("提交网站地址~");
	cnt.addView(addCat);
	
	var addCatView = new AddCatView();
	cnt.addView(addCatView, lp);

}




function LogoView() {
	ViewGroup.apply(this);

	var logoAreaW = 108;
	var logoSize = 108;
	var padding = R.dimen.padding;

	this.setBackgroundColor(0xffffffff);
	this.setCornerSize(2, 2, 2, 2);
	this.setBoxShadow(0, 1, 2, 0, 0x66000000);
	this.setPadding(padding, padding, padding, 0);

	var logoArea = new View();
	logoArea.setCornerSize(2);
	logoArea.setBackgroundColor(0x04000000);
	this.addView(logoArea);

	var logoImg = new MImageButton();
	var lp = new LayoutParams(logoSize, logoSize);
	logoImg.setScaleType(ScaleType.FIT_CENTER);
	logoImg.setImageUri("img/androidcat512.png");
	this.addView(logoImg, lp);

	var title = Theme.createTitle("AndroidCat");
	this.addView(title);

	var version = Theme.createSubText(R.string.version + ": " + Manifest.versionName);
	this.addView(version);

	var copyRight = Theme.createSubText("Focus on Android Developers!  </br>");
	this.addView(copyRight);

	this.onMeasure = function(wMS) {
		var w = MeasureSpec.getSize(wMS);
		var h = logoAreaW + padding * 2;

		logoArea.measure(logoAreaW, logoAreaW);
		logoImg.measure(logoSize, logoSize);

		var cntW = w - padding * 3 - logoAreaW;
		title.measure(MS.makeMS(cntW, MS.EXACTLY), 0);
		version.measure(MS.makeMS(cntW, MS.EXACTLY), 0);
		copyRight.measure(MS.makeMS(cntW, MS.EXACTLY), 0);

		this.setMeasuredDimension(w, h);
	};

	this.onLayout = function() {
		var x = padding;
		var y = padding;
		logoArea.layout(x, y);

		x = padding + (logoAreaW - logoSize) / 2;
		y = padding;
		logoImg.layout(x, y);

		x = padding * 2 + logoAreaW;
		y = 24;
		title.layout(x, y);

		y += title.getMeasuredHeight() + 8;
		version.layout(x, y);

		y += version.getMeasuredHeight() + 8;
		copyRight.layout(x, y);
	};

}

function CooperationView() {
	LinearLayout.apply(this);

	this.setBackgroundColor(0xffffffff);
	this.setCornerSize(R.dimen.corner);
	this.setBoxShadow(0, 1, 2, 0, R.color.shadow);
	this.setPadding(R.dimen.padding, R.dimen.padding, R.dimen.padding, 0);

	var juejin = new Cooperation('http://gold.xitu.io/images/app/logo.png', '稀土掘金', '挖掘最优质的互联网技术 / 联合编辑每日精选内容 / 移动端优质阅读体验');
	juejin.setBorderBottom(1, R.color.dividers);
	juejin.setOnClickListener(function(){
		window.open("http://gold.xitu.io/",'','');
	});
	this.addView(juejin);
	
	var shixian = new Cooperation('http://ac-mhke0kuv.clouddn.com/c5476d18a696b677.png', '实现网', '实现网，程序员、设计师、产品经理、运营编辑“时薪制”兼职平台，先付款后工作。');
	shixian.setBorderBottom(1, R.color.dividers);
	shixian.setOnClickListener(function(){
		window.open("http://shixian.com/",'','');
	});
	this.addView(shixian);
}

function CommentView() {
	LinearLayout.apply(this);

	this.setBackgroundColor(0xffffffff);
	this.setCornerSize(R.dimen.corner);
	this.setBoxShadow(0, 1, 2, 0, R.color.shadow);
	this.setPadding(R.dimen.padding, R.dimen.padding, R.dimen.padding, 0);

	var comment = new Comment('https://avatars1.githubusercontent.com/u/6687122?v=3&s=460', '大花猫', 'AndroidCat创建者，技术渣，目前隐居西湖旁猫厂潜心修炼。');
	comment.setBorderBottom(1, R.color.dividers);
	this.addView(comment);

	comment = new Comment('https://avatars0.githubusercontent.com/u/4728583?v=3&s=460', 'Patrick', '常驻广州的撸码铲屎官。http://pixelblog.top/');
	comment.setBorderBottom(1, R.color.dividers);
	this.addView(comment);

	comment = new Comment('https://avatars3.githubusercontent.com/u/7868514?v=3&s=460', '捕风的汉子', '走在路上的安卓开发学习者，欢迎交流。https://jp1017.github.io/');
	comment.setBorderBottom(1, R.color.dividers);
	this.addView(comment);

	comment = new Comment('https://avatars0.githubusercontent.com/u/6269257?v=3&s=460', '小鱼', '活的没心没肺的渣渣，大神等等我！');
	comment.setBorderBottom(1, R.color.dividers);
	this.addView(comment);

	comment = new Comment('img/cat_icon.png', '你', '对的，就是你，还不赶快加入我们？！');
	this.addView(comment);
}




function Cooperation(icon, name, text) {
	LinearLayout.apply(this);

	var iconAreaW = 72;
	var iconSize = 42;
	var editH = 150;

	this.setOrientation(LinearLayout.HORIZONTAL);

	this.setEditHeight = function(h) {
		editH = h;
		this.requestLayout();
	};
	
	

	var iconArea = new FrameLayout();
	var iconAreaLp = new LayoutParams(iconAreaW, iconAreaW);
	this.addView(iconArea, iconAreaLp);

	var avatar = new ImageView();
	avatar.setImgSrc(icon);
	avatar.setId("avatar");
	avatar.setImgWidth(iconSize);
	avatar.setImgHeight(iconSize);
	var avatarLp = new LayoutParams(iconSize, iconSize);
	avatarLp.gravity = Gravity.CENTER;
	iconArea.addView(avatar, avatarLp);

	var contentArea = new LinearLayout();
	var contentLp = new LayoutParams(0, LayoutParams.WRAP_CONTENT);
	contentLp.weight = 1;
	this.addView(contentArea, contentLp);

	var nameView = Theme.createText(name);
	nameView.setTextIsSelectable(false);
	var nameLp = new LayoutParams(LayoutParams.FILL_PARENT, LayoutParams.WRAP_CONTENT);
	nameLp.topMargin = R.dimen.padding;
	contentArea.addView(nameView, nameLp);

	var comment = Theme.createSubText(text);
	comment.setLineHeight(R.dimen.text);
	comment.setTextIsSelectable(false);
	var commentLp = new LayoutParams(nameLp);
	commentLp.topMargin = R.dimen.half_padding;
	commentLp.bottomMargin = R.dimen.padding;
	contentArea.addView(comment, commentLp);
	
	
	this.setHoverEnterListener(function() {
        nameView.setTextColor(R.color.theme);
        comment.setTextColor(R.color.theme);
    });
    this.setHoverExitListener(function() {
        nameView.setTextColor(R.color.text);
        comment.setTextColor(R.color.text);
    });

}

function Comment(icon, name, text) {
	LinearLayout.apply(this);

	var iconAreaW = 72;
	var iconSize = 42;
	var editH = 150;

	this.setOrientation(LinearLayout.HORIZONTAL);

	this.setEditHeight = function(h) {
		editH = h;
		this.requestLayout();
	};

	var iconArea = new FrameLayout();
	var iconAreaLp = new LayoutParams(iconAreaW, iconAreaW);
	this.addView(iconArea, iconAreaLp);

	var avatar = new ImageView();
	avatar.setImgSrc(icon);
	avatar.setId("avatar");
	avatar.setImgWidth(iconSize);
	avatar.setImgHeight(iconSize);
	avatar.setCornerSize(iconSize / 2);
	var avatarLp = new LayoutParams(iconSize, iconSize);
	avatarLp.gravity = Gravity.CENTER;
	iconArea.addView(avatar, avatarLp);

	var contentArea = new LinearLayout();
	var contentLp = new LayoutParams(0, LayoutParams.WRAP_CONTENT);
	contentLp.weight = 1;
	this.addView(contentArea, contentLp);

	var nameView = Theme.createText(name);
	nameView.setTextIsSelectable(true);
	var nameLp = new LayoutParams(LayoutParams.FILL_PARENT, LayoutParams.WRAP_CONTENT);
	nameLp.topMargin = R.dimen.padding;
	contentArea.addView(nameView, nameLp);

	var comment = Theme.createSubText(text);
	comment.setLineHeight(R.dimen.text);
	comment.setTextIsSelectable(true);
	var commentLp = new LayoutParams(nameLp);
	commentLp.topMargin = R.dimen.half_padding;
	commentLp.bottomMargin = R.dimen.padding;
	contentArea.addView(comment, commentLp);

}


function AddCatView() {
	LinearLayout.apply(this);
	
	var lp = new LP(LP.FP, LP.WC);
	lp.setMargins(R.dimen.padding);

	this.setBackgroundColor(0xffffffff);
	this.setCornerSize(R.dimen.corner);
	this.setBoxShadow(0, 1, 2, 0, R.color.shadow);
	this.setPadding(R.dimen.padding24);
	
	var editText = new MEditText();
	editText.setHint("(づ￣ 3￣)づ 请把网站链接粘贴到这来吧~ ");
	editText.setHighlightColor(0xff0091ea);
	this.addView(editText, lp);
	
	var lpButton = new LP(LP.FP, 50);
	lpButton.setMargins(R.dimen.padding);
	lpButton.gravity = Gravity.Center;
	var submitButton = new MButton();
	submitButton.setCornerSize(R.dimen.corner);
	submitButton.setBoxShadow(0, 1, 2, 0, R.color.shadow);
	submitButton.setText("提交");
	submitButton.setBackgroundColor(R.color.theme);
	submitButton.setTextColor(R.color.white);
	submitButton.setPadding(R.dimen.padding);
	this.addView(submitButton, lpButton);
	submitButton.setOnClickListener(function(){
		var text = editText.getText();
		if(text == "" || text == null){
			ShowSnackBar("怎么啥也没有~");
			return;
		}
		var AddCat = AV.Object.extend('AddCat');
		var addCat = new AddCat();
		addCat.set("url", text);
		addCat.save().then(function(post) {
		  // 成功保存之后，执行其他逻辑.
		  ShowSnackBar("Yes!提交成功！~");
		  editText.setText("");
		  console.log('New object created with objectId: ' + post.id);
		}, function(err) {
		  // 失败之后执行其他逻辑
		  ShowSnackBar("哎呀，提交失败了~");
		  // error 是 AV.Error 的实例，包含有错误码和描述信息.
		  console.log('Failed to create new object, with error message: ' + err.message);
		});
		});
	
}
