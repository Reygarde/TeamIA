"use strict";

/*
<--!----------------------------------------------------------------!-->
<--!  Avatar Upload !-->
<--!----------------------------------------------------------------!-->
*/
function initAvatarUpload() {
	$(".file-upload").on("change", function () {
		var e, t;
		(e = this).files &&
			e.files[0] &&
			(((t = new FileReader()).onload = function (e) {
				$(".upload-pic").attr("src", e.target.result);
			}),
			t.readAsDataURL(e.files[0]));
	}),
		$(".upload-button").on("click", function () {
			$(".file-upload").click();
		});
}

/*
<--!----------------------------------------------------------------!-->
<--! Birth Date Picker !-->
<--!----------------------------------------------------------------!-->
*/
function initBirthDatePicker() {
	$("#birthDatePicker").flatpickr({
		altInput: true,
		altFormat: "F j, Y",
		dateFormat: "Y-m-d",
	});
}

/*
<--!----------------------------------------------------------------!-->
<--! Initialize Functions !-->
<--!----------------------------------------------------------------!-->
*/
$(function () {
	initAvatarUpload();
	initBirthDatePicker();
});
