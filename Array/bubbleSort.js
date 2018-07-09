/*
Implement bubble sort
*/

// Va haciendo comparaciones y haciendo swap si el elemento
// siguiente es menor que el anterior
// La complejidad siempre será O(n^2)
function bubbleSort(array) {
  for(let i = 0; i < array.length-1; i++) {
    for(let j = 0; j < array.length-1-i; j++) {
      if(array[j] > array[j+1]) {
        //Swap
        let tmp = array[j];
        array[j] = array[j+1];
        array[j+1] = tmp;
      }
    }
  }
  return array;
}

array = [1,4,8,2,3,9,10,5,7,6];
console.log(bubbleSort(array));