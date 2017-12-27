/*
Alice wrote a sequence of words in CamelCase as a string of letters, , having the following properties:

It is a concatenation of one or more words consisting of English letters.
All letters in the first word are lowercase.
For each of the subsequent words, the first letter is uppercase and rest of the letters are lowercase.
Given , print the number of words in  on a new line.

https://www.hackerrank.com/challenges/camelcase/problem

*/

const camelCase = function(s) {
	let result = 1;
    if(s.length === 0) return 0;
    for(let i = 0; i < s.length; i++) {
        if(s[i].toLocaleUpperCase() === s[i]) {
            result++;
        }
    }
    console.log(result);
}

word = 'saveChangesInTheEditor';
console.log(camelcase(word));