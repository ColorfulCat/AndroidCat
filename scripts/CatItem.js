/* 自定义ListView中item的实现 */
function CatItem(catItem) {
	LinearLayout.apply(this);
	var icon = catItem.icon;
	var name = catItem.title;
	var desc = catItem.desc;
	var url = catItem.url;
	
	var iconAreaW = 66;
	var iconSize = 40;
	var editH = 150;

	this.setOrientation(LinearLayout.HORIZONTAL);
	this.setBackgroundColor(R.color.white);
	this.setCornerSize(R.dimen.corner);
	this.setBoxShadow(0, 1, 2, 0, R.color.shadow);

	var iconArea = new FrameLayout();
	var iconAreaLp = new LayoutParams(iconAreaW, iconAreaW);
	this.addView(iconArea, iconAreaLp);

	var avatar = new ImageView();
	if(icon.trim() == "" || icon == null){
		avatar.setImgSrc("img/cat_foot.png");
	}else{
		avatar.setImgSrc(icon);
	}
	
	avatar.setImgWidth(iconSize);
	avatar.setImgHeight(iconSize);
	//  avatar.setCornerSize(iconSize / 2);
	var avatarLp = new LayoutParams(iconSize, iconSize);
	avatarLp.gravity = Gravity.CENTER;
	iconArea.addView(avatar, avatarLp);

	var contentArea = new LinearLayout();
	var contentLp = new LayoutParams(LayoutParams.MATCH_PARENT, LayoutParams.MATCH_PARENT);
//	contentLp.weight = 1;
	this.addView(contentArea, contentLp);

	var nameTv = Theme.createText(name);
//	nameTv.setTextIsSelectable(true);
	var nameLp = new LayoutParams(LayoutParams.FILL_PARENT, LayoutParams.WRAP_CONTENT);
	nameLp.topMargin = 13;
	contentArea.addView(nameTv, nameLp);

	var descTV = Theme.createSubText(desc);
//	descTV.setTextIsSelectable(true);
//	descTV.setLineHeight(R.dimen.text * 2);
	descTV.setSingleLine(true);
	var commentLp = new LayoutParams(LayoutParams.FILL_PARENT, LayoutParams.WRAP_CONTENT);
	commentLp.topMargin = 4;
	contentArea.addView(descTV, commentLp);
	
	this.setOnClickListener(function(){
		setTimeout(function() {
			window.open(url,'','');
			//TODO 记录事件打点
		}, 200);
		
	});
	
	this.setHoverEnterListener(function() {
        this.setAlpha(0.6);
    });
    this.setHoverExitListener(function() {
        this.setAlpha(1);
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
