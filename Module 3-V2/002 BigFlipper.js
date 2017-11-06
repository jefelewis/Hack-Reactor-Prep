/*
Instructions:
Flip every chunk of n characters in a string, where n is any positive integer greater than 1.
Note that this is intentionally very similar to the previous problem.
Please focus on getting a working solution with the tools you know well.
Practice the interactive/collaborative interview style that's described in the documentation.

Example:
var input = 'a short example';
var output = flipEveryNChars(input, 5);
console.log(output); // --> ohs axe trelpma
Breaking this example down piece by piece:
'a sho' -> 'ohs a'
'rt ex' -> 'xe tr'
'ample' -> 'elpma'
-> 'ohs axe trelpma'
*/

// STEPS TO SOLVE
// Input: String
// Output: String
// Process: Take string input --> create an output string --> flip the Nth character to be the first character -->
// flip the first character to be the Nth character --> return output

function flipEveryNChars(input, n){
  // Create output string
  var output = "";
  // Iterate through the string every Nth character
  for(var i = 0; i < input.length; i += n){
    // Iterate through the string backwards, starting at 0. (n - 1) is to convert to the index
    for(var j = n - 1; j >= 0; j--){
      // Assign the first character + the second, third, fourth, and fifth character to the output
      output += input[i + j];
    }
  }
  // Return Output
  return output;
}

flipEveryNChars("a short example", 5);

// Output --> "ohs axe trelpma"
