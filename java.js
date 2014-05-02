$(document).ready(function(){
var xMark = '<span class="delete"></span>'

$('.items-field').keypress(function(event) {
	var item = $(this).val();
	var list = $('.list');
	if(event.keyCode == 13) {
		list.append('<li>' + xMark + item + '</li>');
	}
	
});


});

