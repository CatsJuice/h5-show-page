var flagOfFilm = 0;
var filmItems = $(".film-item");
var num = filmItems.length;
var index = 0;
var filmTimer;

$(document).ready(function() {
	initFilms();

	$('.film-btn-left').on('click',function(){
		playPrevFilm();
	});
	$('.film-btn-right').on('click',function(){
		playNextFilm();
	});

	$(document).on("touchstart",function(){
		window.clearInterval(filmTimer);
	});

	$(document).on("touchend",function(){
	setTimeout(function(){
		if($('.play .film-items').length > 0  && flagOfFilm==0){
			//到达影片轮播页面
			filmTimer = window.setInterval(function(){
				playNextFilm();
			},2000);
			flagOfFilm++;
			
		}else{
			if($('.play .film-items').length > 0){
				flagOfFilm++;
				window.clearInterval(filmTimer);
				filmTimer = window.setInterval(function(){
					playNextFilm();
				},2000);
			}else{
				//离开图片轮播页面
				flagOfFilm=0;
				window.clearInterval(filmTimer);
				// console.log("leaved");
			}
		}
	},400);
	//console.log("yes");
	})
});

function initFilms(){
	for(var i=0;i<num;i++){
		if(i==index)
			$(filmItems[i]).addClass('film-c');
		else if(i==(index == num-1?0:index+1))
			$(filmItems[i]).addClass('film-d');
		else if(i==(index-1 < 0?num-1:index-1))
			$(filmItems[i]).addClass('film-b');
		else
			$(filmItems[i]).addClass('film-e');
	}
}
function clearFilmsStyle(){
	$('*').removeClass('film-a');
	$('*').removeClass('film-b');
	$('*').removeClass('film-c');
	$('*').removeClass('film-d');
	$('*').removeClass('film-e');

	$('*').removeClass('film-a-right');
	$('*').removeClass('film-b-right');
	$('*').removeClass('film-c-right');
	$('*').removeClass('film-d-right');

	$('*').removeClass('film-b-left');
	$('*').removeClass('film-c-left');
	$('*').removeClass('film-d-left');
	$('*').removeClass('film-e-left');
}

function playNextFilm(){
	clearFilmsStyle();
	//console.log("index:" + index);\
	$(filmItems[index-1 < 0?num-1:index-1]).addClass('film-b-left');
	$(filmItems[index]).addClass('film-c-left');
	index++;
	if(index == num)
		index =0;
	$(filmItems[index]).addClass('film-d-left');
	$(filmItems[index+1==num?0:index+1]).addClass('film-e-left');
	initPics();
}
function playPrevFilm(){
	clearFilmsStyle();
	//console.log("index:" + index);
	$(filmItems[index+1==num?0:index+1]).addClass('film-d-right');
	$(filmItems[index]).addClass('film-c-right');
	index--;
	if(index < 0)
		index = num-1;
	$(filmItems[index]).addClass('film-b-right');
	$(filmItems[index-1<0?num-1:index-1]).addClass('film-a-right');
	initPics();
}