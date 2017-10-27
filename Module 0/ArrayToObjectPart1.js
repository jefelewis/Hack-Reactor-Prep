/*
Instructions:
Write a function 'transformFirstAndLast' that takes in an array, and returns an object with:
1) the first element of the array as the object's key, and
2) the last element of the array as that key's value.

Input (Array):
var array = [“Queen”, “Elizabeth”, “Of Hearts”, “Beyonce”];

Output:
var object = {
	Queen : “Beyonce”
}

// Starter Code:
function transformFirstAndLast(array) {
  // your code here
}

*/

var array = ["Queen", "Elizabeth", "Of Hearts", "Beyonce"]

function transformFirstAndLast(arr) {
  var newObject = {};
  newObject[arr[0]] = arr[arr.length - 1];
  return newObject;
}

transformFirstAndLast(array);
