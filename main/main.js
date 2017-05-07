function MainView() {
	ViewGroup.apply(this);

	var homeFragment = null;
	var catFragment = null;
	var libFragment = null;
	var aboutFragment = null;

	mTitle = new Titlebar();
	this.addView(mTitle);

	var tab = mTitle.getTab();
	tab.setOnItemClickListener(function(i) {
		setTimeout(function() {
			switch (i) {
				case 0:
					cnt.addFragment(createHomeFragment(), "view=HomeFragment");
					break;
				case 1:
					cnt.addFragment(createCatFragment(), "view=CatFragment");
					break;
//				case 2:
//					cnt.addFragment(createLibFragment(), "view=LibFragment");
//					break;
				case 2:
					cnt.addFragment(createAboutFragment(), "view=AboutFragment");
					break;
			}
		}, 200);
	});
	tab.setSelectIndex(1);

	var callback = function(request) {
		var view = request["view"];
		var v;
		if (view == "AboutFragment") {
			v = createAboutFragment();
			mTitle.setSelectIndex(2)
		} else if (view == "LibFragment") {
			v = createLibFragment();
			mTitle.setSelectIndex(2);
		} else if (view == "CatFragment") {
			v = createCatFragment();
			mTitle.setSelectIndex(1);
		} else if (view == "HomeFragment") {
			v = createHomeFragment();
			mTitle.setSelectIndex(0);
		} else {
			v = createHomeFragment();
			mTitle.setSelectIndex(0);
		}
		return v;
	};

	var cnt = new StateFrameLayout(callback);
	this.addView(cnt);

	this.onMeasure = function(wMS, hMS) {
		Manifest.setIsPhone(window.innerWidth <= 720);

		var w = MS.getSize(wMS);
		var h = MS.getSize(hMS);

		Utils.measureExactly(mTitle, w, 48);

		var cntH = h - mTitle.getMH();
		cnt.measure(wMS, cntH);

		this.setMeasuredDimension(w, h);
	};

	this.onLayout = function() {
		cnt.layout(0, mTitle.getMH());
		mTitle.layout(0, 0);
	};

	function createHomeFragment() {
		if (homeFragment == null) {
			homeFragment = new HomeFragment();
		}
		return homeFragment;
	}

	function createLibFragment() {
		if (libFragment == null) {
			libFragment = new LibFragment();
		}
		return libFragment;
	}

	function createCatFragment() {
		if (catFragment == null) {
			catFragment = new CatFragment();
		}
		return catFragment;
	}

	function createAboutFragment() {
		if (aboutFragment == null) {
			aboutFragment = new AboutFragment();
		}
		return aboutFragment;
	}
}