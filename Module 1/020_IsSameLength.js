/*
Instructions:
Write a function called "isSameLength".

Given two words, "isSameLength" returns whether the given words have the same length.

Input:
isSameLength("words", "super");

Output:
true


Starter Code:
function isSameLength(word1, word2){
	// your code here
}
*/

// Answer:
function isSameLength(word1, word2){
  if(word1.length === word2.length){
		return true;
	}
	else {
		return false;
	}
}

isSameLength("words", "super");

// Output
true
