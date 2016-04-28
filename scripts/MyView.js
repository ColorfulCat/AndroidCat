function TextLayoutView(text) {
	LinearLayout.apply(this);
	this.setBackgroundColor(0xffffffff);
	this.setCornerSize(R.dimen.corner);
	this.setBoxShadow(0, 1, 2, 0, R.color.shadow);
	this.setPadding(R.dimen.padding);
	this.onDraw = function() {
		if (this.isPressed()) {
			this.setBg(R.color.item_press);
		} else {
			this.setBg(R.color.white);
		}
	};
	var question = Theme.createText(text);
//	question.setTextIsSelectable(true);
	this.addView(question);
}

function LinkButton(text) {
	MButton.apply(this);
	this.setBackgroundColor(0xffffffff);
	this.setCornerSize(R.dimen.corner);
	this.setBoxShadow(0, 1, 2, 0, R.color.shadow);
	this.setStyle("text-align", "center");
//	this.setPadding(R.dimen.padding);
	this.setText(text);
}

function ShowLikeDialog(text, okCallback, cancelCallback){
	MDialog.setText("dfd");
	MDialog.setOkText("df"); 
	MDialog.setCancelText(R.string.cancel);
	MDialog.setOkColor(R.color.green);
	
	MDialog.setCancelColor(R.color.red);
	MDialog.setOkAction(function(){
		ShowSnackBar("谢谢您的支持~");
	});
	MDialog.setCancelAction(function(){
		ShowSnackBar("/(ㄒoㄒ)/~~~");
	});
	
	MDialog.show();
}

function ShowSnackBar(text){
	MSnackBar.show(text, 2000);
}
