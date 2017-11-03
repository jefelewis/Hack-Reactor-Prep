/*
Instructions:
Write a function called "getLastElement".

Given an array, "getLastElement" returns the last element of the given array. If the given array has a length of 0, it should return 'undefined'.

Input:
getLastElement([1, 2, 3, 4]);

Output:
4


Starter Code:
function getLastElement(array){
	// your code here
}
*/

//Answer:
function getLastElement(array){
	if(array.length > 0){
		return array[array.length - 1];
	}
	else {
		return undefined;
	}
}

getLastElement([1, 2, 3, 4]);

// Output
4
