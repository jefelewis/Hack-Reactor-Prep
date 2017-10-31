/*
Instructions:
Write a function called "areBothOdd".

Given 2 numbers, "areBothOdd" returns whether or not both of the given numbers are odd.

Input:
areBothOdd(1, 3);

Output:
true


Starter Code:
function areBothOdd(num1, num2){
	// your code here
}
*/

// Answer:
function areBothOdd(num1, num2){
	if(num1 % 2 !== 0 && num2 % 2 !== 0){
 		return true;
	}
	else {
		return false;
	}
}

areBothOdd(1,3);

// Output
true
