/*
Instructions:
Write a function called "isOldEnoughToDrive".

Given a number, in this case an age, "isOldEnoughToDrive" returns whether a person of this given age is old enough to legally drive in the United States. The legal driving age in the United States is 16.

Input:
isOldEnoughToDrive(22);

Output:
true


Starter Code:
function isOldEnoughToDrive(age){
	// your code here
}
*/

// Answer:
function isOldEnoughToDrive(age){
	if (age >= 16){
		return true;
	}
	else {
 		return false;
	}
}

isOldEnoughToDrive(16);

// Output
true
