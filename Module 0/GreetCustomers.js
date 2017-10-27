/*
Instructions:
Write a function called "greetCustomer". Given a name, "greetCustomer" returns a greeting based on how many times that customer has visited the restaurant.  Please refer to the customerData object. The greeting should be different, depending on the name on their reservation.

Starter Code:
var customerData = {“Joe’: {visits: 1}, “Carol”: {visits: 2}, “Howard”: {visits: 3}, “Carrie”: {visits: 4}};

function greetCustomer(firstName) {
var greeting = "";
	// your code here
	return greeting;
}

*/

var customerData = {
  "Joe": {
    visits: 1
  },
  "Carol": {
    visits: 2
  },
  "Howard": {
    visits: 3
  },
  "Carrie": {
    visits: 4
  }
};

function greetCustomer(firstName) {
  var greeting = "";
  // If Customer doesn"t exist
  if (!customerData[firstName]) {
    greeting = "Welcome! Is this your first time?";
  }
  // 1st Visit
  if (customerData[firstName].visits == 1) {
    greeting = "Welcome back, " + firstName + "! We're glad you liked us the first time!";
  }
  // 2nd Visit
	if (customerData[firstName].visits >= 2) {
	  greeting = "Welcome back, " + firstName + "! So glad to see you again!";
	}
  return greeting;
}

//  Console log the greeting
console.log(greetCustomer("Joe"));
console.log(greetCustomer("Carol"));
console.log(greetCustomer("Howard"));
console.log(greetCustomer("Carrie"));
