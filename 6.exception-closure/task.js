'use strict'

// Задание 1

function parseCount(text) {                  
  
  const digit = Number.parseInt(text) 
  	if ( Number.isNaN(digit) == true) {
  	  throw new Error('Невалидное значение');
  	} return digit;
  
}
console.log(parseCount('56')); 


function validateCount(text) { 
    let digit2;
  	try { digit2 = parseCount(text)
  	} catch (err) {
        return err;
  	} return digit2;
}

console.log(validateCount('234'));


// Задание 2

class Triangle {
	constructor(a, b, c) {
      this.a = a;
      this.b = b;
      this.c = c;
    
    if ( this.a + this.b < this.c || this.a + this.c < this.b || this.c + this.b < this.a) {
	  	throw new Error('Треугольник с такими сторонами не существует');
	  	}
	}

    getPrimeter() {
      let p = this.a + this.b + this.c; // периметр
      return p.toFixed(3);
    }

    getArea() {
      let floorP = p / 2;  // полупериметр
      let area = Math.sqrt(floorP * (floorP - this.a) * (floorP - this.b) * (floorP - this.c)); // площадь
      return area.toFixed(3);
   }


    getTriangle = function(a, b, c) {
      try {
        return new Triangle(a, b, c);
      } catch (err) {
        
          getPerimeter() 
          return 'Ошибка! Треугольник не существует';
          
          getArea() 
          return 'Ошибка! Треугольник не существует';
        }
    }
}


  

