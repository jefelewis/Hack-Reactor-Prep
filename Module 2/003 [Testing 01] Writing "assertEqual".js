/*
Instructions:
Write an assertEqual function from scratch.

It should compare actual and expected values with strict equality (not typecasting).

Success Case:
Input:
function multiplyByTwo(n) {
	return n * 2;
}

var output = multiplyByTwo(2);
assertEqual(output, 4, 'it doubles 2 to 4');

Output:
Passed

Failure Case:
Input:
function multiplyByTwo(n) {
	return (n * 2) + 1; // an incorrect implementation
}

var output = multiplyByTwo(2); // returns 5
assertEqual(output, 4, 'it doubles 2 to 4');

Output:
FAILED [it doubles 2 to 4] Expected "4", but got "5"


Starter Code:
function assertEqual(actual, expected, testName){
	// your code here
}
*/

// Answer:
function assertEqual(actual, expected, testName){
	if (actual === expected){
		console.log(“passed”);
	}
	else {
		console.log('FAILED [' + testName + '] Expected "' + expected + '", but got "' + actual + '"');
	}
}

assertEqual(5, 5, 'should pass for equal values');
