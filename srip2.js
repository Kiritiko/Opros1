jQuery('document').ready(function(){
	
		jQuery('#sb2').on('click',function(){//shablon2
	var value1,val2,i=0,tab,t_clon;
	var deleteElement = document.getElementById("test1");
	//const t_clon=jQuery('#t1').clone();;
	jQuery('#ques').hide();
	jQuery('#btcreate').hide();
	jQuery('#h4').hide();
	t_clon=jQuery('#t1').clone();
	jQuery('#d1').append(t_clon);
	jQuery('#ques').show();
	jQuery('#btcreate').show();
	jQuery('#h4').show();
	
	deleteElement.innerHTML = '';
	//jQuery('#test1').innerHTML='';
	
	//jQuery('#test1').show();
	
	
	
	jQuery('#qn1').text('введите название вопроса');
	jQuery('#qnn1').val('введите название вопроса');
	jQuery('#q1').text('Вариант ответа');
	jQuery('#qq1').val('Вариант ответа');
	jQuery('#q2').text('Вариант ответа');
	jQuery('#qq2').val('Вариант ответа');
	jQuery('#q3').text('Вариант ответа');
	jQuery('#qq3').val('Вариант ответа');
	
	
	});
	
		jQuery('#sb3').on('click',function(){//shablon2
	jQuery('#t1').remove();
	jQuery('#b4').remove();
	jQuery('#sb2').remove();
	//jQuery('#q1').remove();
	//jQuery('#qq1').remove();
	});
	
		for(var i=0;i<15;i++){
	jQuery('#sb3').on('click',function(){//shablon2
	jQuery('#b2').remove();
	jQuery('#f2').remove();
	jQuery('#sb3').remove();
	jQuery('#btcreate').remove();
	jQuery('#qq1').remove();
	jQuery('#qnn1').remove();
	});};
	
		jQuery('input').on('keyup',function(){
	var value1;
	value1= jQuery('#qnn1').val();
	jQuery('#qn1').html(value1);
	
	value1= jQuery('#qq1').val();
	jQuery('#q1').html(value1);
	
	value1= jQuery('#qq2').val();
	jQuery('#q2').html(value1);
	
	value1= jQuery('#qq3').val();
	jQuery('#q3').html(value1);
	});
	
		jQuery('#qq1').on('click',function(){ 
	jQuery('#qq1').val('');
	});
	
		jQuery('#qq2').on('click',function(){ 
	jQuery('#qq2').val('');
		});
		
				jQuery('#qq3').on('click',function(){ 
	jQuery('#qq3').val('');
		});
	
		jQuery('#qnn1').on('click',function(){ 
	jQuery('#qnn1').val('');
		});
		
		
		jQuery('#btcreate').on('click',function(){
		var q_clon;
    q_clon=jQuery('#ques').clone(); 
	jQuery('#test1').append(q_clon);
	jQuery('#q1').text('введите вариант ответа');
	jQuery('#qq1').val('введите вариант ответа');
	});
	

	jQuery('#b1').on('click',function(){
    var value1;
	value1 = jQuery('#i1').val();
	jQuery('#shablon').html(value1);
	jQuery('#b1').remove();
	jQuery('#i1').remove();
	jQuery('#f1').remove();
	//jQuery('#t1').remove() //возможное удаление таблицы
	});
	
	});