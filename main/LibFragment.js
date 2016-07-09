//开源库界面 

function LibFragment() {
	ScrollView.apply(this);
	
	var linearLayout = new LinearLayout();
//	linearLayout.setBackgroundColor(R.color.card_bg); tyxxekt0@icloud.com Aa110011
	
	linearLayout.setOrientation(LinearLayout.HORIZONTAL);
	linearLayout.setBackgroundColor(R.color.bg);
	this.addView(linearLayout);

	var lp = new LayoutParams(LayoutParams.FILL_PARENT, LayoutParams.WRAP_CONTENT);
	lp.setMargins(R.dimen.padding);

	var containerLayout = new LinearLayout();
	containerLayout.setOrientation(LinearLayout.VERTICAL);
	linearLayout.addView(containerLayout, lp);

	var tip = Theme.createThemeTitle("全新功能正在开发中，敬请期待~~~");
	containerLayout.addView(tip);

	var libItem = {};
	var libItemView = new LibItem(libItem);
	containerLayout.addView(libItemView, lp);

	this.onMeasure = function(wMS, hMS) {
		var w = MeasureSpec.getSize(wMS);
		var h = MeasureSpec.getSize(hMS);
		if (w > Manifest.maxWidth) {
			containerLayout.measure(Manifest.maxWidth, h);
			linearLayout.measure(Manifest.maxWidth, h);
		} else {
			containerLayout.measure(w, h);
			linearLayout.measure(w, h);
		}

		this.setMeasuredDimension(w, h);
	};
	this.onLayout = function() {
		var x = 0;
		var y = 0;
		var x = (this.getMW() - linearLayout.getMW()) / 2;
		linearLayout.layout(x, 0);
		containerLayout.layout(x, 0);
	};

}