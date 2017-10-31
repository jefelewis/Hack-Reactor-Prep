/*
Instructions:
Write a function called "isEven".

Given a number, "isEven" returns whether it is even.

Input:
isEven(11);

Output:
false


Starter Code:
function isEven(num){
	// your code here
}
*/

// Answer:
function isEven(num){
	if(num % 2 === 0){
		return true;
	}
	else {
		return false;
	}
}

isEven(11);

// Output
false
