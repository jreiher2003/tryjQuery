$(document).ready(function(){

	$('.vacation').on('click', 'button', function(){
		var vacation = $(this).closest('.vacation');
		var amount = vacation.data('price');
		var price = $('<p>From $'+ amount +'</p>');
		vacation.append(price);
		$(this).remove();
	});

	$('#filters').on('click', '.onsale-filter', function(){
		// find all vacations that are on-sale
		// add a class to these vacations
		$('.highlighted').removeClass('.highlighted');
		$('.vacation').filter('.onsale').addClass('.highlighted');
	});

	$('#filters').on('click', '.expiring-filter', function(){
		$('.vacation').filter('.expiring').addClass('.highlighted');
	});
});


//class manipulation
// .addClass(<class>)
// .removeClass(<class>)