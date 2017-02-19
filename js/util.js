/**
 *  LOG
 */
var currentVersion = 1;
var currentVersionName = "1.0.0";
//
function checkVersion() {
	var oldVersion = localStorage.getItem("version");
	var oldVersionName = localStorage.getItem("versionName");
	log("当前版本：" + oldVersionName);
	if(oldVersion != currentVersion) {
		log("发现更新版本：" + currentVersionName);
		localStorage.setItem("version", currentVersion);
		localStorage.setItem("versionName", currentVersionName);
		snackbar("更新版本：" + currentVersionName);
		return true;
	} else {
		log("没有新版本");
		snackbar("欢迎光临~");
	}
	return false;
}

function log(str) {
	console.log(str);
}
 