"use strict";

/*
<--!----------------------------------------------------------------!-->
<--! GLightbox !-->
<--!----------------------------------------------------------------!-->
*/
function initGLightbox() {
	const lightbox = GLightbox({
		loop: true,
		touchNavigation: true,
		autoplayVideos: false,
	});
	return lightbox;
}

/*
<--!----------------------------------------------------------------!-->
<--! Initialize Functions !-->
<--!----------------------------------------------------------------!-->
*/
$(function () {
	initGLightbox();
});
