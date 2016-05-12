//开源库界面 


function LibFragment() {
	LinearLayout.apply(this);
	this.setOrientation(LinearLayout.HORIZONTAL);
	
	var lp = new LayoutParams(LayoutParams.FILL_PARENT, LayoutParams.WRAP_CONTENT);
	lp.setMargins(R.dimen.padding);
	
	var containerLayout = new LinearLayout();
	containerLayout.setOrientation(LinearLayout.VERTICAL);
	this.addView(containerLayout, lp);
 	
 	var tip = Theme.createThemeTitle("全新功能正在开发中，敬请期待~~~");
	containerLayout.addView(tip);
 
 	var libItem = {};
 	var libItemView = new LibItem(libItem);
   	containerLayout.addView(libItemView, lp);
   	
   	
   	
 	
 	
 	this.onMeasure = function(wMS, hMS) {
			var w = MeasureSpec.getSize(wMS);
			var h = MeasureSpec.getSize(hMS);
			if(w > Manifest.maxWidth){
 				containerLayout.measure(Manifest.maxWidth, h);
			}else{
 				containerLayout.measure(w, h);
			}
			
			this.setMeasuredDimension(w, h);
		};
		this.onLayout = function() {
			var x = 0;
			var y = 0;
			var x = (this.getMW() - containerLayout.getMW()) / 2;
 			containerLayout.layout(x, 0);
		};
 	
 	

}
 