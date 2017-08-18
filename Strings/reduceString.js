/*
Steve has a string, , consisting of  lowercase English alphabetic letters. 
In one operation, he can delete any pair of adjacent letters with same value. 
For example, string "aabcc" would become either "aab" or "bcc" after operation.

Steve wants to reduce  as much as possible. To do this, he will repeat the above 
operation as many times as it can be performed. Help Steve out by finding and 
printing 's non-reducible form!

Note: If the final string is empty, print Empty String .

https://www.hackerrank.com/challenges/reduced-string
*/

function reduceString(str){
  for(let i = 1; i < str.length; i++){
    if(str[i] === str[i-1]){
      str = str.substring(0, i-1) + str.substring(i+1);
      i = 0;
    }
  }
  return str.length === 0 ? 'Empty String' : str;
}

str = "aaabccddd";
console.log(reduceString(str));
