/*
 * jQuery equalizeBottoms - v1.4 - 11/7/2009
 * http://benalman.com/projects/jquery-equalizebottoms-plugin/
 * 
 * Copyright (c) 2009 "Cowboy" Ben Alman
 * Licensed under the MIT license
 * http://benalman.com/about/license/
 */
(function($){$.fn.equalizeBottoms=function(a){if(isNaN(a)){a=0;this.each(function(){var b=$(this).css({height:"auto"});a=Math.max(a,b.offset().top+b.height())})}return this.each(function(){var b=$(this);b.height(a-b.offset().top)})}})(jQuery);