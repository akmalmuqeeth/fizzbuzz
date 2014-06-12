$(document).ready(function () {

	$(".inputButton").on("click", function(){
		var limit = $(".inputText").val();
		var limitToInteger = +limit;

		 if(isNaN(limitToInteger)) {
 			reportError(limit)
		 }  else if(isDecimal(limitToInteger)) {
		 	reportError(limit)
		 }
		 else {
		 	$('.errorsList').hide();
		 	calculateFizzBuzz(limitToInteger);
		 }

		});
	
});

function reportError(errorVal){
	$('.errorsList').show();
	$('.errorsList').empty();
	$('.errorsList').append($("<li>"+errorVal+" is not a valid input. Please enter an integer.</li>"))
}

function calculateFizzBuzz(number) {
	var $list = $('.list');
	for (var i = 1; i <= number; i++) {
		var divByThree = (i%3 == 0)
		var divByFive = (i%5 == 0)
		
		if(divByThree &&  divByFive) {
			$list.append($("<li>fizzbuzz</li>"))
		}
		else if(divByThree) {
			$list.append($("<li>fizz</li>"))
		} else if(divByFive) {
			$list.append($("<li>buzz</li>"))
		} else {
			$list.append($("<li>"+i+"</li>"))
		}
	}
}

function isDecimal(limitToInteger){
	return (limitToInteger - Math.floor(limitToInteger)) != 0
}