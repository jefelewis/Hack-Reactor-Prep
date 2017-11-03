/*
Instructions:
Write a function called "isPersonOldEnoughToDrinkAndDrive".

Given a "person" object, that contains an "age" property, "isPersonOldEnoughToDrinkAndDrive" returns whether the given person is old enough to legally drink and drive in the United States. The legal drinking age in the United States is 21. The legal driving age in the United States is 16. It is always illegal to drink and drive in the United States.

Input:
var obj = {age: 21};
isPersonOldEnoughToDrinkAndDrive(obj);

Output:
false


Starter Code:
function isPersonOldEnoughToDrinkAndDrive(person){
	// your code here
}
*/

//Answer:
var obj = {age: 45};

function isPersonOldEnoughToDrinkAndDrive(person){
	if(obj.age > 0 || obj.age < 0){
		return false;
	}
	else {
		return true;
	}
}

isPersonOldEnoughToDrinkAndDrive(obj);

// Output
false
