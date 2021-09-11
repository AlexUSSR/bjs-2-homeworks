"use strict"

// Задание 1

function compareArrays(arr1, arr2) {
  
  return arr1.length == arr2.length && arr1.every((value, index) => { return value === arr2[index]});
}



// Задание 2

function advancedFilter(arr) {
  let resultArr = arr.filter((arr) => arr > 0)
                     .filter((arr) => arr % 3 === 0)
                     .map((arr) => arr * 10);

  console.log(resultArr);
  
  return resultArr; // array
}

