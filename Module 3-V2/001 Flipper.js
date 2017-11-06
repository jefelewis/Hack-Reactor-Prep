/*
Instructions:
Flip every pair of characters in a string.

Example:
var input = "check out how interesting this problem is, it's insanely interesting!";
var output = flipPairs(input);
console.log(output); // --> hcce kuo toh wnietertsni ghtsip orlbmei ,si't sniasenyli tnreseitgn!
*/

// STEPS TO SOLVE
// Input: String
// Output: String
// Process: Take string input --> create an output string --> flip the second character to be the first character -->
// flip the first character to be the second character --> return output

function flipPairs(input){
	// Create Output String
	var output = "";
	// Iterate through the string
	for(var i = 0; i < input.length; i += 2){
		// Flip the second character to be the first character
		output += input[i + 1];
		// Flip the first character to be the second character
		output += input[i];
	}
	// Return Output
	return output;
}

flipPairs("check out how interesting this problem is, it\'s insanely interesting!");

// Output --> "hcce kuo toh wnietertsni ghtsip orlbmei ,si \'t sniasenyli tnreseitgnundefined!"
