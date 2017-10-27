/*
Instructions:
Write a function called "getAllKeys" which returns an array of all the input object's keys.

Example Input:
{name : 'Sam', age : 25, hasPets : true}

Example Output:
['name', 'age', 'hasPets']

Starter Code:
function getAllKeys(obj) {
  // your code here
}

*/

var object = {name : 'Sam', age : 25, hasPets : true};

function getAllKeys(obj) {
  var newArray = [];
  for(var x in obj) {
    newArray.push(x);
  }
  return newArray;
}

getAllKeys(object);
