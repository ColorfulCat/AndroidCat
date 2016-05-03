function IntroView() {
	ScrollView.apply(this);

	var linearLayout = new LinearLayout();
	linearLayout.setBackgroundColor(R.color.card_bg);
	this.addView(linearLayout)

	var padding = R.dimen.padding;

	var cnt = new LinearLayout();
	cnt.setBg(R.color.card_bg);
	cnt.onMeasure = function(wMS) {
		var w = MeasureSpec.getSize(wMS);
		cntHeader.measure(w, 0);
		cntBody.measure(Math.min(w, Manifest.maxWidth), 0);
		var h = cntHeader.getMH() + cntBody.getMH();
		this.setMeasuredDimension(w, h);
	};
	cnt.onLayout = function() {
		var x = 0;
		var y = 0;
		cntHeader.layout(x, y);

		x = (this.getMW() - cntBody.getMW()) / 2;
		y += cntHeader.getMH();
		cntBody.layout(x, y);
	};
	linearLayout.addView(cnt);

	var cntHeader = new IntroHeader();
	cnt.addView(cntHeader);

	var cntBody = new LinearLayout();
	cntBody.setPadding(0, 0, 0, R.dimen.padding);
	cnt.addView(cntBody);


	var lp = new LP(LP.FP, LP.WC);
	lp.setMargins(R.dimen.padding);

	var subTitle = Theme.createCatTitle("推荐内容");
	linearLayout.addView(subTitle);

	var textView = new TextLayoutView("首页暂时没有什么内容，先去书签导航页面看看吧~");
	textView.setOnClickListener(function() {
				var tabItems = mTitle.getTab().getTabItems();
		           tabItems[1].performClick();
		//		liteAjax("https://www.baidu.com/",function(data){
		////			textView.setText("123");
		//			 
		//		});

//		setTimeout(function() {
//			ShowOkDialog("哈哈，你好，我是Dialog!");
//			ShowSnackBar("嘿嘿嘿~~");
//		}, 1000);


	});

	linearLayout.addView(textView, lp);

//	var button = new TextLayoutView("点我点我");
//	button.setOnClickListener(function() {
//		ShowSnackBar("hahaha~~");
//	});
//	linearLayout.addView(button, lp);
//
//
//	var editText = new MEditText();
//	editText.setHint("input text here");
//	editText.setHighlightColor(0xff0091ea);
//	linearLayout.addView(editText, lp);
//
//
//	var progress = new MProgressBar();
//	progress.setProgressColor(0xff0091ea);
//	progress.setStyle(MProgressBar.Large); //Small
//	linearLayout.addView(progress, lp);
//
//	var toggleButton = new MToggleButton();
//	toggleButton.setColor(0xff0091ea);
//	linearLayout.addView(toggleButton, lp);
//
//	var comment = new Comment('images/kkmoving.jpg', '123', '4567');
//	comment.setBackgroundColor(R.color.white);
//	comment.setCornerSize(R.dimen.corner);
//	comment.setBoxShadow(0, 1, 2, 0, R.color.shadow);
//  comment.setBorderBottom(1, R.color.dividers);
//  linearLayout.addView(comment, lp);



	function IntroHeader() {
		ViewGroup.apply(this);

		this.setBoxShadow(0, 1, 2, 0, R.color.shadow);

		var imageView = new ImageView();
		imageView.setBg(0x08000000);
		imageView.setImageUri("img/android_bg.jpg");
		imageView.setScaleType(ScaleType.CENTER_CROP);
		imageView.setBoxShadow(0, 3, 3, 0, R.color.shadow);
		this.addView(imageView);

		var mask = new View();
		mask.setBg(R.color.mask_bg);
		this.addView(mask);

		var jndroid = new TextView();
		jndroid.setTextSize(R.dimen.supTitle);
		jndroid.setTextColor(0xffffffff);
		jndroid.setText("AndroidCat");
		jndroid.setStyle("font-weight", "100");
		this.addView(jndroid);

		var slogan = Theme.createText(R.string.intro_content);
		slogan.setLineHeight(28);
		slogan.setTextColor(0xffffffff);
		this.addView(slogan);

		this.onMeasure = function(wMS) {
			var w = MeasureSpec.getSize(wMS);
			var h = 320;
			imageView.measure(w, h);

			var cntW = w - padding * 2;
			if (w > Manifest.maxWidth) {
				cntW = Manifest.maxWidth - padding * 2;
			}
			jndroid.measure(cntW / 3, 0);
			var sloganW = Math.max(jndroid.getMW(), cntW / 3);
			slogan.measure(MeasureSpec.makeMeasureSpec(sloganW, MeasureSpec.EXACTLY), 0);
			mask.measure(Math.max(jndroid.getMW(), slogan.getMW()) + padding * 2, h);

			this.setMeasuredDimension(w, h);
		};

		this.onLayout = function() {
			var x = 0;
			var y = 0;
			imageView.layout(x, y);

			var w = this.getMW();
			var cntW = w - padding * 2;
			if (w > Manifest.maxWidth) {
				cntW = Manifest.maxWidth - padding * 2;
			}
			x = (w - cntW) / 2 - padding;
			y = 0;
			mask.layout(x, y);

			x = (w - cntW) / 2;
			y = 60;
			jndroid.layout(x, y);

			y += jndroid.getMH() + padding;
			slogan.layout(x, y);
		}
	}





}