jQuery('document').ready(function(){

	jQuery('#b2').on('click',function(){
	var value1,val2,t_clon,i=0;
	
	
    t_clon=jQuery('#t1').clone(); 
	//value1= jQuery('#t1').clone();
	//jQuery('#qnn1').remove();
	
	//jQuery('body').append(value1);
	jQuery('#d1').append(t_clon);
	
	});
	
	jQuery('#b4').on('click',function(){
	jQuery('#t1').remove();
	jQuery('#b4').remove();
	});
	
	jQuery('#b3').on('click',function(){	
	jQuery('#qnn1').remove();
	jQuery('#qq1').remove();
	jQuery('#qq2').remove();
	jQuery('#qq3').remove();
	jQuery('#i1').remove();
	jQuery('#b1').remove();
	jQuery('#b2').remove();
	jQuery('#f1').remove();
	jQuery('#f2').remove();
	//jQuery('#t1').remove();
	});
	
	jQuery('#b1').on('click',function(){
    var value1;
	value1 = jQuery('#i1').val();
	jQuery('#shablon').html(value1);
	//jQuery('#t1').remove() //возможное удаление таблицы
	});
	
	jQuery('input').on('keyup',function(){
	var value1;
	value1= jQuery('#qnn1').val();
	jQuery('#qn1').html(value1);
	});
	
	jQuery('input').on('keyup',function(){
	var value1;
	value1= jQuery('#qq1').val();
	jQuery('#q1').html(value1);
	
	value1= jQuery('#qq2').val();
	jQuery('#q2').html(value1);
	
	value1= jQuery('#qq3').val();
	jQuery('#q3').html(value1);
	});
	
});