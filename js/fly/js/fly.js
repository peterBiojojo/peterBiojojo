
$(function(){

	$(".btnJoin").on("click", OPENOPEN );
	
	function OPENOPEN(){
		$("#contactJoin").slideDown(300);
		$(".close").on("click", CLOSECLOSE);
	}
	
	function CLOSECLOSE(){
	    $("#contactJoin").slideUp(300);
		$(".close").off("click");
	}
    

    
    
	
	$(window).on("resize",CLEARSTYLE);
	
	function CLEARSTYLE(){
		if($(window).innerWidth()>736){
			$(".NAV").attr("style","");
		}
	}
	
});



$(function(){

	$(".btnJoin2").on("click", OPENOPEN2 );
	
	function OPENOPEN2(){
		$("#contactJoin2").slideDown(300);
		$(".close2").on("click", CLOSECLOSE2);
	}
	
	function CLOSECLOSE2(){
	    $("#contactJoin2").slideUp(300);
		$(".close2").off("click");
	}
    

    
    
	
	$(window).on("resize",CLEARSTYLE);
	
	function CLEARSTYLE(){
		if($(window).innerWidth()>736){
			$(".NAV").attr("style","");
		}
	}
	
});

$(function(){

	$(".btnJoin3").on("click", OPENOPEN3 );
	
	function OPENOPEN3(){
		$("#contactJoin3").slideDown(300);
		$(".close3").on("click", CLOSECLOSE3);
	}
	
	function CLOSECLOSE3(){
	    $("#contactJoin3").slideUp(300);
		$(".close3").off("click");
	}
    

    
    
	
	$(window).on("resize",CLEARSTYLE);
	
	function CLEARSTYLE(){
		if($(window).innerWidth()>736){
			$(".NAV").attr("style","");
		}
	}
	
});
