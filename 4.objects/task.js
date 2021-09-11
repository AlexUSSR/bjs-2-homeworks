"use strict"

function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}


Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}


Student.prototype.addMark = function(mark) {
  if ( this.marks === undefined) { 
    this.marks  = [mark];
    } else {
    this.marks.push(mark);
    }
}


Student.prototype.addMarks = function(...marks) {
  if ( this.marks === undefined) {
  	this.marks = marks;
    } else {
    this.marks.concat(marks);
    }
}



Student.prototype.getAverage = function() {
  if ( this.marks === undefined) return 0;

  let sum = 0;

  for (let i = 0; i < this.marks.length; i++) {
    sum += this.marks[i];

  }
  return sum / this.marks.length;
}



Student.prototype.exclude = function(reason) {
  this.excluded = reason;

	  delete this.subject;
    delete this.marks;
} 

let student11 = new Student("Tony", "male", 37);
student11.setSubject("Algebra");
student11.addMark(5);
student11.addMark(4);
student11.addMark(5);
console.log(student11.getAverage()); //4.6666
console.log(student11);
// {age: 37, gender: "male", marks: [5, 4, 5], name: "Tony", subject: "Algebra"}
let student12 = new Student("Buzz", "female", 35);
student12.setSubject("Geometry");
student12.addMark(2);
student12.addMark(3);
student12.addMark(2);
student12.exclude('low grades')
console.log(student12)
// {name: "Buzz", gender: "female", age: 35, excluded: "low grades"}







// ваш код для остальных методов