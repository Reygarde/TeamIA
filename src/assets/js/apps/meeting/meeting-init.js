"use strict";

/*
<--!----------------------------------------------------------------!-->
<--!  Select Checked !-->
<--!----------------------------------------------------------------!-->
*/
function initSelectChecked() {
	$(".cb-asidebar-items").on("click", "input:checkbox", function () {
		$(this).closest(".cb-asidebar-item").toggleClass("active", this.checked);
	});
	$("input:checkbox:checked").closest(".cb-asidebar-item").addClass("active");
}

/*
<--!----------------------------------------------------------------!-->
<--! Initialize Functions !-->
<--!----------------------------------------------------------------!-->
*/
$(function () {
	initSelectChecked();
});
