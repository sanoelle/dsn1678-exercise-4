var $win = $(window);
var $sun = $('.sun');
var $sunSection = $('.sun-section');
var $dipperSection = $('.dipper-section');
var $dipper = $('.dipper');
var $shuttle = $('.shuttle');
var $shuttleSection = $('.shuttle-section');
var $ship1 = $('.ship-1');
var $ship2 = $('.ship-2');
var $shipSection = $ ('.ship-section');

$win.on('scroll', function () {
	var scrollPos = $win.scrollTop();
	$sun.css('transform','rotate(' + scrollPos / 5 + 'deg)');
	$sunSection.css('background-position', 'center ' + scrollPos / 2 + 'px');
});

$dipperSection.waypoint(function (){
	$dipper.addClass('js-dipper-fade');
}, { offset: '50%' });

$shuttleSection.waypoint(function (){
	$shuttle.addClass('js-shuttle-fade');
}, { offset: '60%' });

$shipSection.waypoint(function (){
	$ship1.addClass('js-ship-1-fade');
	$ship2.addClass('js-ship-2-fade'); 
}, { offset: '80%' });