/*
Instructions:
Write a function called "getProperty". 

Given an object and a key, "getProperty" returns the value of the property at the given key. If there is no property at the given key, it should return undefined.

Input:
var obj = {
	key: "value"
};

Output:
value


Starter Code:
function getProperty(obj, key) {
	// your code here
}
*/

// Answer:
var object = {
	key: "value"
};

function getProperty(obj, key) {
	return object[key];
}

getProperty(object, "key");

// Output
value
