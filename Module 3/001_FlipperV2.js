/*
PLEASE FOLLOW THESE INSTRUCTIONS CAREFULLY.

1) Prepare to record & time:
Prepare your screencasting (both video and audio) setup all ready to go before de-obfuscating the problem statement.
Prepare an audible countdown timer (say, the Clock app on your phone).


2) Begin the problem:
Go to http://www.rot13.com/ and de-obfuscate the problem statement.
Paste the problem statement into the work area in Repl.it (replace the original, obfuscated version).
Start your timer for: 20 minutes / TWENTY MINUTES
Start recording.


3) Do the problem in a structured way:
Follow the instructions from the sidebar titled "How to Run Your Interview".
Note: Since you are working by yourself, you have to mimic the live experience by asking rhetorical questions, then provisionally answering them yourself on behalf of your imaginary live interviewer. Ask those questions out loud anyway!


4) Review your own work and record your notes here:
Watch your video and observe what you did well and what you want to improve for next time.
Write those notes here in this Repl.it problem.
*/


/*
Starter Code:
Problem description (see instructions for how to de-obfuscate).

Syvc rirel cnve bs punenpgref va n fgevat.


Rknzcyr:
ine vachg = "purpx bhg ubj vagrerfgvat guvf ceboyrz vf, vg\'f vafnaryl vagrerfgvat!";
ine bhgchg = syvcCnvef(vachg);
pbafbyr.ybt(bhgchg); // --> uppr xhb gbu javrgregfav tugfvc beyozrv ,fv 'g favnfralyv gaerfrvgta!


De-obfuscated Instructions:
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
	// Iterate through the string every 2nd character
	for(var i = 0; i < input.length; i += 2){
		// Iterate through the string backwards, starting at 0. (2 - 1) is to convert to the index
		for(var j = 2 - 1; j >= 0; j--){
			// Assign the first character + the second character to the output
			output += input[i+j]
		}
	}
	// Return Output
	return output;
}
 
flipPairs("check out how interesting this problem is, it's insanely interesting!");

// Output --> "hcce kuo toh wnietertsni ghtsip orlbmei ,si \'t sniasenyli tnreseitgnundefined!"
