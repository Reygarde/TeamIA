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
