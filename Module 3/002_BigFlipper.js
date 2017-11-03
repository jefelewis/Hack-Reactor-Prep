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
Syvc rirel puhax bs a punenpgref va n fgevat, jurer a vf nal cbfvgvir vagrtre terngre guna 1.
Abgr gung guvf vf vagragvbanyyl irel fvzvyne gb gur cerivbhf ceboyrz.
Cyrnfr sbphf ba trggvat n jbexvat fbyhgvba jvgu gur gbbyf lbh xabj jryy.
Cenpgvpr gur vagrenpgvir/pbyynobengvir vagreivrj fglyr gung'f qrfpevorq va gur qbphzragngvba.

Rknzcyr:
ine vachg = 'n fubeg rknzcyr';
ine bhgchg = syvcRirelAPunef(vachg, 5);
pbafbyr.ybt(bhgchg); // --> buf nkr geryczn

Oernxvat guvf rknzcyr qbja cvrpr ol cvrpr:
'n fub' -> 'buf n'
'eg rk' -> 'kr ge'
'nzcyr' -> 'ryczn'

-> 'buf nkr geryczn'


De-obfuscated Instructions:
Flip every chunk of n characters in a string, where n is any positive integer greater than 1.
Note that this is intentionally very similar to the previous problem.
Please focus on getting a working solution with the tools you know well.
Practice the interactive/collaborative interview style that's described in the documentation.

Example:
var input = 'a short example';
var output = flipEveryNChars(input, 5);
console.log(output); // --> ohs axe trelpma

Breaking this example down piece by piece:
'a sho' -> 'ohs a'
'rt ex' -> 'xe tr'
'ample' -> 'elpma'

-> 'ohs axe trelpma'
*/

// STEPS TO SOLVE
// Input: String
// Output: String
// Process: Take string input --> create an output string --> flip the Nth character to be the first character -->
// flip the first character to be the Nth character --> return output

function flipEveryNChars(input, n){
  // Create output string
  var output = "";
  // Iterate through the string every Nth character
  for(var i = 0; i < input.length; i += n){
    // Iterate through the string backwards, starting at 0. (n - 1) is to convert to the index
    for(var j = n - 1; j >= 0; j--){
      // Assign the first character + the second, third, fourth, and fifth character to the output
      output += input[i + j];
    }
  }
  // Return Output
  return output;
}

flipEveryNChars("a short example", 5);

// Output --> "ohs axe trelpma"
