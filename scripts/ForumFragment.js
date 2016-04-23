function ForumFragment() {
	LinearLayout.apply(this);
	this.setOrientation(LinearLayout.VERTICAL);
	
//	var lp = new LP(LP.FP, LP.WC);
//	lp.gravity = Gravity.CENTER;
//	lp.setMargins(R.dimen.padding32);
//	var progress = new MProgressBar();
//	progress.setProgressColor(R.color.theme);
//	progress.setStyle(MProgressBar.Small); //Small
//	this.addView(progress,lp); 
	
	var layoutParam = new LayoutParams(LayoutParams.FILL_PARENT, LayoutParams.FILL_PARENT);
	var mWebView = new WebView();
	mWebView.loadUrl("http://133.130.120.73:9000/");//http://133.130.120.73:9000/
//	mWebView.setOnPageFinishListener(function(){
//		progress.setVisibility(View.GONE);
//		this.requestLayout();
//	}, 1000);
	this.addView(mWebView, layoutParam);
	this.requestLayout();
}