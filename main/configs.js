var Manifest = new _Manifest();

function _Manifest() {
	var self = this;

	this.isPhone = false;
	this.maxWidth = 888;

	this.versionCode = 300;
	this.versionName = "3.0.0";

	this.lastVersionCode = localStorage["versionCode"];
	localStorage["versionCode"] = this.versionCode;

	this.isVersionUpgrade = function() {
		if (this.lastVersionCode == undefined) {
			return true;
		}
		return this.versionCode > this.lastVersionCode;
	};

	this.setIsPhone = function(isPhone) {
		this.isPhone = isPhone;
		if (isPhone) {
			R.dimen.padding = 10;
			R.dimen.half_padding = 5;
			R.dimen.supTitle = 35;
			R.dimen.paragraph_padding_top = 24;
			R.dimen.content_padding_bottom = 24;
		} else {
			R.dimen.padding = 20;
			R.dimen.half_padding = 8;
			R.dimen.supTitle = 44;
			R.dimen.paragraph_padding_top = 72;
			R.dimen.content_padding_bottom = 72;
		}
	};
}


var R = new _R();

function _R() {

	this.string = new _string();
	this.color = new _color();
	this.dimen = new _dimen();

	function _string() {
		this.ok = "确定";
		this.cancel = "取消";

		this.home = "首页推荐";
		this.getstart = "开始";
		this.community = "交流社区";
		this.cat = "书签导航";
		this.app = "应用推荐";
		this.about = "关于我们";
		this.setting = "设置";

		this.intro_content = "AndroidCat安卓书签网，是专门为Android开发者而收集整理的网站资源导航。</br></br>Android开发者专属的一站导航~";
		this.material_design = "谷歌Material Design";

		this.to_android_develop = "致安卓开发者";
		this.more_tips = "更多建议";

		this.lestore = " ";
		this.excel_demo = " ";
		this.jndroid_home = " ";
		this.calculator = " ";

		this.version = "版本号";
		this.show_more = "显示更多";
		this.show_less = "收起显示";
		this.change_log = "更新记录";
		this.comments = "~~~";
		this.qa = "联系";
		this.ask_question = "AndroidCat安卓书签网</br></br>是专门为Android开发者而收集整理的网站资源导航。</br></br>如果有任何涉及版权问题请及时联系我们。</br></br>QQ反馈交流群：105472201</br></br>Thanks to  Jndroid & LeanCloud & You.";

		this.version_update = "版本已更新";


	}

	function _color() {
		this.white = 0xffffffff;
		this.red = 0xFFFF5722;
		this.green = 0xff00bb9c;
		this.blue = 0xff0091ea;
		//      this.theme = 0xff0091ea;
		this.theme = 0xff00bb9c;
		this.card_bg = 0xffeeeeee;
		this.bg = 0xfffafafa;
		this.text = 0xff191919;
		this.secondary_text = 0xff454545;
		this.sub_text = 0xff757575;
		this.dividers = 0x1a000000;
		this.shadow = 0x66000000;
		this.wave = 0x1a000000;
		this.item_press = 0x22000000;
		this.mask_bg = 0x66000000;
	}

	function _dimen() {
		this.padding = 16;
		this.half_padding = 8;
		this.title_padding_top = 24;
		this.paragraph_padding_top = 56;
		this.content_padding_bottom = 46;
		
		this.titlebar_height = 64;

		this.padding32 = 32;
		this.padding24 = 24;

		this.corner = 2;

		this.supTitle = 44;
		this.title = 24;
		this.tips = 11;
		this.bigText = 18;
		this.text = 14;
		this.sub_text = 12;
	}
}