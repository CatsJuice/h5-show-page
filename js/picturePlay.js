// 要求图片数 >= 5
var flag=0;
var picItems = $('.pic-item');
var num = picItems.length;
var index = 8;
var picTimer;

$(document).ready(function () {
	// body...
	initPics();
	$('#btn-left').on('click',function(){
		playPrev();
	});
	$('#btn-right').on('click',function(){
		playNext();
	});
	$(document).on("touchstart",function(){
		window.clearInterval(picTimer);
	});
	$(document).on("touchend",function(){
	setTimeout(function(){
		if($('.play .pic-item').length > 0  && flag==0){
			//到达图片轮播页面
			picTimer = window.setInterval(function(){
				playNext();
			},5000);
			flag++;
			
		}else{
			if($('.play .pic-item').length > 0){
				flag++;
				window.clearInterval(picTimer);
				picTimer = window.setInterval(function(){
					playNext();
				},5000);
			}else{
				//离开图片轮播页面
				flag=0;
				window.clearInterval(picTimer);
				// console.log("leaved");
			}
		}
	},400);
	//console.log("yes");
	})
});

function playNext(){
	clearPicsStyle();
	//console.log("index:" + index);\
	$(picItems[index-1 < 0?num-1:index-1]).addClass('b-left');
	$(picItems[index]).addClass('c-left');
	index++;
	if(index == num)
		index =0;
	$(picItems[index]).addClass('d-left');
	$(picItems[index+1==num?0:index+1]).addClass('e-left');
	initPics();
}
function playPrev(){
	clearPicsStyle();
	//console.log("index:" + index);
	$(picItems[index+1==num?0:index+1]).addClass('d-right');
	$(picItems[index]).addClass('c-right');
	index--;
	if(index < 0)
		index = num-1;
	$(picItems[index]).addClass('b-right');
	$(picItems[index-1<0?num-1:index-1]).addClass('a-right');
	initPics();
}

function clearPicsStyle(){
	$('*').removeClass('a');
	$('*').removeClass('b');
	$('*').removeClass('c');
	$('*').removeClass('d');
	$('*').removeClass('e');

	$('*').removeClass('a-right');
	$('*').removeClass('b-right');
	$('*').removeClass('c-right');
	$('*').removeClass('d-right');

	$('*').removeClass('b-left');
	$('*').removeClass('c-left');
	$('*').removeClass('d-left');
	$('*').removeClass('e-left');
}
function initPics(){
	for(var i=0;i<num;i++){
		if(i==index)
			$(picItems[i]).addClass('c');
		else if(i==(index == num-1?0:index+1))
			$(picItems[i]).addClass('d');
		else if(i==(index-1 < 0?num-1:index-1))
			$(picItems[i]).addClass('b');
		else
			$(picItems[i]).addClass('e');
	}
}