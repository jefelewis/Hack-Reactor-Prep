/*
Instructions:
You're given an array of integers a and two integers x and y. Count the number of elements in the array such that `x ≤ a[i] ≤ y, where i is the 0-based index of the element.

Code Limit:
Less than 48 characters.

Example:
checkRange([2, 5, 6, 7, 1, 3, 4, 11, 56, 49], 1, 7);

// Output (Elements 2, 5, 6, 7, 1, 3, 4 should only be counted)
7

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
