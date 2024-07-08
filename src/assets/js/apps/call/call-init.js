"use strict";

/*
<--!----------------------------------------------------------------!-->
<--! Calling Dialpad !-->
<--!----------------------------------------------------------------!-->
*/
function initCallingDialpad() {
	var count = 0;
	$(".digit").on("click", function () {
		var num = $(this).clone().children().remove().end().text();
		if (count < 10) {
			$("#output").append("<span>" + num.trim() + "</span>");

			count++;
		}
	});
	$(".clear").on("click", function () {
		$("#output span:last-child").remove();
		count--;
	});
}

/*
<--!----------------------------------------------------------------!-->
<--! Initialize Functions !-->
<--!----------------------------------------------------------------!-->
*/
$(function () {
	initCallingDialpad();
});
