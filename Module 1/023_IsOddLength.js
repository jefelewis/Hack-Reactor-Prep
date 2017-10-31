/*
Instructions:
Write a function called "isOddLength".

Given a word, "isOddLength" returns whether the length of the given word is odd.

Input:
isOddLength(“special”);

Output:
true


Starter Code:
function isOddLength(word){
	// your code here
}
*/

// Answer:
function isOddLength(word){
	if(word.length % 2 !== 0){
		return true;
	}
	else {
		return false;
	}
}

isOddLength("special");

// Output
true
