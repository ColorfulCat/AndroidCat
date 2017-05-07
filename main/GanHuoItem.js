/* 自定义ListView中item的实现 */
function GanHuoItem(ganHuoItem) {
	LinearLayout.apply(this);
	
	var icon = ganHuoItem.user.avatar;
	var name = ganHuoItem.title;
	var desc = ganHuoItem.date.substring(0, 10) + 
	"   收藏 " +  ganHuoItem.collectionCount +
	"   浏览 " + ganHuoItem.viewCount;
	var url = ganHuoItem.url;
	var originUrl = ganHuoItem.originalUrl;
	
	var iconAreaW = 66;
	var iconSize = 40;
	var editH = 150;

	this.setOrientation(LinearLayout.VERTICAL);
	this.setBackgroundColor(R.color.white);
	this.setCornerSize(R.dimen.corner);
	this.setBoxShadow(0, 1, 2, 0, R.color.shadow);

	var iconArea = new FrameLayout();
	var iconAreaLp = new LayoutParams(iconAreaW, iconAreaW);
//	this.addView(iconArea, iconAreaLp);

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
//	iconArea.addView(avatar, avatarLp);

//	var contentArea = new LinearLayout();
//	var contentLp = new LayoutParams(LayoutParams.MATCH_PARENT, LayoutParams.MATCH_PARENT);
////	contentLp.weight = 1;
//	this.addView(contentArea, contentLp);

	var nameTv = Theme.createText(name);
	nameTv.setSingleLine(true);
	nameTv.setOnClickListener(function(){
		setTimeout(function() {
			window.open(originUrl,'','');
			//TODO 记录事件打点
		}, 200);
		
	});
//	nameTv.setTextIsSelectable(true);
	var nameLp = new LayoutParams(LayoutParams.FILL_PARENT, LayoutParams.WRAP_CONTENT);
	nameLp.topMargin = 13;
	nameLp.leftMargin = 13;
	nameLp.rightMargin = 13;
	nameLp.bottomMargin = 5;
	this.addView(nameTv, nameLp);

	var descTV = Theme.createSubText(desc);
//	descTV.setTextIsSelectable(true);
//	descTV.setLineHeight(R.dimen.text * 2);
	descTV.setSingleLine(true);
	var commentLp = new LayoutParams(LayoutParams.FILL_PARENT, LayoutParams.WRAP_CONTENT);
	commentLp.topMargin = 5;
	commentLp.leftMargin = 13;
	commentLp.rightMargin = 13;
	commentLp.bottomMargin = 13;
	this.addView(descTV, commentLp);
	
	this.setOnClickListener(function(){
		setTimeout(function() {
			window.open(url,'','');
			//TODO 记录事件打点
		}, 200);
		
	});
	
	this.setHoverEnterListener(function() {
        nameTv.setTextColor(R.color.theme);
        descTV.setTextColor(R.color.theme);
        this.setBoxShadow(0, 2, 8, 0, R.color.shadow);
    });
    this.setHoverExitListener(function() {
        nameTv.setTextColor(R.color.text);
        descTV.setTextColor(R.color.text);
        this.setBoxShadow(0, 1, 2, 0, R.color.shadow);
    });
	
	// ripple
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
