 /**
  *  LOG
  */
 function log(str){
 	console.log(str);
 }
 
function snackbar(text){
	snackbar(text, 2000);
}

function snackbar(text, duration){
	$(document.body).snackbar({
		alive: duration,
		content: text
	});
}
 
 
//database
//添加key-value 数据到 sessionStorage
//      localStorage.setItem("demokey", "http://blog.itjeek.com");
//      //通过key来获取value
//      var dt = localStorage.getItem("demokey");