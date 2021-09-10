"use strict"

// Задание 1

function compareArrays(arr1, arr2) {
  
  if ( arr1.length != arr2.length) return false;
  
  for (let i = 0; i < arr1.length; i++) {
    if ( arr1[i] !== arr2[i]) return false;
  }
  
  return true; // boolean
}

console.log(compareArrays([8, 1, 2], [8, 1, 2]));
console.log(compareArrays([8, 1, 3], [8, 1, 2]));




// Задание 2

function advancedFilter(arr) {
  let resultArr = arr.filter((arr) => arr > 0)
                     .filter((arr) => arr % 3 === 0)
                     .map((arr) => arr * 10);

  console.log(resultArr);
  
  return resultArr; // array
}

