/*
Instructions:
Given a list of non-negative integers and a target sum, find a pair of numbers that sums to the target sum.

Example:
var pair = findPairForSum([3, 34, 4, 12, 5, 2], 9);
console.log(pair); // --> [4, 5]
*/

/*
Input: Array
Output: Array
Process: Create output array --> Create new filtered array with numbers less than the target --> iterate through array to find the first number and assign it to a variable --> iterate through the array again to find the second number --> If the first number and second number equal the target, push to the output array
*/

function findPairForSum(arr, target){
  // Create array for output
  var output = [];
  // Filter out numbers bigger than target sum
  var filteredArray = arr.filter(function(number){
    return number < target;
  });
  // Iterate through the array to find the first number
  for(var i = 0; i < filteredArray.length; i++){
    var firstNumber = filteredArray[i];
    for(var j = 0; j < filteredArray.length; j++){
      // Iterate through the filteredArrayay to find the second number
      if(firstNumber + filteredArray[j] === target){
        var secondNumber = filteredArray[j];
        // Push output to output array
        output.push(firstNumber, secondNumber);
        return output;
      }
    }
  }
}

findPairForSum([3, 34, 4, 12, 5, 2], 9);

// Output --> [4, 5]
