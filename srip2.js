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
	
	
		for(var i=0;i<15;i++){
	jQuery('#sb3').on('click',function(){//shablon2
	jQuery('#b2').remove();
	jQuery('#f2').remove();
	jQuery('#sb3').remove();
	jQuery('#btcreate').remove();
	jQuery('#qq1').remove();
	jQuery('#qnn1').remove();
	});};


	
		jQuery('#sb3').on('click',function(){//shablon2
	jQuery('#t1').remove();
	jQuery('#b4').remove();
	jQuery('#sb2').remove();
	//jQuery('#q1').remove();
	//jQuery('#qq1').remove();
	jQuery('#otp').show();
	//var blob = new Blob([jQuery("html").html()], {
    //    type: "text/html;charset=utf-8"
    //});
	//saveAs(blob, "page.html");
	});
	



	
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
	
	jQuery('#otp').on('click',function(){
   // var blob = new Blob([$("html").html()], {type: "text/html;charset=utf-8"});
   // saveAs(blob, "shablon.html");
	//localStorage.storedlist = document.getElementById("html")[0].innerHTML;
	//document.getElementById('html')[0].innerHTML = localstorage.storedlist;
	


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


	jQuery('#otp').on('click',function(){
	//	window.localstorage.removeItem('page');
	jQuery('#otp').hide();
	jQuery('#otp1').show();
	if (index==2)prompt("Ваша ссылочка на опрос: ", "file:///C:/DZ/Инфокоммукационые%20системы/урок%2015/new2.html");	
	else prompt("Ваша ссылочка на опрос: ", "file:///C:/DZ/Инфокоммукационые%20системы/урок%2015/new3.html");
saveAs(blob,'opros.html');

      //jQuery('#bod').load('new2.html'); 
	  
localStorage.setItem("page",document.getElementsByTagName("html")[0].innerHTML);

	});


		
		
	});
	
	//window.onload=()=>{
	//	var uploadfile=document.getElementById('uploadfile');
		
	//	uploadfile.addEventListener('click',function(){
	//		var uploadfile=document.getElementById('uploadfile');
		//document.getElementsByTagName("html")[0].innerHTML = uploadfile;	
	//	});
		
	//};
	
	
	
	
	
	//var index=2;
	//window.addEventListener("load",function(){
    //if(localStorage.getItem("page")) document.getElementsByTagName("html")[0].innerHTML = localStorage.getItem("page");
     // перезаписываем страницу при загрузке
    
   // window.addEventListener("click",function(){
   //     if (index==2) localStorage.setItem("page",document.getElementsByTagName("html")[0].innerHTML);
	//	else localStorage.setItem("page1",document.getElementsByTagName("html")[0].innerHTML);
   // }); // перезаписываем страницу при каждом клике 
	
		//var blob = new Blob([jQuery("html").html()], {
      //  type: "text/html;charset=utf-8"
    //});
//});


	