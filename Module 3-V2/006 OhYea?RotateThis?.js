/*
Instructions:
Is one string a rotated version of another?

For example:
String 1: "hello world"
String 2: "orldhello w"

If you double the string, you'll be to trivially find another string inside it using regular String methods.

Doubled string: "hello worldhello world"
Search w/in it: "       orldhello w    "

*/

/*
Input: String
Output: Boolean
Process: Create tripled string of string 1 to search from --> Use the include JavaScript Method to find string 2 within string 1 --> return true or false
*/

function isRotated(str1, str2) {
  // Create Tripled String
  var tripledString = str1 + str1 + str1;
	
	// Use include method to find the string
	if(tripledString.includes(str2)){
		return true;
	}
	else{
		return false
	}
}

isRotated("hello world", "orldhello w");

// Output --> true
