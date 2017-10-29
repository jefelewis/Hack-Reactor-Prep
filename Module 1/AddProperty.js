/*
Instructions:
Write a function called "addProperty".

Given an object, and a key, "addProperty" sets a new property on the given object with a value of true.

Input:
addProperty(myObj, "myProperty");

Output:
{myProperty: true}


Starter Code:
function addProperty(obj, key){
	// your code here
}
*/

// Answer:
var myObj = {};
function addProperty(obj, key){
	obj[key] = true;
	return obj;
}

addProperty(myObj, "myProperty");

// Output
{myProperty: true}
