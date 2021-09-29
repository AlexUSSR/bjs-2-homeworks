'use strict'

// Задание 1

function parseCount(text) {                  
  
  const digit = Number.parseInt(text) 
  	if ( Number.isNaN(digit)) {
  	  throw new Error('Невалидное значение');
  	} return digit;
  
}
console.log(parseCount('56')); 


function validateCount(text) { 
    let digit2;
  	try { return parseCount(text)
    } catch (err) {
        return err;
  	} return digit2;
}

console.log(validateCount('234'));


// Задание 2

class Triangle {
	constructor(a, b, c) {
      if ( a + b < c || a + c < b || c + b < a) {
	  throw new Error('Треугольник с такими сторонами не существует');
	  }
	  this.a = a;
      this.b = b;
      this.c = c;
	}

    getPerimeter() {
      let p = this.a + this.b + this.c; // периметр
      return p;
    }

    getArea() {
      let floorP = this.getPerimeter() / 2;  // полупериметр
      let area = Math.sqrt(floorP * (floorP - this.a) * (floorP - this.b) * (floorP - this.c)); // площадь
      return Number(area.toFixed(3));
    }

}

function getTriangle(a, b, c) {
  try {
    return new Triangle(a, b, c);
    } catch {
        return {
          getPerimeter() {
          return 'Ошибка! Треугольник не существует';
          },
          getArea() {
          return 'Ошибка! Треугольник не существует';
          }
        }
      }
}

  

