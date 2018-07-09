function bubbleSort(array) {
  let count = 0;
  for(let i = 0; i < array.length-1; i++) {
    for(let j = 0; j < array.length-1-i; j++) {
      if(array[j] > array[j+1]) {
        //Swap
        let tmp = array[j];
        array[j] = array[j+1];
        array[j+1] = tmp;
      }
      count++;
    }
  }
  console.log(count);
  return array;
}

array = [2,6,10,3,1,8,9,7,5,4];
//array = [1,2,3,4,5,6,7,8,9,10];
console.log(bubbleSort(array));

// Optimización

// Va haciendo comparaciones y haciendo swap si el elemento
// siguiente es menor que el anterior
// La complejidad siempre será O(n^2)
function bubbleSortOp(array) {
  let swapped = true;
  let count = 0;
  for(let i = 0; i < array.length-1 && swapped; i++) {
    swapped = false;
    for(let j = 0; j < array.length-1-i; j++) {
      if(array[j] > array[j+1]) {
        //Swap
        let tmp = array[j];
        array[j] = array[j+1];
        array[j+1] = tmp;
        swapped = true;
      }
      count++;
    }
  }
  console.log(count);
  return array;
}

array = [2,6,10,3,1,8,9,7,5,4];
console.log(bubbleSortOp(array));