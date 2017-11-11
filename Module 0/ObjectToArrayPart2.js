/*
Instructions:
Write a function called "listAllValues" which returns an newArray of all the input object’s values.

Input (Object):
var object = {name: "Krysten", age: 33, hasPets : false};

Output:
["Krysten", 33, false]

Starter Code:
var object = {name : "Krysten", age : 33, hasPets : false};

function listAllValues(obj) {
	// your code here
}

*/

var object = {name : "Krysten", age: 33, hasPets: false};

function listAllValues(obj) {
	var newArray = [];
	for(var x in obj) {
		newArray.push(obj[x]);
	}
return newArray; 
} 

listAllValues(object);

// Output --> ["Krysten", 33, false]
