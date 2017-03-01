;(function( $ ){
	$.fn.captcha = function(options){
			
		
	var defaults = {  
	   borderColor: "",  
	   captchaDir: "images/captcha",  
	   url: "lib/rpc.php",  
	   formId: "contactForm",  
	   text: "Show me that you are somewhat human,<br>drag <span>scissors<\/span> into the circle.",
	   items: Array("book", "scissors", "clock", "heart", "tone") 
	  };	
	
	var options = $.extend(defaults, options); 
	$('#captcha').remove();	
		
	$(this).html("<div id='ajax-fc-content' class='clearfix'><div id='ajax-fc-left'><p id='ajax-fc-task'>" + options.text + "</p><ul id='ajax-fc-task'><li class='ajax-fc-0'><img src='" + options.captchaDir + "/item-none.png' alt='' /></li><li class='ajax-fc-1'><img src='" + options.captchaDir + "/item-none.png' alt='' /></li><li class='ajax-fc-2'><img src='" + options.captchaDir + "/item-none.png' alt='' /></li><li class='ajax-fc-3'><img src='" + options.captchaDir + "/item-none.png' alt='' /></li><li class='ajax-fc-4'><img src='" + options.captchaDir + "/item-none.png' alt='' /></li></ul></div><div id='ajax-fc-right'><p id='ajax-fc-circle'></p></div></div>");
	var rand = $.ajax({ url: options.url,async: false }).responseText;
	var pic = randomNumber();
	$(".ajax-fc-" + rand).html("<img src=\"" + options.captchaDir +"/item-" + options.items[pic] + ".png\" alt=\"\" />");
	$("p#ajax-fc-task span").html(options.items[pic]);
	$(".ajax-fc-" + rand).addClass('ajax-fc-highlighted');
	$(".ajax-fc-" + rand).draggable({ containment: '#ajax-fc-content' });
	var used = Array();
	for(var i=0;i<5;i++){
		if(i != rand && i != pic)	
		{
			$(".ajax-fc-" +i).html( "<img src=\"" + options.captchaDir +"/item-" + options.items[i] + ".png\" alt=\"\" />");
			used[i] = options.items[i];
		}
	}
	$(".ajax-fc-container, .ajax-fc-rtop *, .ajax-fc-rbottom *").css("background-color", options.borderColor);
	$("#ajax-fc-circle").droppable({
		drop: function(event, ui) {
			$(".ajax-fc-" + rand).draggable("disable");
			$("#" + options.formId).append("<input type=\"hidden\" style=\"display: none;\" name=\"captcha\" id=\"captcha\" value=\"" + rand + "\">");
			submitContact();			
		},
		tolerance: 'touch'
	});	
	};

})( jQuery );

function randomNumber() {
	var chars = "01234";
	chars += ".";
	var size = 1;
	var i = 1;
	var ret = "";
		while ( i <= size ) {
			$max = chars.length-1;
			$num = Math.floor(Math.random()*$max);
			$temp = chars.substr($num, 1);
			ret += $temp;
			i++;
		}
	return ret;
}