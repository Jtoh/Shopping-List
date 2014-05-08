$(document).ready(function(){
$('.items-field').keypress(function(event) {
	var list = $('.list-items');
	var item = $(this).val();
	var xMark = '<span class="delete"></span>';
	if(event.keyCode == 13) {
		$(list).append('<li>' + item + xMark + '</li>');
		$(this).val('');
	}
});

});

$(document).on('click', '.delete', function() {
	$(this).closest('li').fadeOut(300);
});

$(document).on('dblclick', 'li', function() {
	$(this).toggleClass('new');
	$('.delete').remove();
});
