/*
Instructions:
Write a function called "computeAverageLengthOfWords".

Given two words, "computeAverageLengthOfWords" returns the average of their lengths.

Input:
computeAverageLengthOfWords(“code”, “programs”);

Output:
6


Starter Code:
function computeAverageLengthOfWords(word1, word2){
	// your code here
}
*/

// Answer:
function computeAverageLengthOfWords(word1, word2){
	return (word1.length + word2.length)/2;
}

computeAverageLengthOfWords("code", "programs");

// Output
6
