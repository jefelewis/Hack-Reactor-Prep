/*
Instructions:
Write a function called "addArrayProperty".

Given an object, a key, and an array, "addArrayProperty" sets a new property on the object at the given key, with its value set to the given array.

Input:
var myObj = {};
var myArray = [1, 3];
addArrayProperty(myObj, "myProperty", myArray);

Output:
[1, 3]


Starter Code:
function addArrayProperty(obj, key, arr){
	// your code here
}
*/

// Answer:
var myObj = {};
var myArray = [1, 3];

function addArrayProperty(obj, key, arr){
	obj[key] = arr;
	return obj;
}

addArrayProperty(myObj, "myProperty", myArray);

// Output
{myProperty: [1, 3]}
