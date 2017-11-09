/*
Instructions:
You're given an array of integers a and two integers x and y.
Count the number of elements in the array such that x ≤ a[i] ≤ y,
where i is the 0-based index of the element.

Code Limit:
Less than 48 characters.

Example:
checkRange()[2, 5, 6, 7, 1, 3, 4, 11, 56, 49], 1, 7)

// Output --> 7
(elements 2, 5, 6, 7, 1, 3, 4 should be counted)
*/

/*
Input: Array
Output: Number
Process: Create number (counter) variable --> Iterate through the array -->
Find which items in the array are greater than x and less than y -->
If it meets the criteria, add 1 to to the count --> return count
*/


function checkRange(a,x,y){
  var counter = 0;
  for(var i = 0; i < a.length; i++){
    if(x <= a[i] && a[i] <= y){
      counter++;
    }
  }
  return counter;
}

checkRange([2, 5, 6, 7, 1, 3, 4, 11, 56, 49], 1, 7);

// Output --> 6
