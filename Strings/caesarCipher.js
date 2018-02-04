/*

Julius Caesar protected his confidential information by encrypting it in a cipher. Caesar's cipher rotated every letter in a string by a fixed number, , making it unreadable by his enemies. Given a string, , and a number, , encrypt  and print the resulting string.

Note: The cipher only encrypts letters; symbols, such as -, remain unencrypted.

Input Format

The first line contains an integer, , which is the length of the unencrypted string. 
The second line contains the unencrypted string, . 
The third line contains the integer encryption key, , which is the number of letters to rotate.

https://www.hackerrank.com/challenges/caesar-cipher-1/problem
*/

const caeserCipher = function(word,k) {
  let result = '';
  let a;
  let aCode;
  let currentCode;
  for(let i = 0; i < word.length; i++) {
    if(/^[a-zA-Z]+$/.test(word[i])) {
      a = word[i] === word[i].toUpperCase() ? 'A' : 'a';
      aCode = a.charCodeAt(0);
      currentCode = word[i].charCodeAt(0);
      result +=  String.fromCharCode(((currentCode - aCode + k)%(26)) + aCode);
    }else {
      result += word[i];
    }
  }
  return result;
}

word = 'middle-Outz';
k = 2;
console.log(caeserCipher(word,k));
