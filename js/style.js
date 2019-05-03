$(document).ready(function(){
	var flag=0;
	var arrowFlag = 0;
	
	/* 监听触控结束 */
	$(document).on("touchend",function(){
		// console.log("touchend");
		setTimeout(function(){
			var second_hand = $('.watch-face-second-hand');
            var minute_hand = $(" .watch-face-minute-hand");
            var hour_hand = $(" .watch-face-hour-hand");
			if($(".play .watch-face-background").length>0 && flag==0){
				flag++;
				//console.log("存在");
				var now = new Date();
				var hour = now.getHours();
		 		var minutes = now.getMinutes();
		 		var second = now.getSeconds();
		 		var duration = 2000;
		 		second+=(duration/1000);

		 		/*hour = 10;
		 		minutes = 59;
		 		second = 50;*/
		 		//console.log(hour%12);
		 		//console.log(minutes)
		 		//console.log(second);
		 		var rotate_hour = hour*30 + (minutes/60)*30;
		 		var rotate_minute = minutes * 6 + (second/60)*6;
		 		var rotate_second = second * 6;
		 		var rotate_second_auto = rotate_second+360;
		 		var rotate_minute_auto = rotate_minute+360;
		 		var rotate_hour_auto = rotate_hour+360;
		 		
		 		var oH=document.getElementsByTagName('head')[0];
                var oS=document.createElement('style');
                oH.appendChild(oS);
                oS.innerHTML = "";

                /* SECOND HAND */
                oS.innerHTML +=
                	//秒针到达指定位置的关键帧
                    '@keyframes secondPlay1{'+
                 		'0%{}'+
                 		'100%{'+
                 				'transform:rotate('+rotate_second+"deg"+');'+
						    '-ms-transform:rotate('+rotate_second+"deg"+');'+	
						   '-moz-transform:rotate('+rotate_second+"deg"+');'+ 	
						'-webkit-transform:rotate('+rotate_second+"deg"+');'+ 
				  		  	 '-o-transform:rotate('+rotate_second+"deg"+');'+ 
                 		'}'+
                 	'}';
                oS.innerHTML +=  

                    //秒针自动播放的关键帧
                    '@keyframes secondPlay2{'+
                 		'0%{'+
                 				'transform:rotate('+rotate_second+"deg"+');'+
						    '-ms-transform:rotate('+rotate_second+"deg"+');'+	
						   '-moz-transform:rotate('+rotate_second+"deg"+');'+ 	
						'-webkit-transform:rotate('+rotate_second+"deg"+');'+ 
				  		  	 '-o-transform:rotate('+rotate_second+"deg"+');'+ 
                 		'}'+
                 		'100%{'+
                 				'transform:rotate('+rotate_second_auto+"deg"+');'+
						    '-ms-transform:rotate('+rotate_second_auto+"deg"+');'+	
						   '-moz-transform:rotate('+rotate_second_auto+"deg"+');'+ 	
						'-webkit-transform:rotate('+rotate_second_auto+"deg"+');'+ 
				  		  	 '-o-transform:rotate('+rotate_second_auto+"deg"+');'+ 
                 		'}'+
                 	'}';
                second_hand.bind("webkitAnimationEnd", function() {
				    second_hand.removeClass("second_play_1");
				    second_hand.addClass("second_play_2");
				});

                /* MINUTE HAND */
				oS.innerHTML +=
                	//分针到达指定位置的关键帧
                    '@keyframes minutePlay1{'+
                 		'0%{}'+
                 		'100%{'+
                 				'transform:rotate('+rotate_minute+"deg"+');'+
						    '-ms-transform:rotate('+rotate_minute+"deg"+');'+	
						   '-moz-transform:rotate('+rotate_minute+"deg"+');'+ 	
						'-webkit-transform:rotate('+rotate_minute+"deg"+');'+ 
				  		  	 '-o-transform:rotate('+rotate_minute+"deg"+');'+ 
                 		'}'+
                 	'}';
                oS.innerHTML +=  

                    //秒针自动播放的关键帧
                    '@keyframes minutePlay2{'+
                 		'0%{'+
                 				'transform:rotate('+rotate_minute+"deg"+');'+
						    '-ms-transform:rotate('+rotate_minute+"deg"+');'+	
						   '-moz-transform:rotate('+rotate_minute+"deg"+');'+ 	
						'-webkit-transform:rotate('+rotate_minute+"deg"+');'+ 
				  		  	 '-o-transform:rotate('+rotate_minute+"deg"+');'+ 
                 		'}'+
                 		'100%{'+
                 				'transform:rotate('+rotate_minute_auto+"deg"+');'+
						    '-ms-transform:rotate('+rotate_minute_auto+"deg"+');'+	
						   '-moz-transform:rotate('+rotate_minute_auto+"deg"+');'+ 	
						'-webkit-transform:rotate('+rotate_minute_auto+"deg"+');'+ 
				  		  	 '-o-transform:rotate('+rotate_minute_auto+"deg"+');'+ 
                 		'}'+
                 	'}';
                minute_hand.bind("webkitAnimationEnd", function() {
				    minute_hand.removeClass("minute_play_1");
				    minute_hand.addClass("minute_play_2");
				});


				/* HOUR HAND */
				oS.innerHTML +=
                	//时针到达指定位置的关键帧
                    '@keyframes hourPlay1{'+
                 		'0%{}'+
                 		'100%{'+
                 				'transform:rotate('+rotate_hour+"deg"+');'+
						    '-ms-transform:rotate('+rotate_hour+"deg"+');'+	
						   '-moz-transform:rotate('+rotate_hour+"deg"+');'+ 	
						'-webkit-transform:rotate('+rotate_hour+"deg"+');'+ 
				  		  	 '-o-transform:rotate('+rotate_hour+"deg"+');'+ 
                 		'}'+
                 	'}';
                oS.innerHTML +=  

                    //秒针自动播放的关键帧
                    '@keyframes hourPlay2{'+
                 		'0%{'+
                 				'transform:rotate('+rotate_hour+"deg"+');'+
						    '-ms-transform:rotate('+rotate_hour+"deg"+');'+	
						   '-moz-transform:rotate('+rotate_hour+"deg"+');'+ 	
						'-webkit-transform:rotate('+rotate_hour+"deg"+');'+ 
				  		  	 '-o-transform:rotate('+rotate_hour+"deg"+');'+ 
                 		'}'+
                 		'100%{'+
                 				'transform:rotate('+rotate_hour_auto+"deg"+');'+
						    '-ms-transform:rotate('+rotate_hour_auto+"deg"+');'+	
						   '-moz-transform:rotate('+rotate_hour_auto+"deg"+');'+ 	
						'-webkit-transform:rotate('+rotate_hour_auto+"deg"+');'+ 
				  		  	 '-o-transform:rotate('+rotate_hour_auto+"deg"+');'+ 
                 		'}'+
                 	'}';
                hour_hand.bind("webkitAnimationEnd", function() {
				    hour_hand.removeClass("hour_play_1");
				    hour_hand.addClass("hour_play_2");
				});
         

		 		
			}else{
				if($(".play .watch-face-background").length>0){
					//依旧在时钟页面
					flag++;
					//console.log(":shizhongyemian");
				}else{
					//已经离开时钟页面
					flag = 0;
					hour_hand.removeClass("hour_play_2");
				    hour_hand.addClass("hour_play_1");

				    minute_hand.removeClass("minute_play_2");
				    minute_hand.addClass("minute_play_1");

				    second_hand.removeClass("second_play_2");
				    second_hand.addClass("second_play_1");
				}
				
				
			}
		},400);

		setTimeout(function(){
			if($(".play .end").length>0 && arrowFlag==0){
				arrowFlag++;
				if($(".rotateUp").length>0)
					$('.arrow').removeClass("rotateUp");
				$('.arrow').addClass("rotateBottom");
			}else{
				if($(".play .end").length>0){
					arrowFlag++;
				}else{
					//已经离开时钟页面
					arrowFlag = 0;
					if($(".rotateBottom").length>0){
						$('.arrow').removeClass("rotateBottom");
						$('.arrow').addClass("rotateUp");
					}	
				}
			}
		},400);
		//console.log("flag:"+flag);
	});
});