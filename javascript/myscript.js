$(document).ready(function(){
	var q1 = $('#q1');
	var q2 = $('#q2');
	var q3 = $('#q3');
	var q4 = $('#q4');
	var q5 = $('#q5');
	var right = $('#right');
	var left = $('#left'); 
	var questions = [q1, q2, q3, q4, q5];

	// if (keyup === 13)

	q1.show(function() { //show first quesion  
		q2.hide();
		q3.hide();
		q4.hide();
		q5.hide();
	});

	right.on("click", function(){
		q1.next().show();
	});





	//  var rightclick = function () {
	//  	for (var i = questions[0]; i <= 4; i++) {
	//  	show(questions++); 
	//  }
	// };
 	// right.on("click", rightclick());
// +++++++++++++++++++++++++++++++++++++++++++++++++++

	// right.on("click", function() {
	// 	q4.hide();
	// 	q5.show();
	// })
	// right.on("click", function() {
	// 	questions[1].show(questions[2]);
	// });


	// create function that toggles between questions with an array
	// [q1, q2, q3, q4, q5]


});	