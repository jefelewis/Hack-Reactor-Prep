/*
Instructions:
Write a function called "addFullNameProperty".

Given an object that has a "firstName" property and a "lastName" property, "addFullNameProperty" returns a "fullName" property whose value is a string with the first name and last name separated by a space.

Input:
addFullNameProperty(person);
console.log(person.fullName);

Output:
Jade Smith


Starter Code:
function addFullNameProperty(obj){
	// your code here
}
*/

//Answer:
var person = {firstName: "Jade", lastName: "Smith"};

function addFullNameProperty(obj){
  obj.fullName = obj.firstName + " " + obj.lastName;
	return obj;
}

addFullNameProperty(person);
console.log(person.fullName);

// Output
Jade Smith
