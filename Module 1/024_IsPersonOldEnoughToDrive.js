/*
Instructions:
Write a function called "isPersonOldEnoughToDrive".

Given a "person" object, that contains an "age" property, "isPersonOldEnoughToDrive" returns whether the given person is old enough to drive. The legal driving age in the United States is 16.

Input:
var obj = {age: 16};
isPersonOldEnoughToDrive(obj);

Output:
true


Starter Code:
function isPersonOldEnoughToDrive(person){
	// your code here
}
*/

//Answer:
var obj = {age: 16};

function isPersonOldEnoughToDrive(obj){
	if(obj.age >= 16){
		return true;
	}
	else {
		return false;
	}
}

isPersonOldEnoughToDrive(obj);

// Output
true
