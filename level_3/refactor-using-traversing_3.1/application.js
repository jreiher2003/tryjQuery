$(document).ready(function(){
	$('button').on('click', function(){
		var price = $("<p>From $399.99</p>");
		var price1 = $("<p>From $499.99</p>");
		$(this).closest('.vacation').append(price);
		$(this).closest('.jersey').append(price1);
		//cloest finds only 0 or 1 node
		$(this).remove();
	});
});