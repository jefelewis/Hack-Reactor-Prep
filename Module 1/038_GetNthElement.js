/*
Instructions:
Write a function called "getNthElement".

Given an array and an integer, "getNthElement" returns the element at the given integer, within the given array. If the array has a length of 0, it should return 'undefined'.

Input:
getNthElement([1, 3, 5], 1);

Output:
3


Starter Code:
function getNthElement(array, n){
	// your code here
}
*/

// Answer:
function getNthElement(array, n){
	if(array.length > 0 ){
		return array[n];
	}
	else {
		return undefined;
	}
}

getNthElement([1, 3, 5], 1);

// Output
3
