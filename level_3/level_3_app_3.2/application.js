$(document).ready(function(){
	// var price = $('<p>From $399.99</p>');
	//adds the price node as the last child of our list item.
	$('button').on('click', function () {
		$('.vacation').append('<p>From $399.99</p>');
		//removing the DOM
		$('button').remove();
	})

});

// //other methods
// .appendTo(<element>)
// .prependTo(<element>)
// .insertAfter(<element>)
// .insertBefore(<element>)

// price.appendTo($('.vacation'));
// //same as above


// //3.7  Acting on Interaction
// //passing ina function
// $(document).ready(function(){});

// //watching for click
// $('button').on('click', function(){
// 	//runs when any button is clicked
// });

// //Removing from the DOM
// $(document).ready(function(){
// 	$('button').on('click', function() {
// 		// run this function on click
// 	}
// });

// //full example
// $(document).ready(function(){
// 	$('button').on('click', function(){
// 		var price = $('<p>From $399.99</p>');
// 		$('.vacation').append(price);
// 		$('button').remove();
// 	})
// });
