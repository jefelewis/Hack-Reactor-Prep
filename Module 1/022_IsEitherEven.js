/*
Instructions:
Write a function called "isEitherEven".

Given two numbers, "isEitherEven" returns whether or not either one of the given numbers is even.

Input:
isEitherEven(1, 4);

Output:
true


Starter Code:
function isEitherEven(num1, num2){
	// your code here
}
*/

// Answer:
function isEitherEven(num1, num2){
	if (num1 % 2 === 0 || num2 % 2 === 0){
		return true;
	}
	else {
		return false;
	}
}

isEitherEven(1, 4);

// Output
true
