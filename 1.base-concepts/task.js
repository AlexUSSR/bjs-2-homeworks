'use strict' 

function solveEquation(a, b, c) {
  const d = b ** 2 - 4 * a * c; // дискриминант
 
  if ( d < 0) {
    return [];
  } else if ( d == 0) {
    return [-b / (2 * a)];      // х
  } 
  return [(-b + Math.sqrt(d)) / (2 * a), (-b - Math.sqrt(d)) / (2 * a)]; // х1, х2
}

let case1 = solveEquation(3, 1, 2);
let case2 = solveEquation(1, 2, 1);
let case3 = solveEquation(1, 6, 1);

console.log('с аргументами 3, 1, 2 результат : ', case1);
console.log('с аргументами 1, 2, 1 результат : ', case2);
console.log('с аргументами 1, 6, 1 результат : ', case3);


 



function calculateTotalMortgage(percent_, contribution_, amount_, date) {
  let totalAmount;                         // общая сумма
  let nowDate = new Date();                // дата (месяц) первого взноса
                
  let percent = +percent_;
  let contribution = +contribution_;
  let amount = +amount_;

  if ( isNaN(percent) || percent <= 0) {
    return "Параметр \"Процентная ставка\" содержит неправильное значение \"" + percent_ + "\"";
  }

  if (isNaN(contribution) || contribution < 0) {
    return "Параметр \"Начальный взнос\" содержит неправильное значение \"" + contribution_ + "\"";
  }

  if (isNaN(amount) || amount <= 0) {
    return "Параметр \"Общая стоимость\" содержит неправильное значение \"" + amount_ + "\"";
  }

  if (!(date instanceof Date) || date <= nowDate) {
    return "Параметр \"Срок ипотеки\" содержит неправильное значение " + date;
  }

  let time = date - nowDate;               // разница времени в миллисекундах 
  let bodyCredit = amount - contribution;  // тело кредита

  let n = Math.floor(time / (1000 * 60 * 60 * 24 * 30));   // количество месяцев
  let p = percent / 12 / 100;
  let sumMonth = bodyCredit * (p + p / (((1 + p) ** n) - 1));

      totalAmount = sumMonth * n;

    console.log('Общая сумма к оплате : ', Math.round(totalAmount * 100) / 100);

  return Math.round(totalAmount * 100) / 100;
}

calculateTotalMortgage(10, 1000, 20000, 24);
