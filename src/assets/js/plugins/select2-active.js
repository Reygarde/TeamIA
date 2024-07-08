/*
<--!----------------------------------------------------------------!-->
<--! SELECT2 ACTIVE JS !-->
<--!----------------------------------------------------------------!-->
*/
//icon format
function iformat(icon) {
	var originalOption = icon.element;
	return $('<span class="hstack gap-2"><i class=" ' + $(originalOption).data("icon") + '"></i> ' + icon.text + "</span>");
}
//bg format
function bgformat(bg) {
	var originalOption = bg.element;
	return $('<span class="hstack gap-2"> <span class="wd-7 ht-7 rounded-circle ' + $(originalOption).data("bg") + '"></span> ' + bg.text + "</span>");
}
//user format
function userformat(user) {
	var originalOption = user.element;
	return $('<span class="hstack gap-2"> <img src="' + "./../assets/images/avatar" + "/" + $(originalOption).data("user") + '.png" class="avatar avatar-xs" /> ' + user.text + "</span>");
}
//storage format
function storageformat(storage) {
	var originalOption = storage.element;
	return $('<span class="hstack gap-2"> <img src="' + "./../assets/images/storage-icons" + "/" + $(originalOption).data("storage") + '.png" class="avatar avatar-xs" /> ' + storage.text + "</span>");
}
//payment format
function paymentformat(payment) {
	var originalOption = payment.element;
	return $('<span class="hstack gap-2"> <img src="' + "./../assets/images/payment" + "/" + $(originalOption).data("payment") + '.svg" class="avatar avatar-xs" /> ' + payment.text + "</span>");
}
//flag format
function flagformat(flag) {
	var originalOption = flag.element;
	return $('<span class="hstack gap-2"> <img src="' + "./../assets/images/flags/1x1" + "/" + $(originalOption).data("flag") + '.svg" class="avatar avatar-xs" /> ' + flag.text + "</span>");
}
//country format
function countryformat(country) {
	var originalOption = country.element;
	return $('<span class="hstack gap-2"> <img src="' + "./../assets/images/flags/1x1" + "/" + $(originalOption).data("country") + '.svg" class="avatar avatar-xs" /> ' + country.text + "</span>");
}
//tzone format
function tzoneformat(tzone) {
	var originalOption = tzone.element;
	return $('<span class="hstack gap-2 text-truncate-1-line"> <i class="' + $(originalOption).data("tzone") + '"></i> ' + tzone.text + "</span>");
}
//state format
function stateformat(state) {
	var originalOption = state.element;
	return $('<span class="hstack gap-2"> <img src="' + "./../assets/images/flags/us" + "/" + $(originalOption).data("state") + '.png" class="avatar avatar-xs" /> ' + state.text + "</span>");
}
//city format
function cityformat(city) {
	var originalOption = city.element;
	return $('<span class="hstack gap-2"> <span class="wd-7 ht-7 rounded-circle ' + $(originalOption).data("city") + '"></span> ' + city.text + "</span>");
}
//language format
function languageformat(language) {
	var originalOption = language.element;
	return $('<span class="hstack gap-2"> <span class="wd-7 ht-7 rounded-circle ' + $(originalOption).data("language") + '"></span> ' + language.text + "</span>");
}
//currency format
function currencyformat(currency) {
	var originalOption = currency.element;
	return $('<span class="hstack gap-2"> <img src="' + "./../assets/images/flags/1x1" + "/" + $(originalOption).data("currency") + '.svg" class="avatar avatar-xs" /> ' + currency.text + "</span>");
}
//programming format
function programmingformat(programming) {
	var originalOption = programming.element;
	return $('<span class="hstack gap-2"> <i class="fa-brand ' + $(originalOption).data("programming") + '"></i> ' + programming.text + "</span>");
}
// Default
$("[data-select-select2='default']").select2({
	theme: "default",
});
// Icon + Visibility + Privacy
$("[data-select-select2='icon'], [data-select-select2='visibility'], [data-select-select2='privacy'").select2({
	theme: "default",
	templateResult: iformat,
	templateSelection: iformat,
});
// Storage
$("[data-select-select2='storage']").select2({
	theme: "default",
	templateResult: storageformat,
	templateSelection: storageformat,
});
// Tag
$("[data-select-select2='tag'], [data-select-select2='status'], [data-select-select2='priority'], [data-select-select2='label'], [data-select-select2='type']").select2({
	theme: "default",
	templateResult: bgformat,
	templateSelection: bgformat,
});
// User
$("[data-select-select2='user']").select2({
	theme: "default",
	templateResult: userformat,
	templateSelection: userformat,
});
// Payment
$("[data-select-select2='payment']").select2({
	theme: "default",
	templateResult: paymentformat,
	templateSelection: paymentformat,
});
// Flag
$("[data-select-select2='flag']").select2({
	theme: "default",
	templateResult: flagformat,
	templateSelection: flagformat,
});
// Country
$("[data-select-select2='country']").select2({
	theme: "default",
	templateResult: countryformat,
	templateSelection: countryformat,
});
// Time Zone
$("[data-select-select2='tzone']").select2({
	theme: "default",
	templateResult: tzoneformat,
	templateSelection: tzoneformat,
});
// State
$("[data-select-select2='state']").select2({
	theme: "default",
	templateResult: stateformat,
	templateSelection: stateformat,
});
// City
$("[data-select-select2='city']").select2({
	theme: "default",
	templateResult: cityformat,
	templateSelection: cityformat,
});
// Language
$("[data-select-select2='language']").select2({
	theme: "default",
	templateResult: languageformat,
	templateSelection: languageformat,
});
// Currency
$("[data-select-select2='currency']").select2({
	theme: "default",
	templateResult: currencyformat,
	templateSelection: currencyformat,
});
// Programming
$("[data-select-select2='programming']").select2({
	theme: "default",
	templateResult: programmingformat,
	templateSelection: programmingformat,
});
