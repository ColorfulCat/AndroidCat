 
function LibItem(libItem) {
	LinearLayout.apply(this);
	var icon = libItem.icon;
	var name = libItem.title;
	var desc = libItem.desc;
	var url = libItem.url;
	
	var ITEM_HEIGHT = 300;
	var imageWidth = 200;
	
	var lp = new LayoutParams(LayoutParams.FILL_PARENT, ITEM_HEIGHT);
	lp.setMargins(R.dimen.padding);
	
	var imageLp = new LayoutParams(imageWidth, ITEM_HEIGHT);
	imageLp.setMargins(R.dimen.half_padding);

	this.setOrientation(LinearLayout.VERTICAL);
	this.setBackgroundColor(R.color.white);
	this.setCornerSize(R.dimen.corner);
	this.setBoxShadow(0, 1, 2, 0, R.color.shadow);
	var image = new ImageView();
	image.setImgSrc("https://raw.githubusercontent.com/Yalantis/Persei/master/Assets/animation.gif");
//	image.setImgSrc("https://camo.githubusercontent.com/d406ac5a03a2b1fa5cf41fadc8d2408cb8709bdc/68747470733a2f2f6431337961637572716a676172612e636c6f756466726f6e742e6e65742f75736572732f3132353035362f73637265656e73686f74732f313635303331372f7265616c6573746174652d70756c6c5f312d322d332e676966");
	image.setScaleType(ScaleType.FIT_CENTER);
	
	this.addView(image, imageLp);
	
	this.setOnClickListener(function(){
		setTimeout(function() {
//			window.open(url,'','');
			 
		}, 200);
	});
	
	this.setHoverEnterListener(function() {
        this.setBoxShadow(0, 2, 8, 0, R.color.shadow);
    });
    this.setHoverExitListener(function() {
        this.setBoxShadow(0, 1, 2, 0, R.color.shadow);
    });
	
	var downX;
    var downY;
    var density = DisplayMetrics.density;
    var bg = new WaveDrawable();
    bg.setCallback(this);
    this.setWillNotDraw(false);
	this.setDimBg = function(dim) {
        bg.setDimBg(dim);
    };

    this.setWaveColor = function(c) {
        bg.setWaveColor(c);
    };

    this.onTouchEvent = function(e) {
        switch (e.getAction()) {
            case ME.ACTION_DOWN:
                downX = e.getX();
                downY = e.getY();
                break;
            case ME.ACTION_CANCEL:
            case ME.ACTION_UP:
                break;
        }
        return true;
    };
    this.onDraw = function(canvas) {
        if (this.isPressed()) {
            bg.setState(View.VIEW_STATE_PRESSED);
            bg.setX(downX * density);
            bg.setY(downY * density);
        } else {
            bg.setState(View.VIEW_STATE_ENABLED);
        }
        bg.setBounds(0, 0, this.getMW() * density, this.getMH() * density);
        bg.draw(canvas);
    };
    
	
}
