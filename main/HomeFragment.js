function HomeFragment() {
	ScrollView.apply(this);

	var linearLayout = new LinearLayout();
	linearLayout.setBackgroundColor(R.color.card_bg);
	this.addView(linearLayout);

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

	var homeContentLayout = new getHomeContentLayout();
	linearLayout.addView(homeContentLayout, lp);

	//延时操作
	setTimeout(function() {
		if (isFirfox) {
			ShowSnackBar("火狐用户将强制重定向到旧版本~");
			setTimeout(function() {
				self.location = "http://androidcat.com/version2/";
			}, 1024);
		} else {
			//  判断是否首次打开页面，首次就自动跳转
			if (!localStorage.hasOpened) {
				localStorage.hasOpened = true;
				var tabItems = mTitle.getTab().getTabItems();
				tabItems[1].performClick();
			}
			ShowSnackBar("欢迎光临！");
		}
	}, 1024);

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
		imageView.setImageUri("http://o6wiczyg1.bkt.clouddn.com/devices.jpg");
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

	//获取干货的接口
	function getHomeContentLayout() {
		LinearLayout.apply(this);
		this.setOrientation(LinearLayout.VERTICAL);

		var lp = new LayoutParams(LayoutParams.FILL_PARENT, LayoutParams.WRAP_CONTENT);
		lp.setMargins(R.dimen.half_padding);

		var containerLayout = new LinearLayout();
		containerLayout.setOrientation(LinearLayout.HORIZONTAL);
		this.addView(containerLayout);

		var ganhuoLayout = new LinearLayout();
		ganhuoLayout.setOrientation(LinearLayout.VERTICAL);
		containerLayout.addView(ganhuoLayout);

		var musicLayout = new LinearLayout();
		musicLayout.setOrientation(LinearLayout.VERTICAL);
		containerLayout.addView(musicLayout);

		///ganhuo

		var lpProgress = new LP(LP.FP, LP.WC);
		lpProgress.gravity = Gravity.CENTER;
		lpProgress.setMargins(R.dimen.padding);
		var progress = new MProgressBar();
		progress.setProgressColor(R.color.theme);
		progress.setStyle(MProgressBar.Small); //Small
		ganhuoLayout.addView(progress, lpProgress);
		var url = "http://api.xitu.io/resources/gold/android?order=time&offset=0&limit=5";
		liteAjax(url, function(data) {
			var dataArray = eval(data);
			if (dataArray.length > 0) {
				ganhuoLayout.removeAllViews();
				var ganhuoTitle = Theme.createCatTitle("Android 全新干货");
				ganhuoLayout.addView(ganhuoTitle);
				for (var i = 0; i < dataArray.length; i++) {
					var ganHuoItem = dataArray[i];
					var item = new GanHuoItem(ganHuoItem);
					ganhuoLayout.addView(item, lp);
				}

				var toJueJin = Theme.createTip("以上干货来自万能的<a href='http://gold.xitu.io/#/' target='_blank'> ' 稀土掘金 '</a> ");
				toJueJin.setTextColor(R.color.theme);
				ganhuoLayout.addView(toJueJin);
			} else {
				ShowSnackBar("干货获取失败，请刷新页面~");
			}
		});

		///music
		var musicTitle = Theme.createCatTitle("");
		musicLayout.addView(musicTitle);

		var layoutParam = new LayoutParams(LayoutParams.FILL_PARENT, LayoutParams.FILL_PARENT);
		var mWebView = new WebView();
		mWebView.setBackgroundColor(R.color.transparent);
		mWebView.loadUrl("http://music.163.com/outchain/player?type=0&id=20244469&auto=1&height=430");
		//	mWebView.setOnPageFinishListener(function(){
		//		progress.setVisibility(View.GONE);
		//		this.requestLayout();
		//	}, 1000);
		//		musicLayout.addView(mWebView);
		//		musicLayout.requestLayout(); 

		var myImage = new ImageView();
		var imageLp = new LayoutParams(LayoutParams.FILL_PARENT, 200);
		myImage.setScaleType(ScaleType.FIT_CENTER);
		myImage.setPadding(R.dimen.half_padding);
		myImage.setImageUri("http://7xtu0c.com1.z0.glb.clouddn.com/androidcat-3.png");
		myImage.setOnClickListener(function() {
			window.open("https://androidify.com/en/#/", '', '');
		});
		musicLayout.addView(myImage, imageLp);
		var tipHello = Theme.createCatTitle("Hello Android");
		musicLayout.addView(tipHello);

		containerLayout.onMeasure = function(wMS, hMS) {
			var w = MeasureSpec.getSize(wMS);
			var h = MeasureSpec.getSize(hMS);
			if (w > Manifest.maxWidth) {
				musicLayout.measure(Manifest.maxWidth / 3, h);
				ganhuoLayout.measure(Manifest.maxWidth * 2 / 3, h);
			} else {
				musicLayout.measure(0, 0);
				ganhuoLayout.measure(w, h);
			}

			this.setMeasuredDimension(w, h);
		};
		containerLayout.onLayout = function() {
			var x = 0;
			var y = 0;
			var x = (this.getMW() - ganhuoLayout.getMW() - musicLayout.getMW()) / 2;
			//			var x = (this.getMW() - ganhuoLayout.getMW()) / 2;
			var x2 = x + ganhuoLayout.getMW();
			ganhuoLayout.layout(x, 0);
			musicLayout.layout(x2, 0);
		};

	}

}