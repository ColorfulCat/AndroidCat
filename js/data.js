
function newDataItem(title, url){
	return "<a href=\""+url+"\" target=\"_blank\" id=\"showLeft\">"+title+"</a>";
}

function getDataList(index){
	switch(index){
		case 0:
		return getHotRecommendData();
		case 1:
		return getZiyuanwendangData();
		case 2:
		return getJishushequData();
		case 3:
		return getXuexijiaochengData();
		case 4:
		return getKaiyuandaimaData();
		case 5:
		return getZhimingbokeData();
		case 6:
		return getKaifakuangjiaData();
		case 7:
		return getQianyanzixunData();
		case 8:
		return getKaifafuwuData();
		case 9:
		return getUIsucaiData();
		case 10:
		return getShichangqudaoData();
		case 11:
		return getGuanggaofuwuData();
		case 12:
		return getZhaopinwangzhanData();
		case 13:
		return getSihuowangzhanData();
	}
}
//---------------------------------------------------------热门推荐
function getHotRecommendData(){
	return "<h2 style='text-align:center;'>AndroidCat热门推荐</h2>"
	// + newDataItem("即将成为史上最全分类Android开源代码大全", "https://github.com/XXApple/AndroidLibs")
	+ newDataItem("稀土掘金", "http://gold.xitu.io/#/tag/Android")
	+ newDataItem("程序员客栈","http://www.proginn.com/")
	+ newDataItem("七牛云存储", "https://portal.qiniu.com/signup?code=3lpr3oxtj6n9u")
	+ newDataItem("开发者头条", "http://toutiao.io/")
	+ newDataItem("极客头条", "http://geek.csdn.net/")
	+ newDataItem("泡在网上的日子", "http://www.jcodecraeer.com/")
	+ newDataItem("Code4App", "http://a.code4app.com/category")
	+ newDataItem("36氪", "http://36kr.com/")
	+ newDataItem("23Code", "http://www.23code.com/ ")
	+ newDataItem("codeKK", "http://codekk.com/open-source-project-analysis")
	+ newDataItem("LeanCloud云服务", "https://leancloud.cn/")
	+ newDataItem("Trinea", "http://www.trinea.cn/")
	+ newDataItem("夏安明", "http://blog.csdn.net/xiaanming/")
	+ newDataItem("MobDevGroup", "http://www.mobdevgroup.com/")
	+ newDataItem("android-open-project", "https://github.com/Trinea/android-open-project")
	+ newDataItem("gank.io干货集中营", "http://gank.io/")
	+ newDataItem("okhttp（网络请求）", "http://square.github.io/okhttp/")
	+ newDataItem("Volley（网络请求）", "http://blog.csdn.net/guolin_blog/article/details/17482095")
	+ newDataItem("Fresco（图片）", "http://www.fresco-cn.org/")
	+ newDataItem("greenDao（数据库）", "http://greendao-orm.com/")
	+ newDataItem("DevStore开发商店", "http://www.devstore.cn/")
	+ newDataItem("FACE++人脸识别云", "http://www.faceplusplus.com.cn/")
	+ newDataItem("七牛云存储", "http://www.qiniu.com/")
	+ newDataItem("移动APP整体策划", "http://geek.csdn.net/news/detail/38125")

	+"<p style='text-align:center;'>Waiting for more</p>";
}

//---------------------------------------------------------资源文档
function getZiyuanwendangData(){
	return "<h2 style='text-align:center;'>资源文档</h2>"
	+ newDataItem("AndroidDevTools", "http://www.androiddevtools.cn/")
	+ newDataItem("Android官方文档", "http://developer.android.com/intl/zh-cn/develop/index.html")
	+ newDataItem("AndroidAPI中文翻译", "http://www.cnblogs.com/over140/category/277077.html")
	+ newDataItem("Android Developers Blog", "http://android-developers.blogspot.com/")
	+ newDataItem("Android官方培训课程中文版", "http://hukai.me/android-training-course-in-chinese/")
	+ newDataItem("CodePath Android Cliffnotes", "http://guides.codepath.com/android")
	+ newDataItem("codota", "http://www.codota.com/")
	+ newDataItem("eoe WIKI百科", "http://wiki.eoeandroid.com/")
	+ newDataItem("Android Design设计指南中文版", "http://adchs.github.io")
	+ newDataItem("Material Design 中文版", "http://design.1sters.com")
	+ newDataItem("Android中文API", "http://www.android-doc.com/")
	+ newDataItem("代码片段（JAVA）", "http://www.phpxs.com/code/java")
	+ newDataItem("APKMirror", "http://www.apkmirror.com/apk/google-inc/")

	+"<p style='text-align:center;'>Waiting for more</p>";
}

//---------------------------------------------------------技术社区
function getJishushequData(){
	return "<h2 style='text-align:center;'>技术社区</h2>"
	+ newDataItem("稀土掘金", "http://gold.xitu.io/#/tag/Android")
	+ newDataItem("V2EX", "http://www.v2ex.com/go/android")
	+ newDataItem("开发者头条", "http://toutiao.io/")
	+ newDataItem("极客头条", "http://geek.csdn.net/")
	+ newDataItem("程序员客栈","http://www.proginn.com/")
	+ newDataItem("APKBUS安卓巴士", "http://www.apkbus.com/")
	+ newDataItem("开源中国社区", "http://www.oschina.net/android/")
	+ newDataItem("中国谷歌开发者社区", "http://www.chinagdg.com/forum-36-1.html")
	+ newDataItem("stackoverflow", "http://stackoverflow.com/")
	+ newDataItem("CSDN", "http://www.csdn.net/")
	+ newDataItem("安卓开发者社区", "http://www.juapk.com/")
	+ newDataItem("51CTO技术论坛", "http://bbs.51cto.com/forum-291-1.html")
	+ newDataItem("gank.io干货集中营", "http://gank.io/")
	+ newDataItem("SegmentFault", "http://segmentfault.com/")
	+ newDataItem("A梦软件", "http://www.amsoft.cn/")
	+ newDataItem("天码营", "http://tianmaying.com/topics")
	+ newDataItem("eoe Android社区", "http://www.eoeandroid.com/")
	+ newDataItem("酷粒", "http://coollist.cn/")
	+ newDataItem("看源社区", "http://www.see-source.com/index.html")
	+ newDataItem("importnew", "http://www.importnew.com/")
	+ newDataItem("码农网", "http://www.codeceo.com/article/category/develop/android")

	+"<p style='text-align:center;'>Waiting for more</p>";
}

//---------------------------------------------------------学习教程
function getXuexijiaochengData(){
	return "<h2 style='text-align:center;'>学习教程</h2>"
	+ newDataItem("codeKK", "http://codekk.com/open-source-project-analysis")
	+ newDataItem("开发技术前线", "http://www.devtf.cn/?cat=2")
	+ newDataItem("美团技术团队", "http://tech.meituan.com/")
	+ newDataItem("Facebook技术团队", "https://code.facebook.com/")
	+ newDataItem("OPEN开发经验库", "http://www.open-open.com/lib/list/177")
	+ newDataItem("AndroidWeekly", "http://www.androidweekly.cn/")
	+ newDataItem("移动APP整体策划", "http://geek.csdn.net/news/detail/38125")
	+ newDataItem("极客学院（视频教程）", "http://www.jikexueyuan.com/course/android/")
	+ newDataItem("慕课网（视频教程）", "http://www.imooc.com/course/list?c=android")
	+ newDataItem("麦子学院（视频教程）", "http://www.maiziedu.com/course/android/")
	+ newDataItem("Android学习网", "http://android-study.com/")
	+ newDataItem("爱编程", "http://www.w2bc.com/")
	+ newDataItem("51CTO", "http://edu.51cto.com")
	+ newDataItem("牛客网", "http://www.nowcoder.com")
	+ newDataItem("Mars的Android开发（视频教程）", "http://mars.apkbus.com/")
	+ newDataItem("老罗的Android开发（视频教程）", "http://luo.apkbus.com/")
	+ newDataItem("如何自学Android编程-知乎", "http://www.zhihu.com/question/26417244")
	+ newDataItem("Android知识", "http://www.jianshu.com/collection/3fde3b545a35")
	+ newDataItem("MobDevGroup", "http://www.mobdevgroup.com/")
	+ newDataItem("LeanCloud Blog", "https://blog.leancloud.cn/3612/")
	+ newDataItem("android100", "http://www.android100.org/")
	+ newDataItem("android开发网", "http://www.jizhuomi.com/android/")
	+ newDataItem("AlloyTeam", "http://www.alloyteam.com/mobiledevelop/android/")
	+ newDataItem("fir.im飞行日志", "http://blog.fir.im/")
	
	+"<p style='text-align:center;'>Waiting for more</p>";
}

//---------------------------------------------------------开源代码
function getKaiyuandaimaData(){
	return "<h2 style='text-align:center;'>开源代码</h2>"
	+ newDataItem("23Code", "http://www.23code.com/")
	+ newDataItem("泡在网上的日子", "http://www.jcodecraeer.com/")
	+ newDataItem("GitHub优秀开源项目", "http://blog.csdn.net/shulianghan/article/details/18046021")
	+ newDataItem("代码家", "http://blog.daimajia.com/android-library-collection/")
	+ newDataItem("Code4App", "http://a.code4app.com/category")
	+ newDataItem("Square Open Source", "http://square.github.io/#android")
	+ newDataItem("腾讯开源", "http://code.tencent.com/index.html")
	+ newDataItem("android-open-project", "https://github.com/Trinea/android-open-project")
	+ newDataItem("Android Arsenal", "https://android-arsenal.com/free")
	+ newDataItem("APKBUS源码", "http://www.apkbus.com/plugin.php?id=codesrc&modo=all&fid=388")
	+ newDataItem("淘宝TaoCode", "http://code.taobao.org/")
	+ newDataItem("appance", "http://www.appance.com/category/android/")
	+ newDataItem("AndroidElementals", "https://github.com/cesards/AndroidElementals")
	+ newDataItem("Android Libraries and Resources", "http://alamkanak.github.io/android-libraries-and-resources/")
	+ newDataItem("Android 开源项目源码解析", "https://github.com/android-cn/android-open-project-analysis")
	+ newDataItem("awesome-android", "https://github.com/snowdream/awesome-android")
	+ newDataItem("阳和移动开发", "http://www.mobile-open.com/")
	
	+"<p style='text-align:center;'>Waiting for more</p>";
}

//---------------------------------------------------------知名博客
function getZhimingbokeData(){
	return "<h2 style='text-align:center;'>知名博客</h2>"
	+ newDataItem("android-dev-cn国内博主", "https://github.com/android-cn/android-dev-cn")
	+ newDataItem("android-dev-com国外博主", "https://github.com/android-cn/android-dev-com")
	+ newDataItem("Trinea", "http://www.trinea.cn/")
	+ newDataItem("张鸿洋", "http://blog.csdn.net/lmj623565791")
	+ newDataItem("任玉刚", "http://blog.csdn.net/singwhatiwanna/")
	+ newDataItem("郭霖", "http://blog.csdn.net/guolin_blog/")
	+ newDataItem("夏安明", "http://blog.csdn.net/xiaanming/")
	+ newDataItem("爱哥", "http://blog.csdn.net/aigestudio/")
	+ newDataItem("傲慢的上校", "http://blog.csdn.net/lilu_leo/")
	+ newDataItem("胡凯", "http://hukai.me/")
	+ newDataItem("谦虚的天下", "http://www.cnblogs.com/qianxudetianxia/")
	+ newDataItem("兰亭风雨", "http://blog.csdn.net/ns_code")
	+ newDataItem("Mr.Simple", "http://blog.csdn.net/bboyfeiyu")
	+ newDataItem("罗升阳（老罗）", "http://blog.csdn.net/luoshengyang/")
	+ newDataItem("邓凡平", "http://www.cnblogs.com/innost/")
	+ newDataItem("Race604", "http://www.race604.com/")
	+ newDataItem("stormzhang", "http://stormzhang.com/")
	+ newDataItem("徐宜生", "http://blog.csdn.net/eclipsexys")
	+ newDataItem("阮一峰", "http://www.ruanyifeng.com/blog/")
	+ newDataItem("DK", "http://dk-exp.com/archives/page/2/")
	+ newDataItem("脉脉不得语", "http://www.inferjay.com")
	+ newDataItem("技术小黑屋", "http://droidyue.com")
	+ newDataItem("Android Cool Posts", "http://greenrobot.me")
	+ newDataItem("zmywly8866", "http://zmywly8866.github.io")
	+ newDataItem("bongizmo", "http://www.bongizmo.com/blog/")
	+ newDataItem("Cyril Mottier", "http://cyrilmottier.com")
	+ newDataItem("悠城札记", "http://www.linfuyan.com/")
	+ newDataItem("赵凯强", "http://blog.csdn.net/zhaokaiqiang1992")
	+ newDataItem("kymjs张涛", "http://kymjs.com/")
	+ newDataItem("郝锡强", "http://www.haoxiqiang.info/static/timing.html")
	+ newDataItem("IT_xiao小巫", "http://blog.csdn.net/wwj_748")
	+ newDataItem("xyz_lmn", "http://blog.csdn.net/xyz_lmn/")
	+ newDataItem("咪当我系欧巴", "http://blog.csdn.net/hellogv")
	+ newDataItem("CoderRobin", "http://coderrobin.com/")
	+ newDataItem("农民伯伯", "http://www.cnblogs.com/over140/")
	+ newDataItem("代码家", "http://blog.daimajia.com/")
	+ newDataItem("stay", "http://www.cnblogs.com/stay/")
	+ newDataItem("Coder", "http://www.blogfshare.com/")
	
	+"<p style='text-align:center;'>Waiting for more</p>";
}

//---------------------------------------------------------开发框架
function getKaifakuangjiaData(){
	return "<h2 style='text-align:center;'>开发框架</h2>"
	+ newDataItem("xUtils（快速）", "https://github.com/wyouflf/xUtils")
	+ newDataItem("Afinal（快速）", "https://github.com/yangfuhai/afinal")
	+ newDataItem("Apkplug（模块化）", "http://www.apkplug.com/")
	+ newDataItem("ThinkAndroid（快速）", "https://github.com/white-cat/ThinkAndroid")
	+ newDataItem("KJFrameForAndroid（快速）", "http://git.oschina.net/kymjs/KJFrameForAndroid")
	+ newDataItem("LoonAndroid（快速）", "https://github.com/gdpancheng/LoonAndroid")
	+ newDataItem("androidannotations（快速）", "https://github.com/excilys/androidannotations/wiki")
	+ newDataItem("AndroidFine（快速）", "AndroidFine（快速）")
	+ newDataItem("React Native（JS跨平台）", "http://wiki.jikexueyuan.com/project/react-native/")
	+ newDataItem("Cordova（H5跨平台）", "http://cordova.apache.org/")
	+ newDataItem("HBuilder（H5跨平台）", "http://www.dcloud.io/")
	+ newDataItem("AppCan（H5跨平台）", "http://www.appcan.cn/")
	+ newDataItem("APICloud（H5模块化跨平台）", "http://www.apicloud.com/")
	+ newDataItem("CJFrameForAndroid（插件化）", "https://github.com/kymjs/CJFrameForAndroid")
	+ newDataItem("DroidPlugin（插件化）", "https://github.com/Qihoo360/DroidPlugin")
	+ newDataItem("Universal-Image-Loader（图片）", "https://github.com/nostra13/Android-Universal-Image-Loader")
	+ newDataItem("Fresco（图片）", "http://www.fresco-cn.org/")
	+ newDataItem("Glide（图片）", "https://github.com/bumptech/glide")
	+ newDataItem("okhttp（网络请求）", "http://square.github.io/okhttp/")
	+ newDataItem("Volley（网络请求）", "http://blog.csdn.net/guolin_blog/article/details/17482095")
	+ newDataItem("Netroid（网络请求）", "http://www.open-open.com/lib/view/open1402825446810.html")
	+ newDataItem("android-async-http（网络请求）", "https://github.com/loopj/android-async-http")
	+ newDataItem("Retrofit（网络请求）", "http://square.github.io/retrofit/")
	+ newDataItem("greenDao（数据库）", "http://greendao-orm.com/")
	+ newDataItem("Lite Orm（数据库）", "https://github.com/litesuits/android-lite-orm")
	+ newDataItem("ActiveAndroid（数据库）", "https://github.com/pardom/ActiveAndroid")
	+ newDataItem("SnappyDB（数据库）", "https://github.com/nhachicha/SnappyDB")

	+"<p style='text-align:center;'>Waiting for more</p>";
}

//---------------------------------------------------------前沿资讯
function getQianyanzixunData(){
	return "<h2 style='text-align:center;'>前沿资讯</h2>"
	+ newDataItem("36氪", "http://36kr.com/")
	+ newDataItem("创业邦", "http://www.cyzone.cn/")
	+ newDataItem("品玩PingWest", "http://www.pingwest.com/")
	+ newDataItem("CSDN Android资讯", "http://www.csdn.net/tag/android/news")
	+ newDataItem("极客范", "http://www.geekfan.net/category/android-2/")
	+ newDataItem("动点科技", "http://cn.technode.com/")
	+ newDataItem("前端里", "http://www.yyyweb.com/mobile")
	+ newDataItem("好东西论坛", "http://forum.memect.com/")
	+ newDataItem("DEMO8", "http://www.demo8.com/")
	+ newDataItem("猎云网", "http://www.lieyunwang.com/")
	+ newDataItem("ifanr爱范儿", "http://www.ifanr.com/")
	+ newDataItem("爱搞机", "http://www.igao7.com/")
	+ newDataItem("推酷", "http://www.tuicool.com/")
	+ newDataItem("mind", "http://mindstore.io/")
	+ newDataItem("π少数派", "http://sspai.com/tag/android")
	+ newDataItem("ANDROID WEEKLY", "http://androidweekly.net/")
	
	+"<p style='text-align:center;'>Waiting for more</p>";
}

//---------------------------------------------------------开发服务
function getKaifafuwuData(){
	return "<h2 style='text-align:center;'>开发服务</h2>"
	+ newDataItem("友盟", "http://www.umeng.com/")
	+ newDataItem("DevStore开发商店", "http://www.devstore.cn/")
	+ newDataItem("ShareSDK", "http://www.mob.com/#/index")
	+ newDataItem("LeanCloud云服务", "https://leancloud.cn/")
	+ newDataItem("Bmob后端云服务", "http://www.bmob.cn/")
	+ newDataItem("Wilddog野狗", "https://www.wilddog.com/")
	+ newDataItem("融云即时通讯云", "http://www.rongcloud.cn/")
	+ newDataItem("环信即时通讯云", "http://www.easemob.com/")
	+ newDataItem("阿里悟空", "https://imwukong.com/")
	+ newDataItem("讯飞开放平台", "http://www.xfyun.cn/")
	+ newDataItem("FACE++人脸识别云", "http://www.faceplusplus.com.cn/")
	+ newDataItem("七牛云存储", "https://portal.qiniu.com/signup?code=3lpr3oxtj6n9u")
	+ newDataItem("PING++支付SDK", "https://pingxx.com/")
	+ newDataItem("涂图SDK-移动图像处理开发套件", "http://tusdk.com/")
	+ newDataItem("Sticker表情大全开发者平台", "http://www.stickersdk.com/")
	+ newDataItem("STICKER PIPE表情工具", "http://stickerpipe.com/")
	+ newDataItem("亲加通讯云", "http://www.gotye.com.cn/")
	+ newDataItem("容联云通讯", "http://www.yuntongxun.com/")
	+ newDataItem("爱开发", "http://www.akaifa.com/")
	+ newDataItem("爱加密", "http://www.ijiami.cn/")
	+ newDataItem("极光推送", "https://www.jpush.cn/")
	+ newDataItem("友盟推送", "http://www.umeng.com/push")
	+ newDataItem("个推推送", "http://www.igetui.com/")
	+ newDataItem("百度云推送", "http://developer.baidu.com/cloud/push")
	+ newDataItem("有推推送", "http://dev.10086.cn/aoi/index.jsp")
	+ newDataItem("小米消息推送", "http://dev.xiaomi.com/doc/?page_id=1670")
	+ newDataItem("聚合数据", "http://www.juhe.cn/")
	+ newDataItem("云测", "http://crash.testin.cn/zh/")
	+ newDataItem("阿里百川", "http://baichuan.taobao.com/")
	+ newDataItem("fir.im", "http://fir.im/")
	+ newDataItem("蒲公英", "http://www.pgyer.com/")
	+ newDataItem("socket.io", "http://socket.io/")
	+ newDataItem("腾讯御安全", "http://yaq.qq.com/index.jsp")
	+ newDataItem("SDK.cn", "https://www.sdk.cn/")
	+ newDataItem("SimSimi聊天机器人 API", "http://developer.simsimi.com/")
	+ newDataItem("图灵聊天机器人 API", "http://www.tuling123.com/")
	
	+"<p style='text-align:center;'>Waiting for more</p>";
}

//---------------------------------------------------------图片素材
function getUIsucaiData(){
	return "<h2 style='text-align:center;'>图片素材</h2>"
	+ newDataItem("dribbble", "https://dribbble.com/")
	+ newDataItem("花瓣网", "http://huaban.com/")
	+ newDataItem("千图网", "http://www.58pic.com/")
	+ newDataItem("uigarage", "http://uigarage.net/")
	+ newDataItem("iconfont", "http://www.iconfont.cn/")
	+ newDataItem("easyicon", "http://www.easyicon.net/")
	+ newDataItem("iconpng", "http://www.iconpng.com/")
	+ newDataItem("findicons", "http://findicons.com/")
	+ newDataItem("iconfinder", "https://www.iconfinder.com/")
	+ newDataItem("Android-Iconics", "https://github.com/mikepenz/Android-Iconics")
	+ newDataItem("android-iconify", "https://github.com/JoanZapata/android-iconify")
	+ newDataItem("material-design-icons", "https://github.com/google/material-design-icons")
  	+ newDataItem("茶图", "http://www.teapic.com/list/ext/png.htm")
  	+ newDataItem("免费的高清图片", "https://pixabay.com/")
  	+ newDataItem("appiconsizes.com", "http://www.appiconsizes.com/")
  	+ newDataItem("makeappicon.com", "https://makeappicon.com/")
  	+ newDataItem("Android Asset Studio", "http://romannurik.github.io/AndroidAssetStudio/index.html")
  	+ newDataItem("Collect UI", "http://collectui.com/")
  	+ newDataItem("UI中国", "http://www.ui.cn/")
	
	+"<p style='text-align:center;'>Waiting for more</p>";
}


//---------------------------------------------------------市场渠道
function getShichangqudaoData(){
	return "<h2 style='text-align:center;'>市场渠道</h2>"
	+ newDataItem("google play", "https://play.google.com/apps/publish/")
	+ newDataItem("360手机助手", "http://open.app.360.cn/developer/")
	+ newDataItem("腾讯—应用宝", "http://op.open.qq.com/index.php?mod=mobile_manage_center#src")
	+ newDataItem("百度手机助手", "http://app.baidu.com/")
	+ newDataItem("豌豆荚", "http://www.wandoujia.com/apps/dev/home")
	+ newDataItem("小米", "http://developer.xiaomi.com/developer/tobindCompany")
	+ newDataItem("安卓市场", "http://dev.apk.hiapk.com")
	+ newDataItem("91手机助手", "http://market.sj.91.com/Default.aspx")
	+ newDataItem("淘宝手机助手", "http://dev.pp.cn/?taobao&spm=0.0.0.80.2QsY3")
	+ newDataItem("联想-乐商店", "http://app.lenovo.com/")
	+ newDataItem("OPPO-可可软件商店", "http://store.nearme.com.cn/index.html")
	+ newDataItem("亚马逊", "http://developer.amazon.com/welcome")
	+ newDataItem("机锋市场", "http://dev.gfan.com/")
	+ newDataItem("应用汇", "http://www.appchina.com/")
	+ newDataItem("木蚂蚁", "http://dev.mumayi.com/user/index")
	+ newDataItem("网易应用", "http://m.163.com/android/")
	+ newDataItem("N多市场", "http://www.nduoa.com")
	+ newDataItem("搜狐应用中心", "http://download.sohu.com/developer")
	+ newDataItem("魅族商城", "http://developer.meizu.com/")
	+ newDataItem("MM商城-中国移动", "http://dev.10086.cn/")
	+ newDataItem("WO商店", "http://dev.wo.com.cn/index.action")
	+ newDataItem("优亿", "http://dev.eoemarket.com/login/login")
	+ newDataItem("搜狗手机市场", "http://zhushou.sogou.com/")
	+ newDataItem("搜狗市场", "http://app.sogou.com/")
	+ newDataItem("UC+开放平台", "http://plus.uc.cn/")
	+ newDataItem("安智市场", "http://www.anzhi.com/")
	
	+"<p style='text-align:center;'>Waiting for more</p>";
}


//---------------------------------------------------------广告服务
function getGuanggaofuwuData(){
	return "<h2 style='text-align:center;'>广告服务</h2>"
	+ newDataItem("admob", "http://www.google.cn/ads/admob/")
	+ newDataItem("有米", "http://www.youmi.net/")
	+ newDataItem("友盟", "http://www.umeng.com/appunion_exchange")
	+ newDataItem("adsense", "http://www.google.cn/adsense/start/")
	+ newDataItem("N多网", "http://nduoa.com/developer/guide/sdk")
	+ newDataItem("多盟", "http://www.domob.cn/developers/developers.htm")
	+ newDataItem("微云", "http://www.wiyun.com/a/SDK/index.html")
	+ newDataItem("帷千动媒", "http://www.wqmobile.com/sdk")
	+ newDataItem("芒果移动", "http://www.adsmogo.com/")
	+ newDataItem("果合", "http://www.guohead.com/home.html")
	+ newDataItem("点金", "http://mjoy.91.com/")
	
	+"<p style='text-align:center;'>Waiting for more</p>";
}

//---------------------------------------------------------招聘网站
function getZhaopinwangzhanData(){
	return "<h2 style='text-align:center;'>招聘网站</h2>"
	+ newDataItem("内推网", "http://www.neitui.me/")
	+ newDataItem("拉勾网", "http://www.lagou.com/")
	+ newDataItem("BOSS直聘", "http://www.bosszhipin.com/home/")
	+ newDataItem("哪上班", "https://www.nashangban.com/")
	+ newDataItem("100Offer", "http://www.100offer.com/")
	+ newDataItem("猎聘网", "http://www.liepin.com/")
	+ newDataItem("大街网", "http://www.dajie.com/")
	+ newDataItem("前程无忧", "http://www.51job.com/")
	+ newDataItem("智联招聘", "http://www.zhaopin.com/")
	+ newDataItem("伯小乐", "http://www.boxiaole.cn/")
	+ newDataItem("周伯通", "http://www.jobtong.com/")
	+ newDataItem("内聘网", "http://www.neipin.com/")
	+ newDataItem("脉脉", "http://maimai.cn/")
	+ newDataItem("乔布简历", "http://cv.qiaobutang.com/")
	+ newDataItem("Android全国职位列表", "https://github.com/android-cn/android-jobs")
	+ newDataItem("stackoverflow", "http://careers.stackoverflow.com/")
	+ newDataItem("MyHiringClub", "http://www.myhiringclub.com/")
	+ newDataItem("牵牛招聘", "http://www.1000new.com/")
	+ newDataItem("HiStarter", "http://www.histarter.com/p/jobs/job_main")
	+ newDataItem("51猎人网", "http://www.51lrw.com/")
	+ newDataItem("人才啊", "http://www.rencaiaaa.com/index.do")
	+ newDataItem("闪聘", "http://www.shanp.com/")
	+ newDataItem("枇杷派", "https://www.pipapai.com/")
	+ newDataItem("简寻", "http://jianxun.io/")
	+ newDataItem("互推网", "http://www.hrhutui.com/")

	
	+"<p style='text-align:center;'>Waiting for more</p>";
}


//---------------------------------------------------------私活网站
function getSihuowangzhanData(){
	return "<h2 style='text-align:center;'>私活网站</h2>"
	+ newDataItem("程序员客栈", "http://www.proginn.com/")
	+ newDataItem("码市", "https://mart.coding.net/")
	+ newDataItem("快码众包", "http://www.kuaima.co/")
	+ newDataItem("猿团", "http://www.yuantuan.com/")
	+ newDataItem("oschina众包", "https://zb.oschina.net/")
	+ newDataItem("英选", "http://www.linktion.cn/")
	+ newDataItem("码易众包平台", "http://www.mayigeek.com")
	+ newDataItem("小圆桌", "http://www.xyuanzhuo.com/")
	+ newDataItem("SXsoft", "http://www.sxsoft.com/")
	+ newDataItem("人人开发", "http://rrkf.com/")
	+ newDataItem("极客邦SOHO", "http://www.looip.cn/")
	+ newDataItem("开发邦", "http://www.kaifabang.com/")
	+ newDataItem("猪八戒", "http://www.zbj.com/")
	+ newDataItem("智城", "http://www.taskcity.com/")
	+ newDataItem("CSTO", "http://www.csto.com/home")
	+ newDataItem("Freelancer", "https://www.freelancer.cn/")
 
	+"<p style='text-align:center;'>Waiting for more</p>";
}

