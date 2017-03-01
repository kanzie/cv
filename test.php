<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">	
		<meta name="Description" content="A person resume for Christian Kanzie Nilsson. Here you can find information about me as well as contact me directly.">		
		<link rel="stylesheet" href="css/jquery-ui-1.7.2.custom.css" type="text/css" media="screen,print">
		<link rel="stylesheet" href="css/test.css" type="text/css" media="screen,print">		
		<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.js"></script>
		<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.7.2/jquery-ui.js"></script>

        <title>kanzie</title>
		
		<script type="text/javascript">
			function debug(text) {
				if(window.console) {
					if(window.console.firebug) {
						console.log(text);
					}
				}
				//aptana.log(logMessage);
			}
			
			$(document).ready(function() {
				$('#rightBottomBar').data('active', 'graphsButton');
				$('#rightBottomBar').addClass('graphsButton');
				$('.panelButton').click(function() {
					//$('#rightBottomBar').attr('class','').addClass($(this).attr('id'));
					
					$('#rightBottomBar').data('active', $(this).attr('id'));
					debug($('#rightBottomBar').data('active'));					
				});
				
				$('#graphsButton, #actionsButton, #alarmsButton, #historyButton').hover(function() {
					$('#rightBottomBar').removeClass();
					$('#rightBottomBar').addClass($(this).attr('id'));
				}, function() {
					//if ( $('#rightBottomBar').data('active') !== $(this).attr('id'))
					$('#rightBottomBar').removeClass();
					$('#rightBottomBar').addClass($('#rightBottomBar').data('active'));
				});
				
			});
		</script>
    </head>
    <body>
    	<div id="wrap">
    			<div id="rightBottomBar" class="">
					<ul>
						<li id="graphsButton" class="panelButton">&nbsp;</li>
						<li id="actionsButton" class="panelButton">&nbsp;</li>
						<li id="historyButton" class="panelButton">&nbsp;</li>
						<li id="alarmsButton" class="panelButton">&nbsp;</li>
					</ul>
				</div>

		</div>
    </body>
</html>
