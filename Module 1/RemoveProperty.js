/*
Instructions:
Write a function called "removeProperty".

Given an object and a key, "removeProperty" removes the given key from the given object.

Input:
removeProperty(obj, "name");

Output:
undefined


Starter Code:
function removeProperty(obj, key){
	// your code here
}
*/

// Answer:
var obj = {name: "Sam", age: 20}

function removeProperty(obj, key){
	if(obj && obj[key]){
		delete obj[key];
	}
}

removeProperty(obj, "name");

// Output
undefined
