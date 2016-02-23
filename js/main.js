var menuLeft = document.getElementById( 'cbp-spmenu-s1' ),
navMenu = document.getElementById( 'navMenu' ),
dataSection = document.getElementById( 'dataSection' ),
aboutSection = document.getElementById( 'aboutSection' ),
body = document.body;

function load()
{
	if(!isMobile()){
		navMenu.onclick();//默认打开
	}
	setMenuSelection(0);
	aboutSection.style.visibility = "visible";

}

navMenu.onclick = function() {
	classie.toggle( this, 'active' );
	classie.toggle( body, 'cbp-spmenu-push-toright' );
	classie.toggle( menuLeft, 'cbp-spmenu-open' );
};

function toggleNavMenu(){
	navMenu.onclick();
}

function clickAndroidCat(){

	clickMenu(-1);
	aboutSection.style.display = "";
	dataSection.style.display = "none";
}



function isShowCoverDiv(){
	if(!isMobile()){
		// if(menuLeft.style.visibility == 'hidden'){
		// 	coverDiv.style.visibility = 'visible';
		// }else{
		// 	coverDiv.style.visibility = 'hidden';
		// }
	}else{
		// coverDiv.style.visibility = 'hidden';
	}
}




function clickMenu(index){
	//设置选中项
	setMenuSelection(index);

	if(isMobile()){
		navMenu.onclick();//默认打开
	}
	
}

function setMenuSelection(index){
	for(var i = 0; i <= 13; i++){
		if(i == index){
			document.getElementById( 'menu' + i ).style.backgroundColor = "#00695c";
		}else{
			document.getElementById( 'menu' + i ).style.backgroundColor = "transparent";
		}
	}
	if(index >= 0){
		showData(index);
		aboutSection.style.display = "none";
		dataSection.style.display = "";
	}
	window.body.scrollTop = 0;
}


function showData(index){
	dataSection.innerHTML = getDataList(index);
}


function isMobile(){    
	return window.body.clientWidth < 600;
} 





 

