"use strict";

/*
<--!----------------------------------------------------------------!-->
<--! Group Chat Offcanvas Toggle !-->
<--!----------------------------------------------------------------!-->
*/
function initChatOffcanvas() {
	$("#offcanvasGroupChat").on("show.bs.offcanvas", function () {
		$("body").addClass("offcanvas-opened");
	});

	$("#offcanvasGroupChat").on("hide.bs.offcanvas", function () {
		$("body").removeClass("offcanvas-opened");
	});
}

/*
<--!----------------------------------------------------------------!-->
<--! GLightbox !-->
<--!----------------------------------------------------------------!-->
*/
function initGLightbox() {
	const lightbox = GLightbox({
		loop: true,
		touchNavigation: true,
		autoplayVideos: true,
	});
	return lightbox;
}

/*
<--!----------------------------------------------------------------!-->
<--! Initialize Functions !-->
<--!----------------------------------------------------------------!-->
*/
$(function () {
	initChatOffcanvas();
	initGLightbox();
});
