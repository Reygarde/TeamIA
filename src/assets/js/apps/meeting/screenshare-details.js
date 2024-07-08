"use strict";

/*
<--!----------------------------------------------------------------!-->
<--! Asidebar Search !-->
<--!----------------------------------------------------------------!-->
*/
$(function () {
	$("input#meeting-item-search").on("keyup", function () {
		var value = $(this).val().toLowerCase();
		$(".screenshare-meeting-item").filter(function () {
			$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
		});
	});
});

/*
<--!----------------------------------------------------------------!-->
<--! Asidecanvas Open !-->
<--!----------------------------------------------------------------!-->
*/
$(window).on("load", function () {
	if ($(window).width() > 1599.98) {
		$("body").addClass("cb-asidecanvas-open");
	} else {
		$("body").removeClass("cb-asidecanvas-open");
	}
});
