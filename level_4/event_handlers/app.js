$(document).ready(function() {
	$('.foo').on('click', 'button', function() {
		$(this).closest('.foo').find('.bar').slideToggle();
	});
});