$(document).ready(function(){
	$(window).scroll(function(){
		var s = $("body").scrollTop();
		var d = $("html").scrollTop();
		console.log(s);
		if (( s > 200 ) || (d > 200)) $("#advantages-about").animate({'opacity':'1'}, 600);
	});
});

