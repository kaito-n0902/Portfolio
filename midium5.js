$(function(){
	$(".toggle_button").on("click", function(){
		if($("#header").hasClass("open")){
			$("#header").removeClass("open");
		}else{
			$("#header").addClass("open");
		/*$("#header.wrapper").toggleClass("open");*/
		}
		$("#mask").on("click", function(){
			$("#header").removeClass("open");
		});
	});	
});