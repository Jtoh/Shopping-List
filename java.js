$(document).ready(function(){

$('.items-field').keypress(function(x) {
	var list = $(this).text();
	$(this).append(list);
});


});