/*
Alexa has two stacks of non-negative integers, stack  and stack  where index denotes the top of the stack. Alexa challenges
Nick to play the following game:

In each move, Nick can remove one integer from the top of either stack  or stack .
Nick keeps a running sum of the integers he removes from the two stacks.
Nick is disqualified from the game if, at any point, his running sum becomes greater than some integer 
given at the beginning of the game.
Nick's final score is the total number of integers he has removed from the two stacks.
Given , , and  for  games, find the maximum possible score Nick can achieve (i.e., the maximum number of integers he can
remove without being disqualified) during each game and print it on a new line.

https://www.hackerrank.com/challenges/game-of-two-stacks/problem
*/

function gameTwoStack(x, a, b) {
  let indexA = 0;
  let indexB = 0;
  let count = 0;
  let sum = 0;

  /*Sumamos los elementos en el stack A mientras no excedamos el
  limite que tenemos*/
  while(indexA < a.length && sum + a[indexA] <= x) {
    sum += a[indexA];
    indexA++;
  }
  /*Contamos los elementos que tenemos que hasta el momento
  es nuestro macximo*/
  count = indexA;

  /*Analizamos ahora en el stack B mientras que no contemos
  todos y tengamos como regresar elementos en el stack A*/
  while(indexB < b.length && indexA >= 0) {
    sum+= b[indexB];
    indexB++;
    /*Si la suma excede nuestro limite y tenemos elementos que regresar en A*/
    while(sum > x && indexA > 0){
      //Regresamos y actualizamos el valor
      indexA--;
      sum-= a[indexA];
    }
    /*Verificamos si tenemos un nuevo maximo checando la
    suma y los indexes que tenemos*/
    if(sum <= x && indexA + indexB > count) {
      count = indexA + indexB;
    }
  }
  return count;
}

x = 10;
a = [ 4, 2, 4, 6, 1 ];
b = [ 2, 1, 8, 5 ];

console.log(gameTwoStack(x, a, b));