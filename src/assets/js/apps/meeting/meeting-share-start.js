"use strict";

/*
<--!----------------------------------------------------------------!-->
<--! Meeting TimeTracker !-->
<--!----------------------------------------------------------------!-->
*/
function initTimeTracker() {
	$(".timetracker").timetracker();
	$(".timetracker").timetracker("start");
}

/*
<--!----------------------------------------------------------------!-->
<--! Owl Carousel !-->
<--!----------------------------------------------------------------!-->
*/
$(function () {
	$(".owl-carousel").owlCarousel({
		nav: true,
		margin: 20,
		dots: false,
		responsiveClass: true,
		responsive: {
			0: {
				items: 2,
				nav: true,
			},
			600: {
				items: 3,
				nav: false,
			},
			1000: {
				items: 5,
				nav: true,
				loop: false,
			},
		},
	});
});

/*
<--!----------------------------------------------------------------!-->
<--! Initialize Functions !-->
<--!----------------------------------------------------------------!-->
*/
$(function () {
	initTimeTracker();
});
