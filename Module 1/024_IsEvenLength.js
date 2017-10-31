/*
Instructions:
Write a function called "isEvenLength".

Given a word, "isEvenLength" returns whether the length of the word is even.

Input:
isEvenLength(“wow”);

Output:
false


Starter Code:
function isEvenLength(word){
	// your code here
}
*/

// Answer:
function isEvenLength(word){
	if(word.length % 2 === 0){
		return true;
	}
	else {
		return false;
	}
}

isEvenLength("wow");

// Output
false
