/*
You have three stacks of cylinders where each cylinder has the same diameter, but they may vary in height.
You can change the height of a stack by removing and discarding its topmost cylinder any number of times.

Find the maximum possible height of the stacks such that all of the stacks are exactly the same height.
This means you must remove zero or more cylinders from the top of zero or more of the three stacks until they're all the same height, then print the height. The removals must be performed in such a way as to maximize the height.

Note: An empty stack is still a stack.

Input Format

The first line contains three space-separated integers, , , and , describing the respective number of cylinders in stacks , , and .
The subsequent lines describe the respective heights of each cylinder in a stack from top to bottom:

The second line contains  space-separated integers describing the cylinder heights in stack .
The third line contains  space-separated integers describing the cylinder heights in stack .
The fourth line contains  space-separated integers describing the cylinder heights in stack .

https://www.hackerrank.com/challenges/equal-stacks/problem
*/

function equalStacks(h1, h2, h3) {
  let sum1 = getSum(h1);
  let sum2 = getSum(h2);
  let sum3 = getSum(h3);

  let i1 = 0;
  let i2 = 0;
  let i3 = 0;

  while(true) {
    if(sum1 > sum2 || sum1 > sum3) {
      sum1 -= h1[i1++];
    } else if(sum2 > sum1 || sum2 > sum3) {
      sum2 -= h2[i2++];
    }else if(sum3 > sum1 || sum3 > sum2) {
      sum3 -= h3[i3++];
    } else {
      break;
    }
  }
  // If we reach we point we know that all sum has exactly the same value
  return sum1;
}

const getSum = stack => stack.reduce((prev, curr) => prev+=curr);

s1 = [ 3, 2, 1, 1, 1 ];
s2 = [ 4, 3, 2 ];
s3 = [ 1, 1, 4, 1 ];
console.log(equalStacks(s1, s2, s3));
