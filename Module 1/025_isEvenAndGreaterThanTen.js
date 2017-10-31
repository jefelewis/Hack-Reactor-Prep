/*
Instructions:
Write a function called "isEvenAndGreaterThanTen".

Given a number, "isEvenAndGreaterThanTen" returns whether it is both even and greater than 10.

Input:
iisEvenAndGreaterThanTen(13);

Output:
false


Starter Code:
function isEvenAndGreaterThanTen(num){
	// your code here
}
*/

// Answer:
function isEvenAndGreaterThanTen(num){
	if(num % 2 === 0 && num > 10){
		return true;
	}
	else {
		return false;
	}
}

isEvenAndGreaterThanTen(13);


// Output
false
