'use strict'

// Задание 1

function parseCount(text) {                  // Задание 1.1
  
  const digit = Number.parseInt(text) {
  	if ( digit == NaN) 
  	  throw Number.isNan(NaN)"Невалидное значение";
  	  return text;
  }

  validateCount(text) = function() => {      // Задание 1.2
  	try {
      if ( digit != NaN)
      	return digit;
  	} catch (err) {
        console.log("Произошла ОШИБКА!")
  	}
  }
}

parseCount("i'm not a number");