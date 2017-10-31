/*
Instructions:
Write an "assertArraysEqual" function from scratch.

Assume that the arrays in question contain only scalar values (i.e., simple values like strings or numbers).

Do not use JSON.stringify(), Array.join(), or any other "convert the array to a string so I can compare two strings" type of technique to implement this.

Success Case:
Input:
var expected = ['b', 'r', 'o', 'k', 'e', 'n'];
var actual = 'broken'.split('');

assertArraysEqual(actual, expected, 'splits string into array of characters');

Output:
Passed

Failure Case:
Input:
var expected = [1, 1, 2, 3, 5, 8, 13];
var actual = generateFirstNFibonaccis(7);

assertArraysEqual(actual, expected, 'generates first 7 Fibonacci numbers');

Output:
FAILED [generates first 7 Fibonacci numbers] Expected "1, 1, 2, 3, 5, 8, 13", but got "2, 3, 5, 8, 13, 21, 34"


Starter Code:
function assertArraysEqual(actual, expected, testName){
	// your code here
}
*/

// Answer:
function assertArraysEqual(actual, expected, testName){
	var testEqualLength = actual.length === expected.length;
	var testEqualElements = actual.every(function(value, i){
		return value === expected[i];
	});
	if (testEqualLength && testEqualElements){
		console.log(“passed”);
	}
	else {
		console.log('FAILED [' + testName + '] Expected "' + expected + '", but got "' + actual + '"');
	}
}

assertArraysEqual([1, 2, 3], [1, 2, 3], 'should pass for equal arrays');
