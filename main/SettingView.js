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
    function isWeekend() {
    		return today.getDay() == 0 || today.getDay() == 6;
	}

    
    var titleText = Theme.createHuangLiTitle("Android程序员老黄历");
    titleText.setPadding(R.dimen.padding32);
    cnt.addView(titleText);
    
    
    var dateText = Theme.createText(getTodayString());
    dateText.setPadding(R.dimen.half_padding);
    dateText.setTextSize(R.dimen.tips);
    dateText.setGravity(Gravity.CENTER);
    if(isWeekend()){
    		dateText.setTextColor(R.color.red);
    }
    var dateLp = new LayoutParams(LayoutParams.FILL_PARENT, 48);
    cnt.addView(dateText, dateLp);

    var good = Theme.createTitleCenter("宜");
    good.setTextColor(R.color.theme);
    var titleLp = new LayoutParams(LayoutParams.FILL_PARENT, 48);
    cnt.addView(good, titleLp);

    var subGood = Theme.createText("");
    subGood.setTextColor(R.color.theme);
    subGood.setPadding(R.dimen.padding);
    var subTitleLp = new LayoutParams(LayoutParams.FILL_PARENT, 66);
    cnt.addView(subGood, subTitleLp);
    
    var bad = Theme.createTitleCenter("忌");
    bad.setTextColor(R.color.red);
    bad.setBorderTop(2, R.color.dividers);
    cnt.addView(bad, titleLp);
    
    var subBad = Theme.createText("");
    subBad.setTextColor(R.color.red);
    subBad.setPadding(R.dimen.padding);
    cnt.addView(subBad, subTitleLp);
    
//  http://7xki8q.com1.z0.glb.clouddn.com/android-1.png
	var myImage = new ImageView();
	var imageLp = new LayoutParams(LayoutParams.FILL_PARENT, 166);
	myImage.setScaleType(ScaleType.FIT_CENTER);
	myImage.setPadding(R.dimen.half_padding);
	myImage.setImageUri("http://7xki8q.com1.z0.glb.clouddn.com/android-1.png");
	cnt.addView(myImage, imageLp);
	
	//get data
	
	var queryGood = new AV.Query('HuangLi');
	queryGood.addDescending('createdAt');
	queryGood.equalTo('enable', true);
//	queryGood.equalTo('isWeekend', isWeekend());
	queryGood.find().then(function(results) {
		if(results != null &&results.size() > 0){
			subGood.setText(results[0].get("content") +", " +results[0].get("good"));
		}
		
	}, function(error) {
		alert('Error: ' + error.code + ' ' + error.message);
	});
	
	var queryBad = new AV.Query('HuangLi');
	queryBad.addDescending('createdAt');
	queryBad.equalTo('enable', true);
//	queryBad.equalTo('isWeekend', isWeekend());
	queryBad.find().then(function(results) {
		if(results != null &&results.size() > 1){
			subBad.setText(results[1].get("content") +", " +results[1].get("bad"));
		}
		
	}, function(error) {
		alert('Error: ' + error.code + ' ' + error.message);
	});
	
	
	

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
