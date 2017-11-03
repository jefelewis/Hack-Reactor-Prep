/*
Instructions:
Give a list of non negative integers and a target sum, find a pair of numbers
that sums up to the target sum

Example:
var pair = findPairForSum([3, 34, 4, 12, 5, 2], 9);
console.log(pair);

// Output
[4, 5]

Starter Code:
function findPairForSum(integers, target){
  // Your solution here
}
*/


// STEPS TO SOLVE
// Input: Array of numbers
// Output: Array of two numbers that equal the sum
// Process: Find Numbers less than the sum --> Check if leftover pairs are equal to the sum


function findPairForSum(integers, target){
  // Create array for the ouput
  var numbersPair = [];
  // Filter out numbers less than the target
  var filteredArray = integers.filter(function(number){
    return number < target;
  });
  // Iterate through filtered numbers for the first time
  for(var i = 0; i < filteredArray.length; i++){
    // Declare First Number
    firstNumber = filteredArray[i];
    // Iterate through filtered numbers for the second time
    for(var j = 0; j < filteredArray.length; j++){
      if(firstNumber + filteredArray[j] === target){
        // Push numbers to the array
        numbersPair.push(firstNumber, filteredArray[j])
        // Return array with numbers pair
        return numbersPair;
      }
    }
  }
}

findPairForSum([4, 34, 1, 12, 2, 5], 9);

// Output
[4, 5]
