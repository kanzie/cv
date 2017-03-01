function debug(text) {
				if(window.console) {
					if(window.console.firebug) {
						console.log(text);
					}
				}
				//aptana.log(logMessage);
}

function enableShortcuts() {
	$(document).keypress(function (e) {					
		if ($("#contact").is(":hidden")){
			key = (65 <= e.which && e.which <= 65 + 25) ? e.which : e.which-32;
			switch(key)
			{
			case 65:
			   $("#tabs").tabs('select', 1);
			  break;
			case 69:
			  $("#tabs").tabs('select', 3);
			  break;
			case 87:
			  $("#tabs").tabs('select', 2);
			  break;
			case 75:
			  $("#tabs").tabs('select', 4);
			  break;
			case 80:
			  $("#tabs").tabs('select', 5);
			  break;
			case 83:
			  $("#tabs").tabs('select', 0);
			  break;
			case 79:
			  $("#tabs").tabs('select', 6);
			  break;
			}
		}
	});
}