/*
Instructions:
Write a function called "isPersonOldEnoughToDrink".

Given a "person" object, that contains an "age" property, "isPersonOldEnoughToDrink" returns whether the given person is old enough to drink. The legal drinking age in the United States is 21.

Input:
var obj = {age: 16};

isPersonOldEnoughToDrink(obj);

Output:
false


Starter Code:
function isPersonOldEnoughToDrink(obj){
	// your code here
}
*/

// Answer:
var obj = {age: 19};

function isPersonOldEnoughToDrink(obj){
	if(obj.age >= 21){
		return true;
	}
	else {
		return false;
	}
}

isPersonOldEnoughToDrink(obj);

// Output
false
