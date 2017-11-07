/*
Instructions:
You will be given an array that contains two strings. Your job is to create a function that will take those two strings and transpose them, so that the strings go from top to bottom instead of left to right.
e.g. transposeTwoStrings(["Hello","World"]);

Should return:
H W
e o
l r
l l
o d

*/

// Input: Array with two strings
// Output: String
// Process: Create maxLength variable --> find the max length in the instance one word is longer than the other --> Iterate through the strings --> Create variables for both elements and assign them with spaces " " --> Assign characters to elements and add spaces " " if one string is longer than the other string --> Return output 

function transposeTwoStrings(arr) {
  // Create maxLength variable
  var maxLength = 0;
  // Find the maxLength between the two strings
  if(arr[0].length > arr[1].length){
    maxLength = arr[0].length
  }
  else{
    maxLength = arr[1].length
  }
  // Iterate through the array items
  for(var i = 0; i < maxLength; i++){
    // Create element variables
    var element1 = " ";
    var element2 = " ";
    // Assign characters to the element
    if(typeof arr[0][i] !== "undefined"){
      element1 = arr[0][i];
    }
    if(typeof arr[1][i] !== "undefined"){
      element2 = arr[1][i];
    }
    
    // Output
    console.log(element1 + " " + element2);
  }
}

transposeTwoStrings(["Hello","World"]);

/* Output --> 

H W
e o
l r
l l
o d

*/
