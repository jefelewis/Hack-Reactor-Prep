/*
Instructions:
Write a function called "isOdd".

Given a number, "isOdd" returns whether the given number is odd.

Input:
isOdd(9);

Output:
true


Starter Code:
function isOdd(num){
	// your code here
}
*/

// Answer:
function isOdd(num){
	if(!num % 2 === 0){
		return true
	}
	else {
		return false
	}
}

isOdd(9);

// Output
true
