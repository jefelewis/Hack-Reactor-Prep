/*
Instructions:
Write a function called "isOldEnoughToDrink".

Given a number, in this case an age, "isOldEnoughToDrink" returns whether a person of this given age is old enough to legally drink in the United States. The legal drinking age in the United States is 21.

Input:
isOldEnoughToDrink(22);

Output:
true


Starter Code:
function isOldEnoughToDrink(age){
	// your code here
}
*/

// Answer:
function isOldEnoughToDrink(age){
	if(age > 0 && age < 21){
		return false;
	}
	else {
		return true;
	}
}

isOldEnoughToDrink(21);

// Output
true
