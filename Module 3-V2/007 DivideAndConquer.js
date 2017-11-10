/*
Binary search is a technique for very rapidly searching a sorted collection by cutting the search space in half at every pass.

Given a sorted array, such as this:
[1, 3, 16, 22, 31, 33, 34]

You can search for the value 31, as follows:

1) Pick the midpoint: 22.
2) The value is higher than 22, so now consider only the right half of the previous array:
[...31, 33, 34]
3) Pick the midpoint: 33
4) The value is lower than 33, so now consider only the left half of the previous array:
[...31...]
5) Pick the midpoint: 31
6) You've hit the value.
7) Return the index of the value.

Notes:
* If you don't find the value, you can return null.
* If at any point you calculate the index of the midpoint and get a fractional number, just round it down ("floor" it).

*/
/*
Input: Array
Output: Number
Process: Take the array length --> Divide the length by 2 --> If the remainder is not equal 0, than take the length divide by 2 --> else
*/


function binarySearch(arr, target){
	// Define start and end index
	var startIndex = 0;
	var endIndex = arr.length - 1;

	// Create While Loop
	while(startIndex <= endIndex){
		// Define midIndex
		var midIndex = Math.floor((startIndex + endIndex) / 2);

		// Find if there is match
		if(arr[midIndex] === target){
			return midIndex;
		}
		// Search Right
		else if(target > midIndex){
			startIndex = midIndex + 1;
		}
		// Search Left
		else{
			endIndex = midIndex - 1;
		}
	}
	// Return null if not found
	return null;
}

search([1, 3, 16, 22, 31, 33, 34], 31);

// Output --> 4
