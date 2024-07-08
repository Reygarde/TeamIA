"use strict";

/*
<--!----------------------------------------------------------------!-->
<--! Navigation Toggle !-->
<--!----------------------------------------------------------------!-->
*/
function initNavigationMenu() {
	$('[data-toggle-target="cb-navigation-toggler"]').on("click", function (e) {
		e.preventDefault();
		$("body").toggleClass("cb-navigation-open");
		$("body").removeClass("cb-asidebar-open");
	});

	// Backdrop init
	$(function () {
		const backdrop = document.createElement("div");
		backdrop.id = "cb-backdrop";
		backdrop.classList = "offcanvas-backdrop fade show";
		if ($(window).width() <= 991.98) {
			$('[data-toggle-target="cb-navigation-toggler"]').on("click", function (e) {
				e.preventDefault();
				if ($("body").hasClass("cb-navigation-open")) {
					document.body.appendChild(backdrop);
					document.body.style.overflow = "hidden";
					$("#cb-backdrop").show();
				}
			});
			$(window).on("resize", function (e) {
				e.preventDefault();
				$("#cb-backdrop").hide();
				document.body.style.overflow = null;
				$("body").removeClass("cb-navigation-open");
			});
		}
		$(backdrop).on("click", function (e) {
			e.preventDefault();
			$("#cb-backdrop").hide();
			document.body.style.overflow = null;
			$("body").removeClass("cb-navigation-open");
		});
	});
}

/*
<--!----------------------------------------------------------------!-->
<--! Asidebar Toggle !-->
<--!----------------------------------------------------------------!-->
*/
function initAsidebarToggle() {
	$('[data-toggle-target="cb-asidebar-toggler"]').on("click", function (e) {
		e.preventDefault();
		$("body").toggleClass("cb-asidebar-open");
		$("body").removeClass("cb-navigation-open");
	});
}

/*
<--!----------------------------------------------------------------!-->
<--! Search Toggle !-->
<--!----------------------------------------------------------------!-->
*/
function initSearchToggle() {
	$('[data-toggle-target="cb-asidebar-search-toggler"]').on("click", function (e) {
		e.preventDefault();
		$(".cb-asidebar-search").toggleClass("search-form-open");
	});
}

/*
<--!----------------------------------------------------------------!-->
<--! PerfectScrollBar !-->
<--!----------------------------------------------------------------!-->
*/
function initPerfectScrollbar() {
	$("[data-scroll-target='cb-scrollable']").each(function () {
		new PerfectScrollbar($(this)[0], {
			useBothWheelAxes: !1,
			suppressScrollX: !0,
			wheelSpeed: 2,
			wheelPropagation: true,
			minScrollbarLength: 20,
		});
	});
}

/*
<--!----------------------------------------------------------------!-->
<--! Notification Toast !-->
<--!----------------------------------------------------------------!-->
*/
function initNotificationToast() {
	// Toast Success
	$('[data-toast-trigger="toast-success"]').on("click", function (e) {
		e.preventDefault();
		$('[data-toast-instance="toast-success"]').toast("show");
	});

	// Toast Delete
	$('[data-toast-trigger="toast-delete"]').on("click", function (e) {
		e.preventDefault();
		$('[data-toast-instance="toast-delete"]').toast("show");
	});

	// Toast Cancel
	$('[data-toast-trigger="toast-cancel"]').on("click", function (e) {
		e.preventDefault();
		$('[data-toast-instance="toast-cancel"]').toast("show");
	});

	// Toast Copy
	$('[data-toast-trigger="toast-copy"]').on("click", function (e) {
		e.preventDefault();
		$('[data-toast-instance="toast-copy"]').toast("show");
	});

	// Toast Conform
	$('[data-toast-trigger="toast-conform"]').on("click", function (e) {
		e.preventDefault();
		$('[data-toast-instance="toast-conform"]').toast("show");
	});

	// Toast Leave
	$('[data-toast-trigger="toast-leave"]').on("click", function (e) {
		e.preventDefault();
		$('[data-toast-instance="toast-leave"]').toast("show");
	});

	// Toast Downloading
	$('[data-toast-trigger="toast-download"]').on("click", function (e) {
		e.preventDefault();
		$('[data-toast-instance="toast-download"]').toast("show");
	});
}

/*
<--!----------------------------------------------------------------!-->
<--! Offcanvas Comments Toast !-->
<--!----------------------------------------------------------------!-->
*/
function initOffcanvasComments() {
	$("#offcanvasComments").on("show.bs.offcanvas", function () {
		$("body").addClass("offcanvas-opened");
	});

	$("#offcanvasComments").on("hide.bs.offcanvas", function () {
		$("body").removeClass("offcanvas-opened");
	});
}

/*
<--!----------------------------------------------------------------!-->
<--! BS5 Tooltip + Popover !-->
<--!----------------------------------------------------------------!-->
*/
function initBS5TooltipPopover() {
	const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
	const tooltipList = [...tooltipTriggerList].map((tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl));
	const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
	const popoverList = [...popoverTriggerList].map((popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl));
}

/*
<--!----------------------------------------------------------------!-->
<--! Initialize Functions !-->
<--!----------------------------------------------------------------!-->
*/
$(function () {
	initNavigationMenu();
	initAsidebarToggle();
	initSearchToggle();
	initPerfectScrollbar();
	initNotificationToast();
	initOffcanvasComments();
	initBS5TooltipPopover();
});
