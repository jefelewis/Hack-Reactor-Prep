/*
Instructions:
Write a function called "isOldEnoughToVote".

Given a number, in this case an age, 'isOldEnoughToVote' returns whether a person of this given age is old enough to legally vote in the United States. The legal voting age in the United States is 18.

Input:
isOldEnoughToVote(22)

Output:
true


Starter Code:
function isOldEnoughToVote(age){
	// your code here
}
*/

// Answer:
function isOldEnoughToVote(age){
	if(age >= 18){
		return true;
	}
	else {
		return false;
	}
}

isOldEnoughToVote(18);

// Output
true
