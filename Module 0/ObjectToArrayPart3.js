/*
Instructions:
Write a function called "convertObjectToList" which converts an object literal into an array of arrays.

Input (Object):
var object = {name: “Holly”, age: 35, role: “producer”};

Output:
[["name", "Holly"], ["age", 35], ["role", "producer"]]

Starter Code:
var object = {name: “Holly”, age: 35, role: “producer”};

function convertListToObject(obj) {
	// your code here
}

*/

var object = {name: "Holly", age: 35, role: "producer"};

function convertObjectToList(obj) {
	var newArray = [];
	for(var x in obj) {
		var newArray2 = [];
		newArray2.push(x);
		newArray2.push(obj[x]);
		newArray.push(newArray2);
	}
	return newArray;
}

convertObjectToList(object);
