/*
Instructions:
You will be given an array that contains two strings. Your job is to create a function that will take those two strings and transpose them, so that the strings go from top to bottom instead of left to right.
e.g. transposeTwoStrings(["Hello","World"]);

should return:
H W
e o
l r
l l
o d
*/

// Input: Array with two strings
// Output: String
// Process: Create output array --> find the max length in the instance one word is longer than the other --> Iterate through the strings --> Assign characters to output array and add spaces " " if one string is longer than the other string --> Return output 

function transposeTwoStrings(arr){
  // Create results array
  var results = [];
  // Find the max length
  var maxLength = arr[0].length;
  if(arr[1].length > arr[0].length){
    maxLength = arr[1].length;
  }
  // Iterate through the array
  for(var i = 0; i < maxLength; i++){
    // Push values from both strings with consideration for spaces " " if one string is shorter than the other
    results.push((arr[0][i] || " ") + (arr[1][i] ||  " "))
  }
  // Return output
  return results.join("\n");
}

transposeTwoStrings(["Hello","World"]);
