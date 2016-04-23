function VSAndroidView() {
	ScrollView.apply(this, []);

	var MENU_WIDTH = 128;
	var ITEM_HEIGHT = 66;

	var FF = new LayoutParams(LayoutParams.FILL_PARENT, LayoutParams.FILL_PARENT);
	var WW = new LayoutParams(LayoutParams.WRAP_CONTENT, LayoutParams.WRAP_CONTENT);

	var horizontalLinearLayout = new LinearLayout();
	horizontalLinearLayout.setOrientation(LinearLayout.HORIZONTAL);
	horizontalLinearLayout.setBg(R.color.bg);
	this.addView(horizontalLinearLayout, FF);

	var menuLinearLayout = new LinearLayout();
	menuLinearLayout.setBg(R.color.card_bg);
	horizontalLinearLayout.addView(menuLinearLayout, WW);

	var menu1 = new MButton();
	menu1.setText("资源导航");
	menuLinearLayout.addView(menu1);

	var textView = new TextView();
	textView.setText("sdfsdf ");
	textView.setOnClickListener(function(){
		ShowOkDialog();
	});
	horizontalLinearLayout.addView(textView);

	this.onLayout = function() {
		var x, y;
		x = 0;
		y = 0;
		menuLinearLayout.layout(x, y);

		x += menuLinearLayout.getMeasuredWidth();
		textView.layout(x, y);

	}
}