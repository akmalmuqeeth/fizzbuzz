$(document).ready(function () {
	calculateFizzBuzz(100);
});

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