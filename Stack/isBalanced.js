/*
A bracket is considered to be any one of the following characters: (, ), {, }, [, or ].

Two brackets are considered to be a matched pair if the an opening bracket (i.e., (, [, or {) occurs to the left of a
closing bracket (i.e., ), ], or }) of the exact same type. There are three types of matched pairs of brackets: [], {}, and ().

A matching pair of brackets is not balanced if the set of brackets it encloses are not matched. For example, {[(])} is not balanced
because the contents in between { and } are not balanced. The pair of square brackets encloses a single, unbalanced opening bracket, (, and
the pair of parentheses encloses a single, unbalanced closing square bracket, ].

By this logic, we say a sequence of brackets is considered to be balanced if the following conditions are met:

It contains no unmatched brackets.
The subset of brackets enclosed within the confines of a matched pair of brackets is also a matched pair of brackets.
Given  strings of brackets, determine whether each sequence of brackets is balanced. If a string is balanced
print YES on a new line; otherwise, print NO on a new line.

https://www.hackerrank.com/challenges/balanced-brackets/problem
*/

function isBalanced(s) {
    let stack = [];
    let elements = {
      '(' : ')',
      '[' : ']',
      '{' : '}',
    };
    let str = s.split('');
    for (let i = 0; i < str.length; i++) {
      let item = str[i]
      if(str[i] in elements) {
        stack.push(item);
      }else {
        if (stack.length === 0) {
          return "NO";
        }
        let pop = stack.pop();
        if (item !== elements[pop]) {
          return "NO";
        }
      }
    }
    return stack.length === 0 ? "YES" : "NO";
}

s = '{{[[(())]]}}';
console.log(isBalanced(s));