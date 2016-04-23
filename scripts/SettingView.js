function SettingView() {
    ScrollView.apply(this);

    this.setBackgroundColor(0xffffffff);
    this.setBoxShadow(0, 0, 16, 0, R.color.shadow);

    var cnt = new LinearLayout();
    cnt.setBackgroundColor(R.color.bg);
    this.addView(cnt);
    
    var weeks = ["日","一","二","三","四","五","六"];
    var today = new Date();
	var iday = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
    function getTodayString() {
		return "今天是" + today.getFullYear() + "年" + (today.getMonth() + 1) + "月" + today.getDate() + "日 星期" + weeks[today.getDay()];
	}
    
    var dateText = Theme.createText(getTodayString());
    dateText.setPadding(R.dimen.padding);
    var dateLp = new LayoutParams(LayoutParams.FILL_PARENT, 48);
    cnt.addView(dateText, dateLp);

    var good = Theme.createTitle("宜");
    good.setTextColor(R.color.theme);
    good.setPadding(R.dimen.padding);
    var titleLp = new LayoutParams(LayoutParams.FILL_PARENT, 48);
    titleLp.topMargin = R.dimen.padding;
    cnt.addView(good);

    var subGood = Theme.createText("专心看谷歌官方文档~（测试文字）");
    subGood.setTextColor(R.color.theme);
    subGood.setPadding(R.dimen.padding);
    var subTitleLp = new LayoutParams(LayoutParams.FILL_PARENT, 48);
    cnt.addView(subGood, subTitleLp);
    
     var bad = Theme.createTitle("忌");
    bad.setTextColor(R.color.red);
    bad.setPadding(R.dimen.padding);
    bad.setBorderTop(2, R.color.dividers);
    cnt.addView(bad, titleLp);
    
    var subBad = Theme.createText("三天打鱼，两天晒网~（测试文字）");
    subBad.setTextColor(R.color.red);
    subBad.setPadding(R.dimen.padding);
    cnt.addView(subBad, subTitleLp);
    
//  http://7xki8q.com1.z0.glb.clouddn.com/android-1.png
	var myImage = new ImageView();
	var imageLp = new LayoutParams(LayoutParams.FILL_PARENT, 188);
	myImage.setScaleType(ScaleType.FIT_CENTER);
	myImage.setImageUri("http://7xki8q.com1.z0.glb.clouddn.com/android-1.png");
	cnt.addView(myImage, imageLp);

    this.onMeasure = function(wMS, hMS) {
        var w = MeasureSpec.getSize(wMS) * 2 / 3;
        var h = MeasureSpec.getSize(hMS);

        if (w > 300) {
            w = 300;
        }
        cnt.measure(w, h);

        this.setMeasuredDimension(w, h);
    };

    this.onLayout = function() {
        cnt.layout(0, 0);
    }
}
