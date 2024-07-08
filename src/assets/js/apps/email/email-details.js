"use strict";

/*
<--!----------------------------------------------------------------!-->
<--! Email Editor Toggler !-->
<--!----------------------------------------------------------------!-->
*/
function initEditorToggler() {
	$('[data-cb-target="cb-email-editor-show"]').on("click", function () {
		$("#cb-email-editor").slideDown();
		$("#cb-email-reply-btn").hide();
		$("#cb-email-action-btn").show();
		$("html,body").animate({
			scrollTop: $("#cb-email-editor").offset().top,
		});
	});
	$('[data-cb-target="cb-email-editor-hide"]').on("click", function () {
		$("#cb-email-editor").slideUp();
		$("#cb-email-action-btn").hide();
		$("#cb-email-reply-btn").show();
	});
}

/*
<--!----------------------------------------------------------------!-->
<--! Email CC/BCC Toggler !-->
<--!----------------------------------------------------------------!-->
*/
function initCcBccToggler() {
	$("#cb-cc-toggle").on("click", function () {
		$('[data-cb-target="cb-email-cc"]').toggle();
	});
	$("#cb-bcc-toggle").on("click", function () {
		$('[data-cb-target="cb-email-bcc"]').toggle();
	});
}

/*
<--!----------------------------------------------------------------!-->
<--! Email Editor !-->
<--!----------------------------------------------------------------!-->
*/
function initEmailEditor() {
	var toolbarOptions = [
		["bold", "italic", "underline", "strike"], // toggled buttons
		["blockquote", "code-block"],

		[{ size: ["small", false, "large", "huge"] }], // custom dropdown
		[{ header: [1, 2, 3, 4, 5, 6, false] }],

		[{ header: 1 }, { header: 2 }], // custom button values
		[{ list: "ordered" }, { list: "bullet" }],
		[{ script: "sub" }, { script: "super" }], // superscript/subscript
		[{ indent: "-1" }, { indent: "+1" }], // outdent/indent
		[{ direction: "rtl" }], // text direction

		[{ color: [] }, { background: [] }], // dropdown with defaults from theme
		[{ font: [] }],
		[{ align: [] }],

		["clean"], // remove formatting button
	];

	var quill = new Quill("#mailEditor", {
		modules: {
			toolbar: toolbarOptions,
		},
		theme: "snow",
		placeholder: "Compose an epic...",
	});
}

/*
<--!----------------------------------------------------------------!-->
<--! Initialize Functions !-->
<--!----------------------------------------------------------------!-->
*/
$(function () {
	initEditorToggler();
	initCcBccToggler();
	initEmailEditor();
});
