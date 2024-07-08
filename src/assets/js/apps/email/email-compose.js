"use strict";

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
*/ function initEmailEditor() {
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
	initCcBccToggler();
	initEmailEditor();
});
