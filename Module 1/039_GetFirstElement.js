/*
Instructions:
Write a function called "getFirstElement".

Given an array, "getFirstElement" returns the first element of the given array. If the given array has a length of 0, it should return undefined.

Input:
getFirstElement([1, 2, 3, 4, 5]);

Output:
1


Starter Code:
function getFirstElement(array){
	// your code here
}
*/

// Answer:
function getFirstElement(array){
	if(array.length > 0){
		return array[0];
	}
	else {
		return undefined;
	}
}

getFirstElement([1, 2, 3, 4, 5]);

// Output
1
