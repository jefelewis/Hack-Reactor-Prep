/*
Instructions:
Write a function called "isOldEnoughToDrinkAndDrive".

Given a number, in this case an age, "isOldEnoughToDrinkAndDrive" returns whether a person of this given age is old enough to legally drink and drive in the United States. The legal drinking age in the United States is 21. It is always illegal to drink and drive in the United States.

Input:
isOldEnoughToDrinkAndDrive(22);

Output:
false


Starter Code:
function isOldEnoughToDrinkAndDrive(age){
	// your code here
}
*/

// Answer:
function isOldEnoughToDrinkAndDrive(age){
	if(age < 0 || age > 0){
		return false;
	}
	else {
		return true;
	}
}

isOldEnoughToDrinkAndDrive(21);

// Output
false
