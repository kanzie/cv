$(document).ready(function() {
    
    $('.right').addClass('ui-corner-right');
    $('.middletop').addClass('ui-corner-tl');
    $('.middlebottom').addClass('ui-corner-bl');

    enableShortcuts();
    
    $('#contactLink').hover(function() {                    
        $("#contactLink").stop().animate({'paddingTop': '10px'}, 200);
    }, function() {
        $("#contactLink").stop().animate({'paddingTop': '0px'}, 200);
    });
    
    $('a.cancel').click(function() {
        $('.contactForm').hide('blind');
    });

    $('.flagrare').click(function() {
        $('#flagrareMovie').dialog('open');
        return false;
    });
    
    $("#flagrareMovie").dialog({
        bgiframe: true,
        height: 400,
        autoOpen: false,
        modal: true,
        width: 500
    });
    
    $("#tr, #store, #gaiaview, #eldsjal, #tific, #pollenkoll, #livestate, #betaglucare").dialog({
        bgiframe: true,
        autoOpen: false,
        modal: true,
        width: 800
    });                     
    
    $('#tabs').tabs();

    try {
        pageTracker._trackPageview('/tabs/Start');
        //_gaq.push(['_trackPageview', '/tabs/' + $(ui.tab).attr('title')]);
        debug("reported view of /tabs/Start");
    } catch(err) {}

    $('#tabs').bind('tabsselect', function(event, ui) {
    try {
        pageTracker._trackPageview('/tabs/' + $(ui.tab).attr('title'));
        //_gaq.push(['_trackPageview', '/tabs/' + $(ui.tab).attr('title')]);
        
        debug("reported view of "  + $(ui.tab).attr('title'));
    } catch(err) {}
        
    });             

    $('#tabs').bind('tabsshow', function(event, ui) {
        if ( $(ui.tab).attr('title') == 'Projects') {
            $('.projectWrapper').each(function() {
                height = 0;
                child = $(this).find('.projectText');
                $(child).each(function() {
                    height = ( $(this).height() > height ) ? $(this).height() : height;                         
                });
                    
                $(child).each(function() {
                    $(this).height(height);
                });
            });                                         
        } else if ($(ui.tab).attr('title') == "Skills") {
            $('#accordion').accordion({
                autoHeight: false
            });
        } else if ( $(ui.tab).attr('title') == "AboutMe") {
            debug('showing' + $(ui.tab).attr('title'));
            $('#tabs-2 > .aboutPicture').height($('#tabs-2 > .aboutme').height());
        }
    });             
    
    $('.project').hover(function() {                    
        $(this).find('.projectImage:first').css({'background-color': '#77B5B3'});
    }, function() {
        $(this).find('.projectImage:first').css({'background-color': '#ffffff'});
    });
    
    $('.project').click(function() {
        debug($(this).attr('title'));
        ref = $(this).attr('title');
        $('#' +ref).dialog('open');
    });
                                                                    

    $("#contactLink").click(function(){
        showContact();
    });

    $('#init').fadeOut(function() {
        $('#tabs').fadeIn(function() {
            $('#tabs-1 > .aboutme').height($('#tabs-1 > .aboutPicture').height());
        });
    });
});
