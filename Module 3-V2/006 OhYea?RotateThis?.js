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
Input: 2 strings
Output: Boolean
Process: Create a large string with string 1 copied 3 times (2 might not work for all instances) --> Use the .includes() prototype to find string 2 in the large string --> Output true if it includes it. Otherwise, output false
*/

function isRotated(str1, str2) {
  // Create large string to search from
  var searchString = str1 + str1 + str1;
  // Search through large string for string 2
  if(searchString.includes(str2)){
    return true;
  }
  else{
    return false;
  }
}

isRotated("hello world", "orldhello w");

// Output --> true
