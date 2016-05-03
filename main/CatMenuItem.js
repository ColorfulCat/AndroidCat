/* 自定义ListView中item的实现 */
function CatMenuItem(catMenuItem) {
	LinearLayout.apply(this);
	var name = catMenuItem.title;
	var tag = catMenuItem.tag;
	var isSelected = catMenuItem.isSelected;
	
	var iconAreaW = 66;
	var iconSize = 26;
	var editH = 150;

	this.setOrientation(LinearLayout.HORIZONTAL);
	
	
	this.setBorderBottom(1, 0x08000000);


	var iconArea = new FrameLayout();
	var iconAreaLp = new LayoutParams(iconAreaW*2/3, iconAreaW);
	this.addView(iconArea, iconAreaLp);

	var menuIcon = new ImageView();
	menuIcon.setImgSrc("img/cat_foot.png");
	menuIcon.setImgWidth(iconSize);
	menuIcon.setImgHeight(iconSize);
	menuIcon.setScaleType(ScaleType.FIT_CENTER);
	//  menuIcon.setCornerSize(iconSize / 2);
	var menuIconLp = new LayoutParams(iconSize, iconSize);
	menuIconLp.gravity = Gravity.CENTER;
	
	iconArea.addView(menuIcon, menuIconLp);

	var contentArea = new LinearLayout();
	var contentLp = new LayoutParams(LayoutParams.MATCH_PARENT, LayoutParams.MATCH_PARENT);
//	contentLp.weight = 1;
	this.addView(contentArea, contentLp);

	var nameTv = Theme.createText(name);
//	nameTv.setTextIsSelectable(true);
	var nameLp = new LayoutParams(LayoutParams.FILL_PARENT, LayoutParams.FILL_PARENT);
	nameLp.gravity = Gravity.CENTER;
	contentArea.addView(nameTv, nameLp);
	
	if(isSelected){
		menuIcon.setImgSrc("img/cat_foot.png");
		this.setBackgroundColor(R.color.bg);
		nameTv.setTextColor(R.color.theme);
	}else{
		menuIcon.setImgSrc("img/cat_foot_gray.png");
		this.setBackgroundColor(R.color.card_bg);
		nameTv.setTextColor(R.color.text);
	}
	
	this.setOnClickListener(function(){
		setTimeout(function() {
			updateMenusSelection(catMenuItem.index);
			queryCats(catMenuItem);
		}, 200);
		
	});
	
	this.getIcon = function() {
        return menuIcon;
    }
	
	this.getTitle = function() {
        return nameTv;
    }
	
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