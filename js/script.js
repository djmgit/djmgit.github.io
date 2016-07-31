$(document).ready(function() {

	$(".roller").click(function() {
		$(".show-title").html("Roller");
		$(".show-body p").html("It is a fun game designed for Android using Unity3d game engine and javascript.<p>Check it out at <a href='https://play.google.com/store/apps/details?id=com.prizm.roller'>Google Playstore</a></p>");
	});

	$(".tipntap").click(function() {
		$(".show-title").html("TIPnTAP");
		$(".show-body p").html("It is a casual game of reflex designed for Android using Unity3d game engine and c#.<p>Check it out at <a href='https://play.google.com/store/apps/details?id=com.priZm.TIPnTAP'>Google Playstore</a></p>");
	});

	$(".superfeed").click(function() {
		$(".show-title").html("SuperFeed");
		$(".show-body p").html("SuperFeed is a RSS reader app fro android.It displays headings from the RSS links of the user's preferred websites.<p>Check it out at <a href='https://play.google.com/store/apps/details?id=com.prizm.deep.superfeed'>Google Playstore</a></p>");
	});

	$(".quick").click(function() {
		$(".show-title").html("QuickWeatherView");
		$(".show-body p").html("QuickWeatherView is Firefox Addon to view the weather information at any given city.It is developed using Mozilla Addon-SDK, HTML5, CSS3 and Javascript.<p>Check it out at <a href='https://addons.mozilla.org/en-US/firefox/addon/quickweatherview/?src=ss'>Firfox AMO</a></p>");
	});

	$(".aboutme").click(function(e) {
		e.preventDefault();
		$('html,body').animate({
        scrollTop: $("#about-me").offset().top},
        'slow');
	});

	$(".skills").click(function(e) {
		e.preventDefault();
		$('html,body').animate({
        scrollTop: $("#skills").offset().top},
        'slow');

	});

	$(".projects").click(function(e) {
		e.preventDefault();
		$('html,body').animate({
        scrollTop: $("#projects").offset().top},
        'slow');
	});

	$(".contactme").click(function(e) {
		e.preventDefault();
		$('html,body').animate({
        scrollTop: $("#contactme").offset().top},
        'slow');
	});


});