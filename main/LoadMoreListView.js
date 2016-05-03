function LoadMoreListView(itemFunc) {
	ListView.apply(this, [itemFunc]);
	var ITEM_PAGE_COUNT = 20;
	var self = this;
	var loaded = false;

	var start = 1;
	var limit = ITEM_PAGE_COUNT;
	var total = 0;
	var isLoading = false;

	var header = new View();
	var headerLp = new LayoutParams(LayoutParams.FILL_PARENT, 8);
	header.setLayoutParams(headerLp);
	this.addHeader(header);

	var hint = Theme.createHint();
	hint.setBg(R.color.bg);
	hint.setStyle("lineHeight", "52px");
	hint.setStyle("textAlign", "center");

	var loadMoreLp = new LayoutParams(LayoutParams.FILL_PARENT, 52);
	hint.setLayoutParams(loadMoreLp);
	this.addFooter(hint);
	this.addScrollChangedListener(loadMore);

	this.load = function() {
		if (loaded) {
			return;
		}
		loaded = true;
		this.loadData(1, ITEM_PAGE_COUNT);
	};

	this.onLoaded = function() {
		start += limit;
		isLoading = false;
	};

	this.setTotal = function(t) {
		total = total == 0 ? t : Math.min(total, t);
	};

	this.loadData = function(start, limit) {};

	function loadMore(value) {
		if (total > 0) {
			if (start >= total) {
				hint.setText('已经没有更多内容了');
			} else {
				hint.setText('正在加载...');
			}
		}
		if (this.getContentHeight() - this.getMH() == value && !isLoading && start < total) {
			isLoading = true;
			setTimeout(function(){
				self.loadData(start, limit);
			}, 500);
		}
	}
}