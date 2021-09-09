'use strict'

// Задание 1

function getArrayParams(arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;
  let avg = 0;

  for ( let i = 0; i < arr.length; i++) {
    if ( arr[i] > max) {
      max = arr[i];
    }   
    
    if ( arr[i] < min) {
      min = arr[i];
    }

    sum += arr[i];
  }

  avg = (sum / arr.length).toFixed(2);

  return { min:min, max:max, avg:Number(avg) };
}

console.log(getArrayParams([-99, 99, 10]));



// Задание 2

function worker(arr) {
  let sum = 0;

  for ( let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

function makeWork(arrOfArr, func) {
  let max = -Infinity;

    for ( let i = 0; i < arrOfArr.length; i++) {
      let sum = func(arrOfArr[i]);
      
      console.log(sum);

      if ( sum > max) {
        max = sum;
      }
    }
  
  return max;
}

function mincer(arrOfArr) {
  return makeWork(arrOfArr, worker);
}



// Задание 3

function worker2(arr) {
  let min = Infinity;
  let max = -Infinity;
  let dif = 0;

  for ( let i = 0; i < arr.length; i++) {
    if ( arr[i] > max) {
      max = arr[i];
    }   
    
    if ( arr[i] < min) {
      min = arr[i];
    }
  }
  dif = max - min;

  return dif;
}

function mincer2(arrOfArr) {
  return makeWork(arrOfArr, worker2);
}
