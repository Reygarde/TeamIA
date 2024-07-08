$(function () {
	$('[data-bs-target="#aside-left"]').on("click", function (e) {
		e.preventDefault();
		$("#aside-left").toggleClass("open");
	});
	$('[data-bs-target="#aside-right"]').on("click", function (e) {
		e.preventDefault();
		$("#aside-right").toggleClass("open");
	});
});
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map((tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl));
