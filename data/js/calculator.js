var e = $.Event("keypress");
e.which = 13;


$("#numberinput").on("click keypress",function(event){
	if(event.which===13){
		//if the first span is empty ,value is set there
		if( $("span#first").text()==""){
		 	  $("span#first").text($(this).val());
		 	  $(this).val("")
		//if first span is filled the second span is filled
		}else{
			  $("span#sec").text($(this).val());
			  $(this).val("")
		}	
	}
});


$(".box").on("click" , function(){
	//grabs the input number
	var z= $("input").val();
	//adds the clicked number to input number
	z+= $(this).val();
	//sets value of input to input number
	$("input").val(z);
});

$("#final").on("click", function(){
	$("input").trigger(e);
	//GRABS THE TEXT FROM THE DISPLAY
	var a = $("#first").text();
	var b= $("span#sec").text();
	var c= $("span#sign").text();
	//CONVERTS IT INTO NUMBERS
	var aNum = Number(a)
	var bNum = Number(b)
	//COMPUTE RESULT
	if( c==="/"){
		$("input").val(aNum/bNum);
	}
	if(c==="*"){
		$("input").val(aNum*bNum);
	}
	if(c==="-"){
		$("input").val(aNum-bNum);
	}if(c==="+"){
		$("input").val(aNum+bNum)
	}
});


$('button#plus').on("click",function(){
	$("span#sign").text("+");
	$("input").trigger(e);
});

$('button#minus').on("click",function(){
	$("span#sign").text("-");
	$("input").trigger(e);
});

$('button#multiply').on("click",function(){
	$("span#sign").text("*");
	$("input").trigger(e);
});

$('button#divide').on("click",function(){
	$("span#sign").text("/");
	$("input").trigger(e);
});


$("#clear").on("click", function(){
	$("span#first").text("");
	$("span#sec").text("");
	$("span#sign").text("");
	$("input").val("");
});


