/*
Instructions:
Given a string of even and odd numbers, find which is the sole even number or the sole odd number.
The return value should be 1-indexed, not 0-indexed.

Examples :
detectOutlierValue("2 4 7 8 10"); // => 3 - Third number is odd, while the rest of the numbers are even
detectOutlierValue("1 10 1 1");  //=> 2 - Second number is even, while the rest of the numbers are odd
*/

// STEPS TO SOLVE
// Input: String
// Output: String
// Process: Take string input --> Split the string by spaces --> filter array into odd and even arrays --> if even array is larger
// than odd array, odd array is the outlier and visa versa

function detectOutlierValue(input){
  // Split the string by spaces
  var splitString = input.split(" ");

  // Even Numbers Array
  var evenNumbers = splitString.filter(function(number){
    return number % 2 === 0;
  });

  // Odd Numbers Array
  var oddNumbers = splitString.filter(function(number){
    return number % 2 !== 0;
  });

  // Compare the Even and Odd Arrays
  if(evenNumbers.length > oddNumbers.length){
    return oddNumbers;
  }
  else{
    return evenNumbers
  }
}

detectOutlierValue("2 4 7 8 10");

// Output --> ["7"]
