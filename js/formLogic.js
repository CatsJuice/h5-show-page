$(document).ready(function(){
	$("input[type='text']").focus(function() {
		var placeholder = $(this).closest('.input-item').find('.input-placeholder');
		$(this).css('border-bottom','2px solid #45ce93');
		placeholder.removeClass('placeholderDown');
		placeholder.addClass('placeholderUp');
		placeholder.css('color','#45ce93');
	});

	$("input[type='text']").on("blur",function(){
		$(this).css('border-bottom','1px solid #2e2f31');
		var placeholder = $(this).closest('.input-item').find('.input-placeholder');
		//去除placeholder的选中样式
		placeholder.css('color','#000000');
		//console.log("onblur");
		//判断是否为空
		var text = $(this).val();
		//console.log(text.length);
		if(text.length == 0){
			placeholder.removeClass('placeholderUp');
			placeholder.addClass('placeholderDown');
		}
	});

	$("#submit-button").on("touchstart",function(){
		$(this).css('box-shadow','2px 2px 20px rgba(0,0,0,.5)');

	});
	//设置输入合法校验变量
	var illeagl = true;
	$("#submit-button").on("touchend",function(){
		setTimeout(function(){
			$(this).css('box-shadow','2px 2px 10px rgba(0,0,0,.3)');
			//检测姓名是否为空
			if($('#name').val().length == 0 ){
				console.log("name-empty");
				$('#name').css('border-bottom','2px solid #da4452');
				$('#name').closest('.input-item').find('.input-placeholder').css('color','#da4452');
				illeagl = false;
			}

			//检测是否为空
			if($('#phone').val().length == 0 ){
				console.log("phone-empty");
				$('#phone').css('border-bottom','2px solid #da4452');
				$('#phone').closest('.input-item').find('.input-placeholder').css('color','#da4452');
				illeagl = false;
			}

			//检测email是否为空
			if($('#email').val().length == 0 ){
				console.log("email-empty");
				$('#email').css('border-bottom','2px solid #da4452');
				$('#email').closest('.input-item').find('.input-placeholder').css('color','#da4452');
				illeagl = false;
			}

			//检测消息是否为空
			if($('#msg').val().length == 0 ){
				console.log("msg-empty");
				$('#msg').css('border-bottom','2px solid #da4452');
				$('#msg').closest('.input-item').find('.input-placeholder').css('color','#da4452');
				illeagl = false;
			}
			if(illeagl)
				$('#form').submit();
		},200);

		
	});
});