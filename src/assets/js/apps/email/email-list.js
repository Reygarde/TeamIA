"use strict";

/*
<--!----------------------------------------------------------------!-->
<--! Checked Action !-->
<--!----------------------------------------------------------------!-->
*/
function initCheckedAction() {
	$(document).on("change", "[data-checked-action='show-options']", function () {
		if ($(this).prop("checked")) {
			$(".cb-email-action-list").addClass("show-action");
		} else {
			$(".cb-email-action-list").removeClass("show-action");
		}
	});
}

/*
<--!----------------------------------------------------------------!-->
<--! Select All Checked !-->
<--!----------------------------------------------------------------!-->
*/
function initSelectChecked() {
	$("#checkAll").on("click", function () {
		if (this.checked) {
			$('.cb-email-action > [type="checkbox"]').each(function () {
				this.checked = true;
			});
		} else {
			$('.cb-email-action > [type="checkbox"]').each(function () {
				this.checked = false;
			});
		}
	});

	$('.cb-email-action > [type="checkbox"]').on("click", function () {
		if ($(this).is(":checked")) {
			var isAllChecked = 0;
			$('.cb-email-action > [type="checkbox"]').each(function () {
				if (!this.checked) isAllChecked = 1;
			});
			if (isAllChecked == 0) {
				$("#checkAll").prop("checked", true);
			}
		} else {
			$("#checkAll").prop("checked", false);
		}
	});
}

/*
<--!----------------------------------------------------------------!-->
<--! Initialize Functions !-->
<--!----------------------------------------------------------------!-->
*/
$(function () {
	initCheckedAction();
	initSelectChecked();
});
