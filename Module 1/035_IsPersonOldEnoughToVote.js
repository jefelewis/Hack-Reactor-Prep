/*
Instructions:
Write a function called "isPersonOldEnoughToVote".

Given a "person" object, that contains an "age" property, "isPersonOldEnoughToVote" returns whether the given person is old enough to vote. The legal voting age in the United States is 18.

Input:
var obj = {age: 19};

isPersonOldEnoughToVote(obj);

Output:
true


Starter Code:
function isPersonOldEnoughToVote(obj){
	// your code here
}
*/

//Answer:
var obj = {age: 16};

function isPersonOldEnoughToVote(obj){
	if(obj.age >= 18){
		return true;
	}
	else {
		return false;
	}
}

isPersonOldEnoughToVote(obj);

// Output
true
