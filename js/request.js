var appId = 'MPPk3pQdp6kIl6tAJI2HWuDF';
var appKey = 'TsuMnwADjcIkD1po2kKn8U7F';

AV.initialize(appId, appKey);
   // 实例化统计分析功能
var analytics = AV.analytics({
    // 设置 AppId
    appId: appId,
    // 设置 AppKey
    appKey: appKey,
    // 你当前应用或者想要指定的版本号（自定义）
    version: '4.0.0',
    // 你当前应用的渠道或者你想指定的渠道（自定义）
    channel: 'develop'
});

analytics.send({
    // 事件名称
    event: 'view_in',
//
//  // 事件属性，任意数据
//  attr: {
//      testa: 123,
//      testb: 'abc'
//  },
    // 该事件持续时间（毫秒）
    duration: 6000}, function(result) {
    if (result) {
        console.log('成功统计到用户！');
    }
});

function updateCatHit(objectId){
	var Post = AV.Object.extend('Cat');
	var query = new AV.Query(Post);
	query.get(objectId).then(function(post) {
		console.log('success when updateHit');
	    // 成功获得实例
	    post.increment('hit');
		post.save().then(function() {
			console.log('success when updateHit increment');
		  // 保存成功
		}, function(error) {
			console.log('error when updateHit increment ' + error.code + ' ' + error.message);
		  // 失败
		});
	}, function(error) {
		console.log('error when updateHit ' + error.code + ' ' + error.message);
	  // 失败了
	});
}

function updateCatMenuHit(objectId){
	console.log('updateCatMenuHit ' +objectId);
	var Post = AV.Object.extend('Sort');
	var query = new AV.Query(Post);
	query.get(objectId).then(function(post) {
		console.log('success when updateCatMenuHit');
	    // 成功获得实例
	    post.increment('hit');
		post.save().then(function() {
			console.log('success when updateCatMenuHit increment');
		  // 保存成功
		}, function(error) {
			console.log('error when updateCatMenuHit increment ' +  error.code + ' ' + error.message);
		  // 失败
		});
	}, function(error) {
		console.log('error when updateCatMenuHit '  + error.code + ' ' + error.message);
	  // 失败了
	});
}
 